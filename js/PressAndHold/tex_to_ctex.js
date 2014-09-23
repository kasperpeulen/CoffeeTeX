/**
 * Created by kasperpeulen on 23/09/14.
 */


var tex2unicode = {


}

var tex_to_ctex = function () {
  if (!$('#convert_latex').prop('checked')) {
    return;
  }
    var textarea = $(activeElement).val();
    var caret = getCaretPosition(activeElement);

    var oldlength = textarea.length;
    for (var b in unicode_to_latex) {
        var a = unicode_to_latex[b];

        a = a.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        if (a == "\\\\bar"){console.log(a,b);}
        if (/[\u0300-\u036e\u1dc0-\u1dfe\u20d0-\u20fe\ufe20-\ufe2e]/.test(b)) {
            console.log("1");
            var re = new RegExp("(" + a + "){(\\w)}", "g");
            textarea = textarea.replace(re, "$2"+b);
        }
        else{
        var re = new RegExp("(" + a + ")", "g");
        textarea = textarea.replace(re, b);
        }
    }
    var newlength = textarea.length ;

    if (newlength !== oldlength) {
        $('#text').val(textarea);
        setCaretPosition(activeElement, caret + newlength - oldlength);
    }

}