// heading-space-check.js
module.exports = {
    names: ["heading-space-check"],
    description: "Headings should have only one space before numbered parentheses",
    tags: ["headings", "whitespace"],
    function: function customHeadingSpace(params, onError) {
      params.tokens
        .filter(token => token.type === "heading_open")
        .forEach((token) => {
          const headingLine = token.line;
          const match = headingLine.match(/#+\s+.+\s{2,}\(\d+\.\d+\)/);
          if (match) {
            onError({
              lineNumber: token.lineNumber,
              detail: "Heading contains multiple spaces before numbered parentheses",
              context: headingLine
            });
          }
        });
    }
  };
  