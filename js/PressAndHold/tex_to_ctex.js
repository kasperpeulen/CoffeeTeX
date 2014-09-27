/**
 * Created by kasperpeulen on 23/09/14.
 */




var tex_to_ctex = function () {
  //if (!$('#convert_latex').prop('checked')) {
  //  return;
  //}
  var m,newmacro,re ;
  if (!activeElement){
    activeElement = $('textarea');
  }

  var textarea = $(activeElement).val();
  var caret = getCaretPosition(activeElement);


  var oldlength = textarea.length;

  for (var i = 0; i < textarea.length; i++) {

    if (textarea[i] === "\\" ) {
      if (caret > i+2 || caret === textarea.length ){
      textarea = textarea.replace("\\{","❴").replace(/\\}/g,"❵").replace(/\\\(/g,"⁅").replace(/\n?\\\[\n?/g,"\n⁅").replace(/\n?\\\]\n?/g,"⁆\n").replace(/\\\)/g,"⁆").replace(/\\\\/g,"↵");
      }
      var searchStr = textarea.substring(i + 1);
      m = /(^[a-zA-Z]+)/g.exec(searchStr);
      if (m) m = m[0];
      if (m === "big" || m  === "Big"){
        m = searchStr.substring(0,4);
      }
      else if (m === "bigg" || m  === "Bigg"){
        m = searchStr.substring(0,5);
      }
      if (m == "frac") {
        if (/\s\S\S\s/g.test(textarea.slice(i + 5, i + 9))) {
          textarea = textarea.replace(textarea.slice(i, i + 8), textarea[i + 6] + "∕" + textarea[i + 7]);
        }
        else if (/\\frac([^a-zA-Z{}\s])([^{}])/g.test(textarea.slice(i, i + 7))){
          textarea = textarea.replace(textarea.slice(i, i + 7), textarea[i + 5] + "∕" + textarea[i + 6]);
        }

        else if (searchStr[m.length] === "{") {
          var arguments = matchRecursive(searchStr, "{...}");
          if (arguments.length > 1) {
            var re = "\\frac{" + arguments[0] + "}{" + arguments[1] + "}";
            var newre = "(" + arguments[0] + ")∕(" + arguments[1] + ")";
            textarea = textarea.replace(re, newre);
          }
        }
      }
      else if (m == "overset") {
        if (/\s\S\S\s/g.test(textarea.slice(i + 5, i + 9))) {
          textarea = textarea.replace(textarea.slice(i, i + 8), textarea[i + 6] + "∕" + textarea[i + 7]);
        }
        else if (searchStr[m.length] === "{") {
          var arguments = matchRecursive(searchStr, "{...}");
          if (arguments.length > 1) {
            var re = "\\overset{" + arguments[0] + "}{" + arguments[1] + "}";
            var newre = "(" + arguments[0] + ")↖(" + arguments[1] + ")";
            textarea = textarea.replace(re, newre);
          }
        }
      }
      else if (m == "underset") {
        if (/\s\S\S\s/g.test(textarea.slice(i + 5, i + 9))) {
          textarea = textarea.replace(textarea.slice(i, i + 8), textarea[i + 6] + "∕" + textarea[i + 7]);
        }
        else if (searchStr[m.length] === "{") {
          var arguments = matchRecursive(searchStr, "{...}");
          if (arguments.length > 1) {
            var re = "\\under{" + arguments[0] + "}{" + arguments[1] + "}";
            var newre = "(" + arguments[0] + ")↙(" + arguments[1] + ")";
            textarea = textarea.replace(re, newre);
          }
        }
      }
      else if (m === "text"){
      if (searchStr[m.length] === "{") {
        var arguments = matchRecursive(searchStr, "{...}");
        if (arguments.length > 0) {
          var re = "\\text{" + arguments[0] + "}";
          var newre = "\"" + arguments[0] + "\"";
          textarea = textarea.replace(re, newre);
        }
      }
    }

    else if (m === "begin" || m ==="end") {
        textarea = textarea.replace(/\\(begin)({(align|aligned|gather|equation)\*?}\n?)/g,"⁅");
        textarea = textarea.replace(/\n?\\(end)({(align|aligned|gather|equation)\*?})/g,"⁆");
      }
      else if (m === "mathbb" || m === "Bbb") {

            textarea = textarea.replace(/\\(mathbb|Bbb)(?: (\w)(?=[^a-zA-Z])|{(\w)})/g, function ($1, $2, $3,$4) {
              if ($3 === undefined ){$3 = "";}
              if ($4 === undefined ){$4 = "";}

              if (doublestruck[$3+$4]){
                  return  doublestruck[$3+$4];
              }
              else {
                return $1;
              }s
            });
       }
      else if (m === "mathfrak") {
        textarea = textarea.replace(/\\(mathfrak)(?: (\w)(?=[^a-zA-Z])|{(\w)})/g, function ($1, $2, $3,$4) {
          if ($3 === undefined ){$3 = "";}
          if ($4 === undefined ){$4 = "";}
          if (mathfrak[$3+$4]){
            return  mathfrak[$3+$4];
          }
          else {
            return $1;
          }
        });
      }
      else if (m === "mathcal") {
        textarea = textarea.replace(/\\(mathcal)(?: (\w)(?=[^a-zA-Z])|{(\w)})/g, function ($1, $2, $3,$4) {
          if ($3 === undefined ){$3 = "";}
          if ($4 === undefined ){$4 = "";}
          if (mathcal[$3+$4]){
            return  mathcal[$3+$4];
          }
          else {
            return $1;
          }
        });
      }
      else if (m === "mathbf") {
        textarea = textarea.replace(/\\(mathbf)(?: (\w)(?=[^a-zA-Z])|{(\w)})/g, function ($1, $2, $3,$4) {
          if ($3 === undefined ){$3 = "";}
          if ($4 === undefined ){$4 = "";}
          if (mathbf[$3+$4]){
            return  mathbf[$3+$4];
          }
          else {
            return $1;
          }
        });
      }

      else if (tex2unicode[m]) {
        if (tex2unicode[m].length < 3){
          newmacro = tex2unicode[m];
        }
        else {
        newmacro = String.fromCharCode(parseInt(tex2unicode[m], 16));
        }
        m = m.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');

        m = "\\\\("+m+")(?:( )|(?=[^a-zA-Z]))";
        re = new RegExp(m, "g");
        textarea = textarea.replace(re, newmacro);
        continue;
      }
      else if (accents[m]){
        b =  String.fromCharCode(parseInt(accents[m], 16));
        m = m.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        var re = new RegExp("\\\\(" + m + "){(..?)}", "g");
        textarea = textarea.replace(re, "$2"+b);
      }

    }
    else if ( textarea[i] === "^") {
      m = textarea[i] + textarea[i + 1];
      if (sup[textarea[i + 1]]) {
        newmacro = sup[textarea[i + 1]];
        m = m.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        re = new RegExp(m, "g");
        textarea = textarea.replace(re, newmacro);
        continue;
      }
    }
    else if (textarea[i] === "_" ) {
      m = textarea[i] + textarea[i + 1];
      if (sub[textarea[i + 1]]) {
        newmacro = sub[textarea[i + 1]];
        m = m.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        re = new RegExp(m, "g");
        textarea = textarea.replace(re, newmacro);
        continue;
      }
    }
  }



  var newlength = textarea.length ;


  if (newlength !== oldlength) {
    $('#text').val(textarea);
    setCaretPosition(activeElement, caret + newlength - oldlength);
  }

}