library replaceLetter;
import 'dart:html';

Map replaceLetter = {
    '>': ['≥','⟩','⊇','⊃','→','↦','⇒','⟹','⊳','\u27F5'],
    '=>' : ['⇑','⇓','⇕','⇒','⟹','⟺','⇔'],
    'A': ['𝐴','∀','𝒜','𝔄'],
    'B': ['ℬ','𝔅','⨁'],
    'C': ['ℂ','𝒞','∐'],
    'D': ['𝒟','𝔇','Δ','∩'],
    'E': ['∅','ℰ'],
    'F': ['ℱ'],
    'G': ['𝒢','Γ','𝔊','∇','∠','∟','⟂','∥','∦','∝','⊿','⊾','⦜','⦝'],
    'H': ['ℋ'],
    'I': ['𝐼','ℐ','ℑ','∩','∫','∬','∭','⨌','∮','∯','∰'],
    'J': ['𝒥','𝔍'],
    'K': ['𝒦','𝔎'],
    'L': ['ℒ','𝔏','¬','∀','∃','∄','∴','∵','∧','∨','⊨','⊭','⋀','⋁'],
    'M': ['ℳ','𝔐'],
    'N': ['ℕ','ℵ','𝒩','𝔑'],
    'O': ['Ω','𝒪','⊕','⊖','⊗','⊘','⊙','⊚','⊛','⊜','⊝'],
    'P': ['ℙ','∏','𝒫','Π','Φ','Ψ'],
    'Q': ['ℚ','𝑄','𝒬','∎'],
    'R': ['ℝ','ℛ'],
    'S': ['∑','𝑆','Σ','𝒮','⅀'],
    'T': ['⊤','⊥','⊢','⊣','⊧','⊨','⊩','𝒯'],
    'U': ['∪','∩','⋃','⋂','𝑈','𝒰','⊔','⊓','⨆','⨅'],
    'V': ['𝑉','𝒱','Ʋ'],
    'W': ['𝑊','𝒲'],
    'X': ['Ξ','𝒳','⨉'],
    'Y': ['𝒴'],
    'Z': ['ℤ','𝒵'],
    'a': ['α','∀','∧','∠','𝔞'],
    'aa': ['αa','∀a','∧','∠','𝔞'],
    'b': ['β','𝑏','𝔟'],
    'c': ['χ','𝔠','↯','∮'],
    'd': ['δ','𝔡','∂','º','∬'],
    'e': ['∅','ϵ','ε','∃','∄'],
    'f': ['ϕ','φ'],
    'g': ['γ','𝔤'],
    'h': ['η','𝔥','†','♡','♥'],
    'i': ['∈','∉','∞','ι','∫','∋','∌','∩'],
    'j': ['𝔧'],
    'k': ['𝑘','κ'],
    'l': ['λ','ℓ','𝔩'],
    'm': ['μ','𝔪'],
    'n': ['ν','𝔫','¬','∇'],
    'o': ['ω','𝔬','∨','°'],
    'p': ['π','ϕ','φ','ψ','𝔭'],
    'q': ['𝔮','∎'],
    'r': ['ρ','𝔯'],
    's': ['σ','𝔰','√','∛','∜','∑','∵'],
    't': ['τ','θ','𝔱','∴'],
    'u': ['⋃','⋂','υ','𝔲','∪','∩','⊔','⊓'],
    'v': ['ʋ'],
    'w': ['ω','⚠'],
    'x': ['𝑥','ξ','×','⨉','⊗','ₓ'],
    'y': ['𝑦'],
    'z': ['ζ'],
    '\$': [['⁅⁆',-1]],
    '%': ['‰','‱'],
    '#': ['◻','⊞','⊟','⊠','⊡','⧇','⧈','⧅','⧆'],
    '.': ['…','⋯','⋰','⋱','⋮','·','∘','∙'],
    ':': ['∷','≐','≑','≒','≓','≔','≕','∺','∻','∴','∵'], //∶
    '+': ['±','∓','⊕','₊','⁺'],
    '-': ['‾','⏞'], //⏜⎴
    '\'': ['\u0301','\u0304','\u0307','\u0309','\u030A','\u20f0'],
    '`': ['\u0300'], //\u20d0\u20d1\u20ec\u20ed',
    '~': ['\u0303','\u0330'],
    '/' : [['()∕()',-4]],
    /*
    '"': '\u0308\u20db\u20dc\u20e8\u20e1\u20e7\u20e9\u0331',
    '_': '↙₋▁\u23DF', //┬⏝⎵
    '{': //{􀀀}
    "❴{􀀁}{􀀂}{􀀃}{􀀄}", //{􀀅}{􀀆}",//'❴⟨⌈⌊⟪⟦⦇⦉',
    '}': //"{􀀇}
    "❵{􀀈}{􀀉}{􀀊}{􀀋}",//{􀀌}{􀀍}",//'❵⟩⌉⌋⟫⟧⦈⦊',
    '[': //"{􀀐}
    "⁅{􀀑}{􀀒}{􀀓}{􀀔}",//{􀀕}{􀀖}",//'⁅❴⟨⌈⌊⟮⟪⟦⦇⦉',
    ']': //"{􀀗}
    "⁆{􀀘}{􀀙}{􀀚}{􀀛}",//{􀀜}{􀀝}",//'⁆❵⟩⌉⌋⟯⟫⟧⦈⦊',
    '(' : //'{􀀡}
    "⦅{􀀢}{􀀣}{􀀤}{􀀥}",//{􀀦}{􀀧}',
    ')' : //'{􀀨}
    "⦆{􀀩}{􀀪}{􀀫}{􀀬}",//{􀀭}{􀀮}',
    '|': '∣∤∥∦',
    '\\': '∖',
    '/': '∕⁄÷¦',
    '<': '≤⟨⊆⊂←↤⇐⟸⊲',
    '>': '≥⟩⊇⊃→↦⇒⟹⊳\u27F5',
    '->': '→↦↑↓⇒⟹⇑⇓⇕\u27F6',
    '=>': '⇑⇓⇕⇒⟹⟺⇔',
    '=': '≞\u208C≠≈≅≃≡↔⟺⇔≟≝≔⇕\u207C',
    */
};

