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

        console.log();

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
    var parseAndRender = function () {
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
            toParse = toParse.replace(/\\begin{defn}\n([\s\S]+?)\n\\end{defn}/g,"**Definition.**  \n$1");
            toParse = toParse.replace(/\\begin{prop}\n([\s\S]+?)\s?\n\\end{prop}/g,"**Proposition.**  \n<em>$1</em>");
            toParse = toParse.replace(/\\begin{proof}\n([\s\S]+?)\n\\end{proof}/g,"**Proof.**  \n$1");

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
        }, 10); // ms delay
    };

    $("#text").bind('keyup paste cut mouseup', parseAndRender);
    $("#text2").bind('keyup paste cut mouseup', parseAndRender);

    $("#text3").bind('keyup paste cut mouseup', parseAndRender);
    $(".option").change(render);
    parseAndRender();
});