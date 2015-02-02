
var strVar = "";
strVar += "<style>";
strVar += "";
strVar += ".long-press-popup {";
strVar += "  -moz-box-shadow: 0px 1px 3px 1px lightgray;";
strVar += "-webkit-box-shadow: 0px 1px 3px 1px lightgray;";
strVar += "box-shadow: 0px 2px 3px 0px lightgrey;";
strVar += "  font-family: 'LMMath-bbfix';";
strVar += "	position: relative;";
strVar += "	top:24px;";
strVar += "	left:-19px;";
strVar += "	padding: 2px;";
strVar += "	margin: 0px;";
strVar += "	background: #FEFFFF;";
strVar += "	font-size: 12pt;";
strVar += "	border: 1px #C1D7FD solid;";
strVar += "	list-style-type: none;";
strVar += "  display: inline-block;";
strVar += "  border-radius: 5px;";
strVar += "  line-height: 21px; ";
strVar += "}";
strVar += ".long-press-popup li {";
strVar += "position:relative;";
strVar += "  line-height: 21px; ";
strVar += "    border: 1px white solid;";
strVar += "    border-radius: 4px;";
strVar += "	background: white;";
strVar += "	color: #0A7ED0;";
strVar += "	text-align: center;";
strVar += "  display: inline-block;  ";
strVar += "  min-width:24px;";
strVar += "}";
strVar += ".long-press-popup p{";
strVar += "  border: 1px #B9D6F0 solid;";
strVar += "	background: #E5F1FE;";
strVar += "	color: #0A7ED0;";
strVar += "}";
strVar += ".long-press-popup .selected {";
strVar += "    border: 1px #B9D6F0 solid;";
strVar += "	background: #E5F1FE;";
strVar += "	color: #0A7ED0;";
strVar += "}";
strVar += "";
strVar += "";
strVar += ".popup-preview {";
strVar += "  -moz-box-shadow: 0px 1px 3px 1px lightgray;";
strVar += "-webkit-box-shadow: 0px 1px 3px 1px lightgray;";
strVar += "box-shadow: 0px 2px 3px 0px lightgrey;";
strVar += "  font-family: Cambria Math,STIXGeneral,Latin Modern Math, Helvetica;";
strVar += "	position: relative;";
strVar += "	top:0px;";
strVar += "	left:0px;";
strVar += "	padding: 2px;";
strVar += "	margin: 0px;";
strVar += "	background: #FEFFFF;";
strVar += "	font-size: 12pt;";
strVar += "	border: 1px #C1D7FD solid;";
strVar += "	list-style-type: none;";
strVar += "  display: inline-block;";
strVar += "  border-radius: 5px;";
strVar += "  line-height: 21px; ";
strVar += "}";
strVar += ".popup-preview li {";
strVar += "position:relative;";
strVar += "  line-height: 21px; ";
strVar += "    border: 1px white solid;";
strVar += "    border-radius: 4px;";
strVar += "	background: white;";
strVar += "	color: #0A7ED0;";
strVar += "	text-align: center;";
strVar += "  display: inline-block;  ";
strVar += "  min-width:24px;";
strVar += "}";
strVar += ".long-press-popup p{";
strVar += "  border: 1px #B9D6F0 solid;";
strVar += "	background: #E5F1FE;";
strVar += "	color: #0A7ED0;";
strVar += "}";
strVar += ".long-press-popup .selected {";
strVar += "    border: 1px #B9D6F0 solid;";
strVar += "	background: #E5F1FE;";
strVar += "	color: #0A7ED0;";
strVar += "}";
strVar += "";
strVar += "";
strVar += ".number {";
strVar += "  font-weight :lighter;";
strVar += "  font-family:Helvetica;";
strVar += "  text-align:center;";
strVar += "  font-size:9pt;";
strVar += "  padding: 0px;";
strVar += "  margin:0px;";
strVar += "  display: block;";
strVar += "    color: #CBCCCC;";
strVar += "}";
strVar += "<\/style>";
$(document).ready(function() {
    var tail = $('<div class="tail" style="position: absolute; z-index:1000;"></div> ');
    $('body').append(tail);

    $('head').append(strVar);
    var latexpre = "<code class=\"latex\"><code id=\"title2\"><\/code>\\begin{opg}\n<\/code><\/code><code id=\"latex1\">  <\/code><code class=\"latex\">\n";
    latexpre += "";
    latexpre += "\t\\begin{tools}";
    latexpre += "<\/code><code id=\"latex2\"><\/code><code class=\"latex\">";
    latexpre += "\n\t\\end{tools}\n\\end{opg}<\/code>";

    $('#latexpre').append(latexpre);
    $("#checkbox").change(function() {
        if(! this.checked) {
            $('#latex').css('display','none');
        }
        else {
            $('#latex').css('display','inline');
        }
    });
    $("#textarea2").change(function() {
        if(! this.checked) {
            $('#text2').css('display','none');
        }
        else {
            $('#text2').css('display','inline');
        }
    });
    $("#textarea3").change(function() {
        if(! this.checked) {
            $('#text3').css('display','none');
        }
        else {
            $('#text3').css('display','inline');
        }
    });
});
var typedChar;
var activeElement;

(function($, window, undefined) {
    var pluginName = 'longPress',
        document = window.document,
        defaults = {};
    var moreChars = markovChars;

    var ignoredKeys = [8, 13, 37, 38, 39, 40];
    var selectedCharIndex;
    var lastWhich;
    var timer;

    var keyup;
    var count = 0;
    var oldCharlength;
    var tail;
    var popup = $('<ul class=long-press-popup />');
    var onlyonce = false;
    $('html').click(function() {
        if (($('.long-press-popup').length > 0)) {
            hidePopup();
            //$('textarea').focus();
        }
    });
    $(window).mousewheel(onWheel);
    $(window).keyup(onKeyUp);
    $(window).on('keypress', function(e) {
        if (e.which === 39 || e.which == 34 || e.which == 96 || e.which == 94 || e.which == 126) {
            e.preventDefault();
        }
    });

    function onKeyDown(e) {



        activeElement = e.target;
        var font = $(activeElement).css('font-family');
        var hasSTIX = /STIX/g.test(font);
        if (!hasSTIX) {
            $(activeElement).css('font-family', "LMMath-bbfix");
        }
        if ($('.long-press-popup').length <= 0) {
            keyup = false;
            count += 1;

            if ( e.which == 93){
                onTimer();

            }
else{

            if (e.metaKey || e.which == 8 || e.which == 16 || e.which == 17 || e.which == 18 || e.which == 20 || e.which == 37 || e.which == 38 || e.which == 39 || e.which == 40 || e.which == 16 || e.which == 224) {
                return;
            }
            if (e.which == 9) {
                e.preventDefault();
                activeElement = e.target;
                var textArea = $(activeElement).val();
                var textAreaTxt = textArea.split("");
                var caretPos = getCaretPosition(activeElement);
                var newCaretPos = textArea.substring(caretPos-1).indexOf("⁆") + caretPos;
                var newCaretPos2 = textArea.substring(caretPos-1).indexOf("∕") + caretPos;
                var newCaretPos3 = textArea.substring(caretPos-1).indexOf("\"") + caretPos;
                var newCaretPos4 = textArea.substring(caretPos-1).indexOf(")") + caretPos;
                console.log("⁆"+newCaretPos,"/"+newCaretPos2,"\""+newCaretPos3,")"+newCaretPos4,caretPos);
                if (newCaretPos2 < newCaretPos && newCaretPos2 > caretPos )
                    {
                        newCaretPos = newCaretPos2;
                    }
                if (newCaretPos3 < newCaretPos && newCaretPos3 > caretPos )
                {
                    newCaretPos = newCaretPos3 -1;
                }
                if (newCaretPos4 < newCaretPos && newCaretPos4 > caretPos )
                {
                    newCaretPos = newCaretPos4 -1;
                }

                if ( newCaretPos === textAreaTxt.length || textAreaTxt[newCaretPos] === "\n"){
                    textAreaTxt[newCaretPos-1] += " ";
                }

                $(activeElement).val(textAreaTxt.join(""));
                setCaretPosition(activeElement, newCaretPos+1);
            }
            if (e.which == 32) {
                e.preventDefault();
                activeElement = e.target;
                var textAreaTxt = $(activeElement).val();
                var caretPos = getCaretPosition(activeElement);
                $(activeElement).val(textAreaTxt.substring(0, caretPos) + " " + textAreaTxt.substring(caretPos));
                setCaretPosition(activeElement, caretPos + 1);
            }
            if (e.which == 222 && e.shiftKey === false && ($('.long-press-popup').length <= 0)) {
                e.preventDefault();
                activeElement = e.target;
                var textAreaTxt = $(activeElement).val();
                var caretPos = getCaretPosition(activeElement);
                $(activeElement).val(textAreaTxt.substring(0, caretPos) + "'" + textAreaTxt.substring(caretPos));
                setCaretPosition(activeElement, caretPos + 1);
            }
            if (e.which == 222 && e.shiftKey === true && ($('.long-press-popup').length <= 0)) {
                e.preventDefault();
                activeElement = e.target;
                var textAreaTxt = $(activeElement).val();
                var caretPos = getCaretPosition(activeElement);
                $(activeElement).val(textAreaTxt.substring(0, caretPos) + '"' + textAreaTxt.substring(caretPos));
                setCaretPosition(activeElement, caretPos + 1);
            }
            if (e.which == 192 && e.shiftKey === true && ($('.long-press-popup').length <= 0)) {
                e.preventDefault();
                activeElement = e.target;
                var textAreaTxt = $(activeElement).val();
                var caretPos = getCaretPosition(activeElement);
                $(activeElement).val(textAreaTxt.substring(0, caretPos) + '~' + textAreaTxt.substring(caretPos));
                setCaretPosition(activeElement, caretPos + 1);
            }
            if (e.which == 192 && e.shiftKey === false && ($('.long-press-popup').length <= 0)) {
                e.preventDefault();
                activeElement = e.target;
                var textAreaTxt = $(activeElement).val();
                var caretPos = getCaretPosition(activeElement);
                $(activeElement).val(textAreaTxt.substring(0, caretPos) + '`' + textAreaTxt.substring(caretPos));
                setCaretPosition(activeElement, caretPos + 1);
            }
            if (e.which == 54 && e.shiftKey === true && ($('.long-press-popup').length <= 0)) {
                e.preventDefault();
                activeElement = e.target;
                var textAreaTxt = $(activeElement).val();
                var caretPos = getCaretPosition(activeElement);
                $(activeElement).val(textAreaTxt.substring(0, caretPos) + '^' + textAreaTxt.substring(caretPos));
                setCaretPosition(activeElement, caretPos + 1);
            }
            var oldcount = count;
            setTimeout(function() {
                if (!keyup && (oldcount === count)) {
                    onTimer();
                }
            }, 200);
        }}
        // Arrow key with popup visible
        if ($('.long-press-popup').length > 0) {
            if ( e.which == 93){
                activateNextLetter();
            }
            else if (e.which == 9) {
                e.preventDefault();
                hidePopup();
            } else if (e.which == 37) {
                activePreviousLetter();
                e.preventDefault();
            } else if (e.which == 39) {
                activateNextLetter();
                e.preventDefault();
            } else if (e.which == 13) {
                hidePopup();
                e.preventDefault();
            } else if (e.which == lastWhich) {
                e.preventDefault();
                if (keyup) {
                    activateNextLetter();
                }
            } else if (e.which == 49) {
                selectCharIndex(0);
                e.preventDefault();
                hidePopup();
            } else if (e.which == 50) {
                selectCharIndex(1);
                e.preventDefault();
                hidePopup();
            } else if (e.which == 51) {
                selectCharIndex(2);
                e.preventDefault();
                hidePopup();
            } else if (e.which == 52) {
                selectCharIndex(3);
                e.preventDefault();
                hidePopup();
            } else if (e.which == 53) {
                selectCharIndex(4);
                e.preventDefault();
                hidePopup();
            } else if (e.which == 54) {
                selectCharIndex(5);
                e.preventDefault();
                hidePopup();
            } else if (e.which == 55) {
                selectCharIndex(6);
                e.preventDefault();
                hidePopup();
            } else if (e.which == 56) {
                selectCharIndex(7);
                e.preventDefault();
                hidePopup();
            } else if (e.which == 57) {
                selectCharIndex(8);
                e.preventDefault();
                hidePopup();
            } else if (e.which == 32) {
                e.preventDefault();
                activeElement = e.target;
                var textAreaTxt = $(activeElement).val();
                var caretPos = getCaretPosition(activeElement);
                $(activeElement).val(textAreaTxt.substring(0, caretPos) + " " + textAreaTxt.substring(caretPos));
                setCaretPosition(activeElement, caretPos + 1);
                hidePopup();
            } else if (e.which == 27 || e.which == 8) {
                e.preventDefault();
                updateChar(-1);
                hidePopup();
            } else if (e.which != lastWhich) {
                hidePopup();
                var f = $.Event('keydown');
                f.which = e.which;
                $('textarea').trigger(f);
            }
        }
        activeElement = e.target;
        $("#checkbox").click(function() {
            hidePopup();
        });
        lastWhich = e.which;
    }

    function onKeyUp(e) {
        keyup = true;
    }

    function onTimer() {
        var text = $(activeElement).val().split('');
        var caretPos = getCaretPosition(activeElement);
        typedChar = text[caretPos- 1];
        if (typedChar === ">"){
            if( text[caretPos-2] === "-" ){
            typedChar = "->";
            }
            else if (text[caretPos-2] === "="){
                typedChar = "=>";
            }
        }

        if (moreChars[typedChar]) {
            showPopup((moreChars[typedChar]));
        } else {}
    }

    function showPopup(chars) {

        popup.empty();
        oldCharlength = typedChar.length;
        $('.tail').on('click', function(e) {
            e.preventDefault();
        });
        var letter;
        var count = 0;


        for (var i = 0; i < chars.length; i++) {
            if (chars[i] !== "{") {
                var title = "";
                if (unicode_to_latex[chars[i]]) {
                    title = unicode_to_latex[chars[i]];
                }
                letter = $('<li class="long-press-letter" title="' + title + '" />').html(chars[i] + "<span class=\"number\">" + (count + 1) + "</span>");


                letter.mousemove(function() {
                    var index = $(this).index();
                    activateLetter(index);
                });

                popup.append(letter);
                count += 1;
            } else {
                var title = "";
                var symbol = chars[i + 1] + chars[i + 2];
                if (unicode_to_latex[symbol]) {
                    title = unicode_to_latex[symbol];
                }
                letter = $('<li class=long-press-letter  title="' + title + '" />').html(chars[i + 1] + chars[i + 2] + "<span class=\"number\">" + (count + 1) + "</span>");
                letter.mousemove(function() {
                    var index = $(this).index();
                    activateDouble(index);
                });
                popup.append(letter);
                count += 1;
                i += 3;
            }
        }
        $('.tail').append(popup);
        var height = $(".long-press-popup").innerHeight();
        $(".long-press-popup li").each(function(index) {
            $(this).css('padding-top', height - $(this).height() - 6);
        });
        $('textarea').each(function(index) {
            if ($(this).is(":focus")) {
                $('.tail').css($(this).textareaHelper('caretPos'));
                var offset1 = $('.tail').offset();
                var offset2 = $(this).offset();
                $(".tail").css('top', offset1.top + offset2.top);
                $(".tail").css('left', offset1.left + offset2.left);
            }
        });
        $('input').each(function(index) {
            if ($(this).is(":focus")) {
                var offset2 = $(this).offset();
                $(".tail").css('top', offset2.top);
                $(".tail").css('left', offset2.left + 18);
            }
        });
        /*

         */
      if (chars === "{⁅⁆}"){
        selectCharIndex(0);
        hidePopup();
      }
      else{
        selectedCharIndex = -1;
      }
    }

    function activateLetter(i) {
        selectCharIndex(i);
    }

    function activateDouble(i) {
        selectCharIndex(i);
    }

    function activateRelativeLetter(i) {
        selectCharIndex(($('.long-press-letter').length + selectedCharIndex + i) % $('.long-press-letter').length);
    }

    function activateNextLetter() {
        activateRelativeLetter(1);
    }

    function activePreviousLetter() {
        activateRelativeLetter(-1);
    }

    function hidePopup() {
        popup.detach();
        keyup = false;
    }

    function onWheel(e, delta, deltaX, deltaY) {
        if ($('.long-press-popup').length === 0) return;
        e.preventDefault();
        delta < 0 ? activateNextLetter() : activePreviousLetter();
    }

    function selectCharIndex(i) {
        $('.long-press-letter.selected').removeClass('selected');
        $('.long-press-letter').eq(i).addClass('selected');
        selectedCharIndex = i;
        updateChar(i);
    }

    function updateChar(i) {
        var caretpostion;
        if (i === -1) {
            newChar = typedChar;
        }
        else {
        var endString = $('.long-press-letter.selected').text().indexOf((i+1).toString());
        var newChar = $('.long-press-letter.selected').text().substring(0, endString);

        }

        var pos = getCaretPosition(activeElement);
        var arVal = $(activeElement).val().split('');

        if (newChar == "∕" && arVal[pos-3] == "(" ) {
            arVal[pos - 1] = newChar + "()";
            caretposition = pos -2 ;
        }
        else if (newChar.length == 2 && (oldCharlength == 1 || arVal[pos - 1] == typedChar)) {

            arVal[pos - 1] = newChar[0];
            arVal.splice(pos, 0, newChar[1]);
            caretposition = pos + newChar.length - 1;
            if (newChar[0] ==="⁅") {
                caretposition += -1;
            }
        } else if (arVal[pos - 1] == typedChar) {
            arVal[pos - 1] = newChar;
            caretposition = pos + newChar.length - 1;
        } else if (newChar.length == 2 && oldCharlength == 2) {
            arVal[pos - 2] = newChar[0];
            arVal[pos - 1] = newChar[1];
            caretposition = pos + newChar.length - 2;
        } else if (oldCharlength == 2) {
            arVal[pos - 2] = newChar;
            arVal[pos - 1] = "";
            caretposition = pos + newChar.length - 2;
        } else {
            arVal[pos - 1] = newChar;
            caretposition = pos + newChar.length - 1;
        }
        $(activeElement).val(arVal.join(''));
        setCaretPosition(activeElement, caretposition);
        oldCharlength = newChar.length;
    }

    function LongPress(element, options) {
        this.element = element;
        this.options = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }
    LongPress.prototype = {
        init: function() {
            $(this.element).keydown(onKeyDown);
        }
    };
    $.fn[pluginName] = function(options) {
        return this.each(function() {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new LongPress(this, options));
            }
        });
    };
}(jQuery, window));
