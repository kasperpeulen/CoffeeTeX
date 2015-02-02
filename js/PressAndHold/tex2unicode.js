/**
 * Created by kasperpeulen on 25/09/14.
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

  quad : "2003",
  qquad : "▭",
  "texttrademark": "™",
  "trademark": "™",
  "textregistered": "®",
  "registered": "®",
  "copyright": "©",
  "pilcrow": "¶",
  "pound": "£",
  "euro": "€",
  "cents": "¢",
  "section": "§",
  "space": "␣",
  "degree": "°",

  "Vvdash": "⊪",
  "veebar": "⊻",

  "Vdash": "⊩",
  "vDash": "⊨",
  "vartriangleright": "⊳",
  "vartriangleleft": "⊲",
  "vartriangle": "△",

  "varpropto": "∝",

  "varnothing": "∅",
  "varkappa": "ϰ",

  "upuparrows": "⇈",

  "upharpoonright": "↾",
  "upharpoonleft": "↿",

  "unrhd": "⊵",
  "unlhd": "⊴",
  "twoheadrightarrow": "↠",
  "twoheadleftarrow": "↞",
  "trianglerighteq": "⊵",

  "triangleq": "≜",
  "trianglelefteq": "⊴",
  "triangledown": "▽",
  "thicksim": "∼",
  "thickapprox": "≈",
  "therefore": "∴",
  "surd": "√",
  "Supset": "⋑",
  "succsim": "≿",
  "succcurlyeq": "≽",
  "Subset": "⋐",
  "square": "□",
  "sqsupset": "⊐",
  "sqsubset": "⊏",
  "sphericalangle": "∢",
  "smallsmile": "⌣",
  "smallsetminus": "∖",
  "smallfrown": "⌢",
  "shortparallel": "∥",
  "rtimes": "⋈",
  "Rsh": "↱",
  "Rrightarrow": "⇛",
  "risingdotseq": "≓",
  "rightthreetimes": "⋌",
  "rightsquigarrow": "⇝",
  "rightrightarrows": "⇉",
  "rightleftarrows": "⇄",
  "rightarrowtail": "↣",
  "rhd": "⊳",
  "precsim": "≾",
  "preccurlyeq": "≼",
  "pitchfork": "⋔",
  "nexists": "∄",
  "multimap": "⊸",
  "mho": "℧",
  "measuredangle": "∡",
  "ltimes": "⋉",
  "Lsh": "↰",
  "lozenge": "◊",
  "looparrowright": "↬",
  "looparrowleft": "↫",
  "lll": "⋘",
  "Lleftarrow": "⇚",
  "lhd": "⊲",
  "lesssim": "≲",
  "lessgtr": "≶",
  "lesseqgtr": "⋚",
  "lessdot": "⋖",
  "leqslant": "≤",
  "leqq": "≦",
  "leftthreetimes": "⋋",
  "leftrightsquigarrow": "↭",
  "leftrightharpoons": "⇋",
  "leftrightarrows": "⇆",
  "leftleftarrows": "⇇",
  "leftarrowtail": "↢",
  "leadsto": "↝",
  "Join": "⋈",
  "intercal": "⊺",
  "implies": "⇒",
  "hslash": "ℏ",
  "gtrsim": "≳",
  "gtrless": "≷",
  "gtreqless": "⋛",
  "gtrdot": "⋗",
  "gimel": "ג",
  "ggg": "⋙",
  "geqq": "≧",
  "Finv": "Ⅎ",
  "fallingdotseq": "≒",
  "eth": "ð",
  "eqcirc": "≖",
  "downharpoonright": "⇂",
  "downharpoonleft": "⇃",
  "downdownarrows": "⇊",
  "dots": "…",
  "dotplus": "∔",
  "doteqdot": "≑",
  "divideontimes": "⋇",
  "digamma": "Ϝ",
  "Diamond": "◇",
  "dashrightarrow": "⇢",
  "dashleftarrow": "⇠",
  "daleth": "ד",
  "curvearrowright": "↷",
  "curvearrowleft": "↶",
  "curlywedge": "⋏",
  "curlyvee": "⋎",
  "curlyeqsucc": "⋟",
  "curlyeqprec": "⋞",
  "Cup": "⋓",
  "complement": "∁",
  "circledS": "Ⓢ",
  "circleddash": "⊝",
  "circledcirc": "⊚",
  "circledast": "⊛",
  "circlearrowright": "↻",
  "circlearrowleft": "↺",
  "circeq": "≗",
  "centerdot": "⋅",
  "Cap": "⋒",
  "Bumpeq": "≎",
  "bumpeq": "≏",
  "boxtimes": "⊠",
  "boxplus": "⊞",
  "boxminus": "⊟",
  "boxdot": "⊡",
  "Box": "□",
  "blacktriangleright": "▷",
  "blacktriangleleft": "◀",
  "blacktriangledown": "▼",
  "blacktriangle": "▲",
  "blacksquare": "■",
  "blacklozenge": "◆",
  "between": "≬",
  "beth": "ב",
  "because": "∵",
  "barwedge": "⊼",
  "backsim": "∽",
  "backprime": "‵",
  "backepsilon": "∍",
  "approxeq": "≊"
}
var sup = {
  "0": "\u2070",
  "1": "\u2071",
  "2": "\u2072",
  "3": "\u2073",
  "4": "\u2074",
  "5": "\u2075",
  "6": "\u2076",
  "7": "\u2077",
  "8": "\u2078",
  "9": "\u2079",
  "+": "\u207A",
  "-": "\u207B",
  "=": "\u207C",
  "(": "\u207D",
  ")": "\u207E",
  "|": "\u207F",
    a:"\uE101",
    b:"\uE102",
    c:"\uE103",
    d:"\uE104",
    e:"\uE105",
    f:"\uE106",
    g:"\uE107",
    h:"\uE108",
    i:"\uE109",
    j:"\uE110",
    k:"\uE111",
    l:"\uE112",
    m:"\uE113",
    n:"\uE114",
    o:"\uE115",
    p:"\uE116",
    q:"\uE117",
    r:"\uE118",
    s:"\uE119",
    t:"\uE120",
    u:"\uE121",
    v:"\uE122",
    w:"\uE123",
    x:"\uE124",
    y:"\uE125",
    z:"\uE126",
    
    
  "A": "ᴬ",
  "B": "ᴮ",
  "D": "ᴰ",
  "E": "ᴱ",
  "G": "ᴳ",
  "H": "ᴴ",
  "I": "ᴵ",
  "J": "ᴶ",
  "K": "ᴷ",
  "L": "ᴸ",
  "M": "ᴹ",
  "N": "ᴺ",
  "O": "ᴼ",
  "P": "ᴾ",
  "R": "ᴿ",
  "T": "ᵀ",
  "U": "ᵁ",
  "V": "ⱽ",
  "W": "ᵂ",
  "α": "ᵅ",
  "β": "ᵝ",
  "γ": "ᵞ",
  "δ": "ᵟ",
  "∊": "ᵋ",
  "θ": "ᶿ",
  "ι": "ᶥ",
  "Φ": "ᶲ",
  "φ": "ᵠ",
  "χ": "ᵡ"

}



var sub = {
  "0": "\u2080",
  "1": "\u2081",
  "2": "\u2082",
  "3": "\u2083",
  "4": "\u2084",
  "5": "\u2085",
  "6": "\u2086",
  "7": "\u2087",
  "8": "\u2088",
  "9": "\u2089",
  "+": "\u208A",
  "-": "\u208B",
  "=": "\u208C",
  "(": "\u208D",
  ")": "\u208E",
  "a": "\uE001",
    "b": "\uE002",
    "c": "\uE003",
    "d": "\uE004",
    "e": "\uE005",
  "f": "\uE006",
    "g": "\uE007",
  "h": "\uE008",
  "i": "\uE009",
    "j": "\uE010",
  "k": "\uE011",
  "l": "\uE012",
  "m": "\uE013",
  "n": "\uE014",
  "o": "\uE015",
  "p": "\uE016",
"q": "\uE017",
"r": "\uE018",
  "s": "\uE019",
  "t": "\uE020",
  "u": "\uE021",
  "v": "\uE022",
    "w": "\uE023",
  "x": "\uE024",
    "y":"\uE025",
    "z": "\uE026",
  "β": "ᵦ",
  "γ": "ᵧ",
  "ρ": "ᵨ",
  "φ": "ᵩ",
  "χ": "ᵪ"
}
var doublestruck = {
  "A": "𝔸",
  "B": "𝔹",
  "C": "ℂ",
  "D": "𝔻",
  "E": "𝔼",
  "F": "𝔽",
  "G": "𝔾",
  "H": "ℍ",
  "I": "𝕀",
  "J": "𝕁",
  "K": "𝕂",
  "L": "𝕃",
  "M": "𝕄",
  "N": "ℕ",
  "O": "𝕆",
  "P": "ℙ",
  "Q": "ℚ",
  "R": "ℝ",
  "S": "𝕊",
  "T": "𝕋",
  "U": "𝕌",
  "V": "𝕍",
  "W": "𝕎",
  "X": "𝕏",
  "Y": "𝕐",
  "Z": "ℤ",
  "a": "𝕒",
  "b": "𝕓",
  "c": "𝕔",
  "d": "𝕕",
  "e": "𝕖",
  "f": "𝕗",
  "g": "𝕘",
  "h": "𝕙",
  "i": "𝕚",
  "j": "𝕛",
  "k": "𝕜",
  "l": "𝕝",
  "m": "𝕞",
  "n": "𝕟",
  "o": "𝕠",
  "p": "𝕡",
  "q": "𝕢",
  "r": "𝕣",
  "s": "𝕤",
  "t": "𝕥",
  "u": "𝕦",
  "v": "𝕧",
  "w": "𝕨",
  "x": "𝕩",
  "y": "𝕪",
  "z": "𝕫",
  "0": "𝟘",
  "1": "𝟙",
  "2": "𝟚",
  "3": "𝟛",
  "4": "𝟜",
  "5": "𝟝",
  "6": "𝟞",
  "7": "𝟟",
  "8": "𝟠",
  "9": "𝟡"
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
  "A": "𝐀",
  "B": "𝐁",
  "C": "𝐂",
  "D": "𝐃",
  "E": "𝐄",
  "F": "𝐅",
  "G": "𝐆",
  "H": "𝐇",
  "I": "𝐈",
  "J": "𝐉",
  "K": "𝐊",
  "L": "𝐋",
  "M": "𝐌",
  "N": "𝐍",
  "O": "𝐎",
  "P": "𝐏",
  "Q": "𝐐",
  "R": "𝐑",
  "S": "𝐒",
  "T": "𝐓",
  "U": "𝐔",
  "V": "𝐕",
  "W": "𝐖",
  "X": "𝐗",
  "Y": "𝐘",
  "Z": "𝐙",
  "a": "𝐚",
  "b": "𝐛",
  "c": "𝐜",
  "d": "𝐝",
  "e": "𝐞",
  "f": "𝐟",
  "g": "𝐠",
  "h": "𝐡",
  "i": "𝐢",
  "j": "𝐣",
  "k": "𝐤",
  "l": "𝐥",
  "m": "𝐦",
  "n": "𝐧",
  "o": "𝐨",
  "p": "𝐩",
  "q": "𝐪",
  "r": "𝐫",
  "s": "𝐬",
  "t": "𝐭",
  "u": "𝐮",
  "v": "𝐯",
  "w": "𝐰",
  "x": "𝐱",
  "y": "𝐲",
  "z": "𝐳",
  "Α": "𝚨",
  "Β": "𝚩",
  "Γ": "𝚪",
  "Δ": "𝚫",
  "Ε": "𝚬",
  "Ζ": "𝚭",
  "Η": "𝚮",
  "Θ": "𝚯",
  "Ι": "𝚰",
  "Κ": "𝚱",
  "Λ": "𝚲",
  "Μ": "𝚳",
  "Ν": "𝚴",
  "Ξ": "𝚵",
  "Ο": "𝚶",
  "Π": "𝚷",
  "Ρ": "𝚸",
  "ϴ": "𝚹",
  "Σ": "𝚺",
  "Τ": "𝚻",
  "Υ": "𝚼",
  "Φ": "𝚽",
  "Χ": "𝚾",
  "Ψ": "𝚿",
  "Ω": "𝛀",
  "∇": "𝛁",
  "α": "𝛂",
  "β": "𝛃",
  "γ": "𝛄",
  "δ": "𝛅",
  "ε": "𝛆",
  "ζ": "𝛇",
  "η": "𝛈",
  "θ": "𝛉",
  "ι": "𝛊",
  "κ": "𝛋",
  "λ": "𝛌",
  "μ": "𝛍",
  "ν": "𝛎",
  "ξ": "𝛏",
  "ο": "𝛐",
  "π": "𝛑",
  "ρ": "𝛒",
  "ς": "𝛓",
  "σ": "𝛔",
  "τ": "𝛕",
  "υ": "𝛖",
  "φ": "𝛗",
  "χ": "𝛘",
  "ψ": "𝛙",
  "ω": "𝛚",
  "∂": "𝛛",
  "ϵ": "𝛜",
  "ϑ": "𝛝",
  "ϰ": "𝛞",
  "ϕ": "𝛟",
  "ϱ": "𝛠",
  "ϖ": "𝛡",
  "0": "𝟎",
  "1": "𝟏",
  "2": "𝟐",
  "3": "𝟑",
  "4": "𝟒",
  "5": "𝟓",
  "6": "𝟔",
  "7": "𝟕",
  "8": "𝟖",
  "9": "𝟗"
  
  
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