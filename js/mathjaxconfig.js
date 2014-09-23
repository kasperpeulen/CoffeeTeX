/**
 * Created by kasperpeulen on 23/09/14.
 */

window.MathJax = {
    AuthorInit: function () {
        MathJax.Hub.Config({
            "HTML-CSS": {
              availableFonts: [], preferredFont: null, // force Web fonts
              //webFont: "Latin-Modern",
                linebreaks: {
                    automatic: true
                },
                EqnChunk: (MathJax.Hub.Browser.isMobile ? 10 : 50)
            },
            tex2jax: {
                inlineMath: [
                    ["$", "$"],
                    ["\\(", "\\)"],
                    ["⁅","⁆"]
                ],
                displayMath: [
                    ["$$", "$$"],
                    ["\\[", "\\]"]
                ],
                processEscapes: true
            },
            TeX: {
                noUndefined: {
                    attributes: {
                        mathcolor: "red",
                        mathbackground: "#FFEEEE",
                        mathsize: "90%"
                    }
                },
                Macros: {
                    href: "{}"
                }
            },
            messageStyle: "none"
        });
    }
};