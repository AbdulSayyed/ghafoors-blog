// heading-ap-style-check.js
"use strict";

module.exports = {
  names: ["heading-apstyle-check"],
  description: "Headings should follow AP-style capitalization",
  tags: ["headings", "capitalization"],
  function: function(params, onError) {
    const lowercaseWords = ["a",
       "an", "and", "the", "but", "or", "nor",
       "for", "on", "at", "to", "from", "by", "of", "in","is", "are","index.md"];
    
    params.tokens
      .filter(token => token.type === "heading_open")
      .forEach(token => {
        const headingText = params.lines[token.map[0]].trim();
        
        const words = headingText.split(/\s+/);
        words.forEach((word, index) => {
          const isFirstOrLast = (index === 0 || index === words.length - 1);
          const shouldBeLowercase = lowercaseWords.includes(word.toLowerCase()) && !isFirstOrLast;
          
          // Check if word follows AP style
          if ((shouldBeLowercase && word !== word.toLowerCase()) || 
              (!shouldBeLowercase && word[0] !== word[0].toUpperCase())) {
            onError({
              lineNumber: token.lineNumber,
              detail: `Heading does not follow AP style: "${headingText}"`,
              context: headingText
            });
          }
        });
      });
  }
};
