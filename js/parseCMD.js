/**
 * Created by test on 28/09/14.
 */


var writer = new stmd.HtmlRenderer();
var TeX_writer = new stmd.TeXRenderer();
var reader = new stmd.DocParser();
$(document).ready(function() {




    $(".timing").hide();
    var timer;
    var x;
    var parsed;
    var render = function() {
        if (parsed === undefined) {
            return;
        }

        var result = writer.renderBlock(parsed);
        if ($(activeElement)[0]["id"] === "text")
        {
            $("#preview1").html(result);

            MathJax.Hub.Queue(["Typeset", MathJax.Hub, "preview1"]);
        }

        else if ($(activeElement)[0]["id"] === "text2")
        {

            $("#preview2").html(result);

            MathJax.Hub.Queue(["Typeset", MathJax.Hub, "preview2"]);
        }
        else if ($(activeElement)[0]["id"] === "text3")
        {

            $("#preview3").html(result);

            MathJax.Hub.Queue(["Typeset", MathJax.Hub, "preview3"]);
        }

        // $("#html").text(result);


    };
    var parseAndRender = function (delay) {
        if (x) { x.abort() } // If there is an existing XHR, abort it.
        clearTimeout(timer); // Clear the timer so we don't end up with dupes.
        timer = setTimeout(function() { // assign timer a new timeout


            var startTime = new Date().getTime();
            tex_to_ctex();
            var endTime = new Date().getTime();
            var parseTime = endTime - startTime;
            startTime = new Date().getTime();
            ctex_to_tex();
            endTime = new Date().getTime();
            var renderTime = endTime - startTime;
            $('textarea').trigger('autosize.resize');
            var toParse = $("#latex").text();


            var latex = TeX_writer.renderBlock(reader.parse(toParse));
            $("#latex").text(latex);



            toParse = toParse.replace(/\\begin{thm}\n([\s\S]+?)\s?\n\\end{thm}/g,"**Theorem.**  \n<em>$1</em>");
            toParse = toParse.replace(/\\begin{thm}\[(.+?)\]([\s\S]+?)\s?\n\\end{thm}/g,"**$1.**  \n<em>$2</em>");
            toParse = toParse.replace(/\\begin{vraag}\n([\s\S]+?)\s?\n\\end{vraag}/g,"**Exercise.**  \n$1");
            toParse = toParse.replace(/\\begin{vraag}\[(.+?)\]([\s\S]+?)\s?\n\\end{vraag}/g,"**$1.**  $2");
            toParse = toParse.replace(/\\begin{defn}\n([\s\S]+?)\n\\end{defn}/g,"**Definition.**  \n$1");
            toParse = toParse.replace(/\\begin{prop}\n([\s\S]+?)\s?\n\\end{prop}/g,"**Proposition.**  \n<em>$1</em>");
            toParse = toParse.replace(/\\begin{opl}\n([\s\S]*)\n\\end{opl}/g,"\n**Proof.**  \n$1");
            toParse = toParse.replace(/\\begin{opl}\[(.+?)\]([\s\S]+?)\s?\n\\end{opl}/g,"**$1.**  $2");
            parsed = reader.parse(toParse);
            toParse = toParse.replace(/\\\(|\\\)/g,"$");
            toParse = toParse.replace(/\\\[|\\\]/g,"$$$");
            $("#markdown").text(toParse);

            $("#parsetime").text(parseTime);
            $("#rendertime").text(renderTime);
            $(".timing").show();
            /*
             var warnings = parsed.warnings;
             $("#warnings").html('');
             for (i=0; i < warnings.length; i++) {
             var w = warnings[i];
             var warning = $("#warnings").append('<li></li>');
             $("#warnings li").last().text('Line ' + w.line + ' column ' + w.column + ': ' + w.message);
             }
             */
            render();
        }, delay); // ms delay
    };

    $("#text").bind('keyup paste cut mouseup', function() {
        parseAndRender(10);
    });
    $("#text2").bind('keyup paste cut mouseup', function() {
        parseAndRender(10);
    });
    $("#text3").bind('keyup paste cut mouseup', function() {
        parseAndRender(10);
    });


    if ($('#title').val() !== ""){
        document.title = $('#title').val();

    }
    else{
        document.title = "Functietheorie"
    }

    $("#title").change(function() {
        document.title = $('#title').val();
        $('#title2').text(document.title+"\n");
        if (localStorage["Functietheorie|"+document.title+"|1"] === undefined) {
            $("#text").val("⟦𝐄𝐱𝐞𝐫𝐜𝐢𝐬𝐞.["+document.title+"]\n\n⟧\n\n⟦𝐏𝐫𝐨𝐨𝐟.\n\n⟧")
        }
        else {
            $("#text").val(localStorage["Functietheorie|"+document.title+"|1"]);
        }
        $("#text2").val(localStorage["Functietheorie|"+document.title+"|2"]);
        $("#text3").val(localStorage["Functietheorie|"+document.title+"|3"]);

        var ev = document.getElementById('text');
        setCaretPosition(ev, 21+document.title.length);


        activeElement = $('#text2');
        parseAndRender(0);

        setTimeout(function() {
            activeElement = $('#text');
            parseAndRender(0);
        }, 1);
    });
});