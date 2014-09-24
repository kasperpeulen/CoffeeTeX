/**
 * Created by kasperpeulen on 23/09/14.
 */


var tex2unicode = {
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
  surd: '221A',

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
  "mathfrak{A}" : "𝔄",
  "mathfrak{B}" : "𝔅",
  "mathfrak{C}" : "ℭ",
  "mathfrak{D}" : "𝔇",
  "mathfrak{E}" : "𝔈",
  "mathfrak{F}" : "𝔉",
  "mathfrak{G}" : "𝔊",
  "mathfrak{H}" : "ℌ",
  "mathfrak{I}" : "ℑ",
  "mathfrak{J}" : "𝔍",
  "mathfrak{K}" : "𝔎",
  "mathfrak{L}" : "𝔏",
  "mathfrak{M}" : "𝔐",
  "mathfrak{N}" : "𝔑",
  "mathfrak{O}" : "𝔒",
  "mathfrak{P}" : "𝔓",
  "mathfrak{Q}" : "𝔔",
  "mathfrak{R}" : "ℜ",
  "mathfrak{S}" : "𝔖",
  "mathfrak{T}" : "𝔗",
  "mathfrak{U}" : "𝔘",
  "mathfrak{V}" : "𝔙",
  "mathfrak{W}" : "𝔚",
  "mathfrak{X}" : "𝔛",
  "mathfrak{Y}" : "𝔜",
  "mathfrak{Z}" : "ℨ",
  "mathfrak{a}" : "𝔞",
  "mathfrak{b}" : "𝔟",
  "mathfrak{c}" : "𝔠",
  "mathfrak{d}" : "𝔡",
  "mathfrak{e}" : "𝔢",
  "mathfrak{f}" : "𝔣",
  "mathfrak{g}" : "𝔤",
  "mathfrak{h}" : "𝔥",
  "mathfrak{i}" : "𝔦",
  "mathfrak{j}" : "𝔧",
  "mathfrak{k}" : "𝔨",
  "mathfrak{l}" : "𝔩",
  "mathfrak{m}" : "𝔪",
  "mathfrak{n}" : "𝔫",
  "mathfrak{o}" : "𝔬",
  "mathfrak{p}" : "𝔭",
  "mathfrak{q}" : "𝔮",
  "mathfrak{r}" : "𝔯",
  "mathfrak{s}" : "𝔰",
  "mathfrak{t}" : "𝔱",
  "mathfrak{u}" : "𝔲",
  "mathfrak{v}" : "𝔳",
  "mathfrak{w}" : "𝔴",
  "mathfrak{x}" : "𝔵",
  "mathfrak{y}" : "𝔶",
  "mathfrak{z}" : "𝔷",
  "mathcal{A}" : "𝒜",
  "mathcal{B}" : "ℬ",
  "mathcal{C}" : "𝒞",
  "mathcal{D}" : "𝒟",
  "mathcal{E}" : "ℰ",
  "mathcal{F}" : "ℱ",
  "mathcal{G}" : "𝒢",
  "mathcal{H}" : "ℋ",
  "mathcal{I}" : "ℐ",
  "mathcal{J}" : "𝒥",
  "mathcal{K}" : "𝒦",
  "mathcal{L}" : "ℒ",
  "mathcal{M}" : "ℳ",
  "mathcal{N}" : "𝒩",
  "mathcal{O}" : "𝒪",
  "mathcal{P}" : "𝒫",
  "mathcal{Q}" : "𝒬",
  "mathcal{R}" : "ℛ",
  "mathcal{S}" : "𝒮",
  "mathcal{T}" : "𝒯",
  "mathcal{U}" : "𝒰",
  "mathcal{V}" : "𝒱",
  "mathcal{W}" : "𝒲",
  "mathcal{X}" : "𝒳",
  "mathcal{Y}" : "𝒴",
  "mathcal{Z}" : "𝒵"

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
var tex_to_ctex = function () {
  //if (!$('#convert_latex').prop('checked')) {
  //  return;
  //}
  var m,newmacro,re ;
  var textarea = $(activeElement).val();
  var caret = getCaretPosition(activeElement);
  var oldlength = textarea.length;

  for (var i = 0; i < textarea.length; i++) {
    if (textarea[i] === "\\") {
      var macro = textarea.substring(i + 1);
      var endindex = macro.indexOf([" "]);
      var chars = ["\\", "_", "^", "}"];
      for (var char in chars) {
        var endindex2 = macro.indexOf(chars[char]);
        if (chars[char] == "}" && endindex2 !== -1) {
          endindex2 += 1;
        }
        if ((endindex2 !== -1 && endindex2 < endindex ) || endindex == -1) {
          endindex = endindex2;
        }
      }
      m = macro.substring(0, endindex);
      if (tex2unicode[m]) {
        if (tex2unicode[m].length < 3){
          newmacro = tex2unicode[m];
        }
        else {
        newmacro = String.fromCharCode(parseInt(tex2unicode[m], 16));
        }
        re = new RegExp("\\\\" + m + "", "g");
        textarea = textarea.replace(re, newmacro);
        continue;
      }
      var re = /\\(mathbb|Bbb)[{| ](\w)[}| |\^|_|\\]/g;
      var subst = '$2';
      if (ma){
      var ma = re.exec(textarea);

      if (ma[2] in doublestruck) {
        textarea = textarea.replace(re, function ($1, $2, $3) {
            return doublestruck[$3];
          }
        );
      }
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

  /*  for (var b in unicode_to_latex) {
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
   */

}