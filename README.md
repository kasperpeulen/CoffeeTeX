CoffeeTeX
=========

CoffeeTeX is a math language meant to be compiled into LaTeX math mode macros. All the LaTeX math macros themself still work, in other words, they are compiled to themself. But CoffeeTeX offers some non-LaTeX way to get there, with the goal to make the code easier to read, less cluttered and easier to write. CoffeeTeX is strongly inspired on ideas of ASCIIMathML, Murray Sargant's unicode language (http://www.unicode.org/notes/tn28/UTN28-PlainTextMath-v3.pdf) and jqmath. 

##### Unicode typing

The foremost way to make the code less cluttered is by using unicode symbols directly in the code. Unicode symbols are not easy to type in a standard way. Therefore CoffeeTeX can not be seen independent of a editor that makes typing of unicode symbols trivial. The features of the editor are part of the specification. The editor should offer the following features:

1. Normal LaTeX macros that correspond to a direct unicode symbol, should be converted in the editor to that specific symbol. For comparison, in a similar way that hotstrings work in autohotkey.
2. The same holds for asciimath macros. 
3. If a symbol is pressed and hold for a short time, there should appear a popup menu with different choices of unicode symbols that correspond to that key that is pressed and hold. For example, if '=' is pressed and hold, something like this should popup below the key: ![](https://cloud.githubusercontent.com/assets/1035299/4264670/4c4c747e-3c2f-11e4-90fe-2730b3edfbd4.png)

Besides the unicode part, here are some examples of other ways to simplify the LaTeX code, inspired by ASCIIMathML, Murray Sargant's unicode language and jqmath.

CoffeeTeX  | LaTeX
------------- | -------------
`∑_n=0^k √x_n`  | `\sum_{k=0}^{n} \sqrt{x_n} `
`((1,2),(2,3))`  | `\begin{pmatrix}1 & 2\\2  & 3\end{pmatrix}`
`x+↖ℝ y=x+↖ℚ y` | `x\overset{\Bbb{R}}{+} y=x\overset{\Bbb{Q}}{+} y`
