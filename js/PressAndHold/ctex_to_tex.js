/**
 * Created by kasperpeulen on 20/09/14.
 */

var matchRecursive = function () {
    var	formatParts = /^([\S\s]+?)\.\.\.([\S\s]+)/,
        metaChar = /[-[\]{}()*+?.\\^$|,]/g,
        escape = function (str) {
            return str.replace(metaChar, "\\$&");
        };

    return function (str, format) {
        var p = formatParts.exec(format);
        if (!p) throw new Error("format must include start and end tokens separated by '...'");
        if (p[1] == p[2]) throw new Error("start and end format tokens cannot be identical");

        var	opener = p[1],
            closer = p[2],
        /* Use an optimized regex when opener and closer are one character each */
            iterator = new RegExp(format.length == 5 ? "["+escape(opener+closer)+"]" : escape(opener)+"|"+escape(closer), "g"),
            results = [],
            openTokens, matchStartIndex, match;

        do {
            openTokens = 0;
            while (match = iterator.exec(str)) {
                if (match[0] == opener) {
                    if (!openTokens)
                        matchStartIndex = iterator.lastIndex;
                    openTokens++;
                } else if (openTokens) {
                    openTokens--;
                    if (!openTokens)
                        results.push(str.slice(matchStartIndex, match.index));
                }
            }
        } while (openTokens && (iterator.lastIndex = matchStartIndex));

        return results;
    };
}();


var ctex_to_tex = function (){


    var textarea =$('#text').val();

    $('#latex').text(textarea);



    var binreg = function (symbol){
        var reg = new RegExp("(?:([^{}()\\[\\]])|[\\(\\[\\{](.*?)[\\)\\]\\}])"+symbol+"(?:([^{}\\(\\)\\[\\]])|[\\(\\[\\{](.*?)[\\)\\]\\}])","g");
        return reg;
    }



    //while (binreg("∕").test(textarea)){
        //textarea = textarea.replace(binreg("∕"),'\\frac{$1$2}{$3$4}');
    //}
    textarea = textarea.replace(binreg("¦"),'\\binom{$1$2}{$3$4}');
    textarea = textarea.replace(binreg("↖"),'\\overset{$3$4}{$1$2}');
    textarea = textarea.replace(binreg("↙"),'\\underset{$3$4}{$1$2}');


    var text = textarea.split('');
    for (var index = 0; index < text.length; index++) {
        if (text[index] === "⁅") {
            var sub=  textarea.substring(index);

            var endindex = sub.indexOf("⁆");
            var endindex2 = sub.indexOf("⁅");
            if (endindex !==-1 &&  endindex2 < endindex) {
                var innermath = sub.substring(0, endindex);
                if (innermath.indexOf("&") !== -1 ){
                   text[index+endindex]= "\\end{align*}" ;
                    text[index]= "\\begin{align*}" ;

                  textarea = text.join('');
                  text = textarea.split('');

                }
                else if (innermath.indexOf("\\\\") !== -1 ){


                    text[index+endindex]= "\\end{gather*}" ;
                    text[index]= "\\begin{gather*}" ;
                  textarea = text.join('');
                  text = textarea.split('');
                }

            }

        }
        var i = index;
        var before, after, m;
        if (text[i] === "∕") {
            if (text[i - 1] === "}") {
                m = matchRecursive(textarea.substring(0, i), "{...}");
                before = m[m.length - 1];
            }
            else if (text[i - 1] === ")") {
                m = matchRecursive(textarea.substring(0, i), "(...)");
                before = m[m.length - 1];
               }
            else if (text[i - 1] === "]") {
                m = matchRecursive(textarea.substring(0, i), "[...]");
                before = m[m.length - 1];
            }
            else {
                before = text[i - 1];
            }
            if (text[i + 1] === "{") {
                after = matchRecursive(textarea.substring(i + 1), "{...}")[0];
            }
            else if (text[i + 1] === "(") {
                after = matchRecursive(textarea.substring(i + 1), "(...)")[0];
            }
            else if (text[i + 1] === "[") {
                after = matchRecursive(textarea.substring(i + 1), "[...]")[0];
            }
            else if (text[i+1] === "⁆") {
                after = "";
            }
            else {

                after = textarea.substring(1+i).match(/^(?:(\d+)|([^\d]))/g)[0];

            }
            if ((before||before =="") && (after||after=="")) {

            before = before.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
            after = after.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');

            var re = new RegExp("[{(\\[]?(" + before + ")[})\\]]?∕[{(\\[]?(" + after + ")[\\]})]?", "g");
            textarea = textarea.replace(re, "\\frac{$1}{$2}");
            text = textarea.split('');
            //index = 0;
            }
        }


    }

    var subscripts = {



        "\uE101": "^{a}",
        "\uE102": "^{b}",
        "\uE103": "^{c}",
        "\uE104": "^{d}",
        "\uE105": "^{e}",
        "\uE106": "^{f}",
        "\uE107": "^{g}",
        "\uE108": "^{h}",
        "\uE109": "^{i}",
        "\uE110": "^{j}",
        "\uE111": "^{k}",
        "\uE112": "^{l}",
        "\uE113": "^{m}",
        "\uE114": "^{n}",
        "\uE115": "^{o}",
        "\uE116": "^{p}",
        "\uE117": "^{q}",
        "\uE118": "^{r}",
        "\uE119": "^{s}",
        "\uE120": "^{t}",
        "\uE121": "^{u}",
        "\uE122": "^{v}",
        "\uE123": "^{w}",
        "\uE124": "^{x}",
        "\uE125": "^{y}",
        "\uE126": "^{z}",
        

      "ᴬ": "^{A}",
      "ᴮ": "^{B}",
      "ᴰ": "^{D}",
      "ᴱ": "^{E}",
      "ᴳ": "^{G}",
      "ᴴ": "^{H}",
      "ᴵ": "^{I}",
      "ᴶ": "^{J}",
      "ᴷ": "^{K}",
      "ᴸ": "^{L}",
      "ᴹ": "^{M}",
      "ᴺ": "^{N}",
      "ᴼ": "^{O}",
      "ᴾ": "^{P}",
      "ᴿ": "^{R}",
      "ᵀ": "^{T}",
      "ᵁ": "^{U}",
      "ⱽ": "^{V}",
      "ᵂ": "^{W}",
      "ᵅ": "^{α}",
      "ᵝ": "^{β}",
      "ᵞ": "^{γ}",
      "ᵟ": "^{δ}",
      "ᵋ": "^{∊}",
      "ᶿ": "^{θ}",
      "ᶥ": "^{ι}",
      "ᶲ": "^{Φ}",
      "ᵠ": "^{φ}",
      "ᵡ": "^{χ}",

        "\uE001": "_{a}",
        "\uE002": "_{b}",
        "\uE003": "_{c}",
        "\uE004": "_{d}",
        "\uE005": "_{e}",
        "\uE006": "_{f}",
        "\uE007": "_{g}",
        "\uE008": "_{h}",
        "\uE009": "_{i}",
        "\uE010": "_{j}",
        "\uE011": "_{k}",
        "\uE012": "_{l}",
        "\uE013": "_{m}",
        "\uE014": "_{n}",
        "\uE015": "_{o}",
        "\uE016": "_{p}",
        "\uE017": "_{q}",
        "\uE018": "_{r}",
        "\uE019": "_{s}",
        "\uE020": "_{t}",
        "\uE021": "_{u}",
        "\uE022": "_{v}",
        "\uE023": "_{w}",
        "\uE024": "_{x}",
        "\uE025": "_{y}",
        "\uE026": "_{z}",
    
      "ᵦ": "_{β}",
      "ᵧ": "_{γ}",
      "ᵨ": "_{ρ}",
      "ᵩ": "_{φ}",
      "ᵪ": "_{χ}",

        "\u2080": "_{0}",
        "\u2081": "_{1}",
        "\u2082": "_{2}",
        "\u2083": "_{3}",
        "\u2084": "_{4}",
        "\u2085": "_{5}",
        "\u2086": "_{6}",
        "\u2087": "_{7}",
        "\u2088": "_{8}",
        "\u2089": "_{9}",
        "\u208A": "_{+}",
        "\u208B": "_{-}",
        "\u208C": "_{=}",
        "\u208D": "_{(}",
        "\u208E": "_{)}",
       // "\u208F": "_{|}",
        "\u2070": "^{0}",
        "\u2071": "^{1}",
        "\u2072": "^{2}",
        "\u2073": "^{3}",
        "\u2074": "^{4}",
        "\u2075": "^{5}",
        "\u2076": "^{6}",
        "\u2077": "^{7}",
        "\u2078": "^{8}",
        "\u2079": "^{9}",
        "\u207A": "^{+}",
        "\u207B": "^{-}",
        "\u207C": "^{=}",
        "\u207D": "^{(}",
        "\u207E": "^{)}",
        "\u207F": "^{|}",
      
      

        "𝐴": "$A$",
        "𝐼":"$I$",
        "𝑆":"$S$",
        "𝑈": "$U$",
        "𝑉": "$V$",
        "𝑊" : "$W$",
        "𝑄" : "$Q$",
        "𝑎" :"$a$",
        "𝑏" :"$b$",
        "𝑘": "$k$"
    }
    for (a in subscripts){
        var reg = new RegExp (a,"g");
        textarea = textarea.replace(reg,subscripts[a]);
    }

  textarea = textarea.replace(/(?:\^\{[\d\w\=\(\)\→\+\-]\}+)+/g, function($1) {
        return "^{"+$1.replace(/\^\{(.)\}/g,"$1")+"}";
    });
    textarea = textarea.replace(/(?:_\{[\d\w\=\(\)\→\+\-]\}+)+/g, function($1) {
      return "_{"+$1.replace(/_\{(.)\}/g,"$1")+"}";
    });

    textarea = textarea.replace(/(_)([^\s{}]*?)(\s|\^|⁆|\$)/g,'$1{$2}$3');
    textarea = textarea.replace(/(\^)([^\s{}]*?)(\s|\_|⁆|\$)/g,'$1{$2}$3');

    textarea = textarea.replace(/"(\w+)"(\(|\[|\{)/g,'\\mathop{\\mathrm{$1}}$2');
    textarea = textarea.replace(/"([^"]+)"/g,'\\text{$1}');

    textarea = textarea.replace(/^⁅([^⁅⁆]*?)⁆$/gm,"$$$$$1$$$");
    textarea = textarea.replace(/⁅/g,"\\(");
    textarea = textarea.replace(/⁆/g,"\\)");

  textarea = textarea.replace(/√(?:\s*?)(\S_{.*?})/g,'\\sqrt{$1}');

    for (var a in unicode_to_latex) {
      var newstr = unicode_to_latex[a];
      if (/[\u0300-\u036e\u1dc0-\u1dfe\u20d0-\u20fe\ufe20-\ufe2e]/.test(a)) {

        var index = textarea.indexOf(a);
        while (index !== -1) {
          var text = textarea.split('');
          text[index] = "{" + text[index - 1] + "}";
          if (text[index-2] === "\uD835" ){
            text[index] = "{" + text[index-2] +text[index - 1] + "}";
            text[index -2] ="";
          }

          text[index - 1] = newstr;
          textarea = text.join('');
          index = textarea.indexOf(a);
        }
      }
    }

  for (var a in unicode_to_latex) {
    var newstr = unicode_to_latex[a];
        var reg = new RegExp (a,"g");
    if (reg.test(textarea)){
        textarea = textarea.replace(reg,newstr);
    }
    }

    textarea = textarea.replace(/(^|[^\\])(sin|cos|arctan|arccos|arcsin|tan|csc|sec|cot|sinh|cosh|tanh|log|ln|det|dim|lim|mod|gcd|lcm|min|max)( |\(|\[|\{|\^|_)/g, '$1\\$2$3');

    $('#latex').text(textarea);

}