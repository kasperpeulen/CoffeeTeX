/**
 * Created by kasperpeulen on 23/09/14.
 */


var tex2unicode = {




  '<': '27E8',
  '>': '27E9',

  alpha: '03B1',
  beta: '03B2',
  gamma: '03B3',
  delta: '03B4',
  epsilon: '03F5',
  zeta: '03B6',
  eta: '03B7',
  theta: '03B8',
  iota: '03B9',
  kappa: '03BA',
  lambda: '03BB',
  mu: '03BC',
  nu: '03BD',
  xi: '03BE',
  omicron: '03BF',
  pi: '03C0',
  rho: '03C1',
  sigma: '03C3',
  tau: '03C4',
  upsilon: '03C5',
  phi: '03D5',
  chi: '03C7',
  psi: '03C8',
  omega: '03C9',
  varepsilon: '03B5',
  vartheta: '03D1',
  varpi: '03D6',
  varrho: '03F1',
  varsigma: '03C2',
  varphi: '03C6',
  S: '00A7',
  aleph: '2135',
  hbar: '210F',
  imath: '0131',
  jmath: '0237',
  ell: '2113',
  wp: '2118',
  Re: '211C',
  Im: '2111',
  partial: '2202',
  infty: '221E',
  prime: '2032',
  emptyset: '2205',
  nabla: '2207',
  top: '22A4',
  bot: '22A5',
  angle: '2220',
  triangle: '25B3',
  backslash: '2216',
  forall: '2200',
  exists: '2203',
  neg: '00AC',
  lnot: '00AC',
  flat: '266D',
  natural: '266E',
  sharp: '266F',
  clubsuit: '2663',
  diamondsuit: '2662',
  heartsuit: '2661',
  spadesuit: '2660',
  sqrt: '221A',

  // big ops
  coprod: '2210',
  bigvee: '22C1',
  bigwedge: '22C0',
  biguplus: '2A04',
  bigcap: '22C2',
  bigcup: '22C3',
  'int': '222B',
  intop: '222B',
  iint: '222C',
  iiint: '222D',
  prod: '220F',
  sum: '2211',
  bigotimes: '2A02',
  bigoplus: '2A01',
  bigodot: '2A00',
  oint: '222E',
  bigsqcup: '2A06',
  smallint: '222B',

  // binary operations
  triangleleft: '25C3',
  triangleright: '25B9',
  bigtriangleup: '25B3',
  bigtriangledown: '25BD',
  wedge: '2227',
  land: '2227',
  vee: '2228',
  lor: '2228',
  cap: '2229',
  cup: '222A',
  ddagger: '2021',
  dagger: '2020',
  sqcap: '2293',
  sqcup: '2294',
  uplus: '228E',
  amalg: '2A3F',
  diamond: '22C4',
  bullet: '2219',
  wr: '2240',
  div: '00F7',
  odot: '2299',
  oslash: '2298',
  otimes: '2297',
  ominus: '2296',
  oplus: '2295',
  mp: '2213',
  pm: '00B1',
  circ: '2218',
  bigcirc: '25EF',
  setminus: '2216',
  cdot: '22C5',
  ast: '2217',
  times: '00D7',
  star: '22C6',

  // Relations
  propto: '221D',
  sqsubseteq: '2291',
  sqsupseteq: '2292',
  parallel: '2225',
  mid: '2223',
  dashv: '22A3',
  vdash: '22A2',
  leq: '2264',
  le: '2264',
  geq: '2265',
  ge: '2265',
  lt: '003C',
  gt: '003E',
  succ: '227B',
  prec: '227A',
  approx: '2248',
  succeq: '2AB0',  // or '227C',
  preceq: '2AAF',  // or '227D',
  supset: '2283',
  subset: '2282',
  supseteq: '2287',
  subseteq: '2286',
  'in': '2208',
  ni: '220B',
  notin: '2209',
  owns: '220B',
  gg: '226B',
  ll: '226A',
  sim: '223C',
  simeq: '2243',
  perp: '22A5',
  equiv: '2261',
  asymp: '224D',
  smile: '2323',
  frown: '2322',
  ne: '2260',
  neq: '2260',
  cong: '2245',
  doteq: '2250',
  bowtie: '22C8',
  models: '22A8',

  notChar: '29F8',


  // Arrows
  Leftrightarrow: '21D4',
  Leftarrow: '21D0',
  Rightarrow: '21D2',
  leftrightarrow: '2194',
  leftarrow: '2190',
  gets: '2190',
  rightarrow: '2192',
  to: '2192',
  mapsto: '21A6',
  leftharpoonup: '21BC',
  leftharpoondown: '21BD',
  rightharpoonup: '21C0',
  rightharpoondown: '21C1',
  nearrow: '2197',
  searrow: '2198',
  nwarrow: '2196',
  swarrow: '2199',
  rightleftharpoons: '21CC',
  hookrightarrow: '21AA',
  hookleftarrow: '21A9',
  longleftarrow: '27F5',
  Longleftarrow: '27F8',
  longrightarrow: '27F6',
  Longrightarrow: '27F9',
  Longleftrightarrow: '27FA',
  longleftrightarrow: '27F7',
  longmapsto: '27FC',


  // Misc.
  ldots: '2026',
  cdots: '22EF',
  vdots: '22EE',
  ddots: '22F1',
  dotsc: '2026',  // dots with commas
  dotsb: '22EF',  // dots with binary ops and relations
  dotsm: '22EF',  // dots with multiplication
  dotsi: '22EF',  // dots with integrals
  dotso: '2026',  // other dots

  ldotp: '002E',
  cdotp: '22C5',
  colon: '003A',

  Gamma: '0393',
  Delta: '0394',
  Theta: '0398',
  Lambda: '039B',
  Xi: '039E',
  Pi: '03A0',
  Sigma: '03A3',
  Upsilon: '03A5',
  Phi: '03A6',
  Psi: '03A8',
  Omega: '03A9',
  'uparrow': '2191',
  'downarrow': '2193',
  'updownarrow': '2195',
  'Uparrow': '21D1',
  'Downarrow': '21D3',
  'Updownarrow': '21D5',
  'rangle': '27E9',
  'langle': '27E8',
  'rceil': '2309',
  'lceil': '2308',
  'rfloor': '230B',
  'lfloor': '230A',

//  'lt': '27E8',
//  'gt': '27E9',
  'rbrace': '❵',
  'lbrace': '❴',

  'big(' : '􀀢',
  'Big(' : '􀀣',
  'bigg(' : '􀀤',
  'Bigg(' : '􀀥',
  'big)' : '􀀩',
  'Big)' : '􀀪',
  'bigg)' : '􀀫',
  'Bigg)' : '􀀬',
  'big[' : '􀀑',
  'Big[' : '􀀒',
  'bigg[' : '􀀓',
  'Bigg[' : '􀀔',
  'big]' : '􀀘',
  'Big]' : '􀀙',
  'bigg]' : '􀀚',
  'Bigg]' : '􀀛',
  'big❴' : '􀀁',
  'Big❴' : '􀀂',
  'bigg❴' : '􀀃',
  'Bigg❴' : '􀀄',
  'big❵' : '􀀈',
  'Big❵' : '􀀉',
  'bigg❵' : '􀀊',
  'Bigg❵' : '􀀋',

   quad : "2003"


}
var subsup = {
  "^{1}":"00B9",
  "^{0}":"⁰",
  "^{2}":"00B2",
  "^{3}":"00B3",
  "^{i}":"2071",
  "^{4}":"2074",
  "^{5}":"2075",
  "^{6}":"2076",
  "^{7}":"2077",
  "^{8}":"2078",
  "^{9}":"2079",
  "^{+}":"207A",
  "^{-}":"207B",
  "^{=}":"207C",
  "^{(}":"207D",
  "^{)}":"207E",
  "^{n}":"207F",
  "_{0}":"2080",
  "_{1}":"2081",
  "_{2}":"2082",
  "_{3}":"2083",
  "_{4}":"2084",
  "_{5}":"2085",
  "_{6}":"2086",
  "_{7}":"2087",
  "_{8}":"2088",
  "_{9}":"2089",
  "_{+}":"208A",
  "_{-}":"208B",
  "_{=}":"208C",
  "_{(}":"208D",
  "_{)}":"208E",
  "_{x}":"2093",
  "_{k}":"2096",
  "_{n}":"2099",
  "_{m}":"2098",
  "_{i}":"1D62",

  "^1":"00B9",
  "^0":"⁰",
  "^2":"00B2",
  "^3":"00B3",
  "^i":"2071",
  "^4":"2074",
  "^5":"2075",
  "^6":"2076",
  "^7":"2077",
  "^8":"2078",
  "^9":"2079",
  "^+":"207A",
  "^-":"207B",
  "^=":"207C",
  "^(":"207D",
  "^)":"207E",
  "^n":"207F",
  "_0":"2080",
  "_1":"2081",
  "_2":"2082",
  "_3":"2083",
  "_4":"2084",
  "_5":"2085",
  "_6":"2086",
  "_7":"2087",
  "_8":"2088",
  "_9":"2089",
  "_+":"208A",
  "_-":"208B",
  "_=":"208C",
  "_(":"208D",
  "_)":"208E",
  "_x":"2093",
  "_k":"2096",
  "_n":"2099",
  "_m":"2098",
  "_i":"1D62"

}
var doublestruck = {
  "A" : "𝔸",
  "B" : "𝔹",
  "C":"ℂ",
  "D": "𝔻",
  "E":"𝔼",
  "F" : "𝔽",
  "G":"𝔾",
  "H": "ℍ" ,
  "I":"𝕀",
  "J":"𝕁",
  "K":"𝕂",
  "L":"𝕃",
  "M":"𝕄",
  "N": "ℕ" ,
  "O":"𝕆" ,
  "P":"ℙ",
  "Q":"ℚ" ,
  "R":"ℝ" ,
  "S":"𝕊",
  "T":"𝕋",
  "U":"𝕌",
  "V":"𝕍",
  "W":"𝕎",
  "X":"𝕏",
  "Y":"𝕐" ,
  "Z":"ℤ" ,
  "k":"𝕜"
}

var mathfrak = {
  "A" : "𝔄",
  "B" : "𝔅",
  "C" : "ℭ",
  "D" : "𝔇",
  "E" : "𝔈",
  "F" : "𝔉",
  "G" : "𝔊",
  "H" : "ℌ",
  "I" : "ℑ",
  "J" : "𝔍",
  "K" : "𝔎",
  "L" : "𝔏",
  "M" : "𝔐",
  "N" : "𝔑",
  "O" : "𝔒",
  "P" : "𝔓",
  "Q" : "𝔔",
  "R" : "ℜ",
  "S" : "𝔖",
  "T" : "𝔗",
  "U" : "𝔘",
  "V" : "𝔙",
  "W" : "𝔚",
  "X" : "𝔛",
  "Y" : "𝔜",
  "Z" : "ℨ",
  "a" : "𝔞",
  "b" : "𝔟",
  "c" : "𝔠",
  "d" : "𝔡",
  "e" : "𝔢",
  "f" : "𝔣",
  "g" : "𝔤",
  "h" : "𝔥",
  "i" : "𝔦",
  "j" : "𝔧",
  "k" : "𝔨",
  "l" : "𝔩",
  "m" : "𝔪",
  "n" : "𝔫",
  "o" : "𝔬",
  "p" : "𝔭",
  "q" : "𝔮",
  "r" : "𝔯",
  "s" : "𝔰",
  "t" : "𝔱",
  "u" : "𝔲",
  "v" : "𝔳",
  "w" : "𝔴",
  "x" : "𝔵",
  "y" : "𝔶",
  "z" : "𝔷"
}

var mathcal =  {

  "A" : "𝒜",
  "B" : "ℬ",
  "C" : "𝒞",
  "D" : "𝒟",
  "E" : "ℰ",
  "F" : "ℱ",
  "G" : "𝒢",
  "H" : "ℋ",
  "I" : "ℐ",
  "J" : "𝒥",
  "K" : "𝒦",
  "L" : "ℒ",
  "M" : "ℳ",
  "N" : "𝒩",
  "O" : "𝒪",
  "P" : "𝒫",
  "Q" : "𝒬",
  "R" : "ℛ",
  "S" : "𝒮",
  "T" : "𝒯",
  "U" : "𝒰",
  "V" : "𝒱",
  "W" : "𝒲",
  "X" : "𝒳",
  "Y" : "𝒴",
  "Z" : "𝒵"
  
}

var mathbf = {


  "A": "DC00",
    "B": "DC01",
    "C": "DC02",
    "D": "DC03",
    "E": "DC04",
    "F": "DC05",
    "G": "DC06",
    "H": "DC07",
    "I": "DC08",
    "J": "DC09",
    "K": "DC0A",
    "L": "DC0B",
    "M": "DC0C",
    "N": "DC0D",
    "O": "DC0E",
    "P": "DC0F",
    "Q": "DC10",
    "R": "DC11",
    "S": "DC12",
    "T": "DC13",
    "U": "DC14",
    "V": "DC15",
    "W": "DC16",
    "X": "DC17",
    "Y": "DC18",
    "Z": "DC19",
    "a": "DC1A",
    "b": "DC1B",
    "c": "DC1C",
    "d": "DC1D",
    "e": "DC1E",
    "f": "DC1F",
    "g": "DC20",
    "h": "DC21",
    "i": "DC22",
    "j": "DC23",
    "k": "DC24",
    "l": "DC25",
    "m": "DC26",
    "n": "DC27",
    "o": "DC28",
    "p": "DC29",
    "q": "DC2A",
    "r": "DC2B",
    "s": "DC2C",
    "t": "DC2D",
    "u": "DC2E",
    "v": "DC2F",
    "w": "DC30",
    "x": "DC31",
    "y": "DC32",
    "z": "DC33"
}

var accents = {
  acute:  "0301", // or 0301 or 02CA
  grave:  "0300", // or 0300 or 02CB
  ddot:  "0308", // or 0308
  tilde:  "0303", // or 0303 or 02DC
  bar:  "0304", // or 0304 or 02C9
  breve:  "0306", // or 0306
  check:  "030C", // or 030C
  hat:  "0302", // or 0302 or 02C6
  vec:  "20D7", // or 20D7
  dot:  "0307" // or 0307
//  widetilde:  "0303", // or 0303 or 02DC
//  widehat:  "005E", // or 0302 or 02C6
  
}
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
      m = /(^[a-zA]+)/g.exec(searchStr);
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
            return  "\uD835" + String.fromCharCode(parseInt(mathbf[$3+$4], 16));
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
    else if (textarea[i] === "_" || textarea[i] === "^") {
      m = textarea[i] + textarea[i + 1];
      if (subsup[m]) {
        newmacro = String.fromCharCode(parseInt(subsup[m], 16));
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