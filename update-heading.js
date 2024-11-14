const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to move section numbers from the beginning to the end of headings
function moveSectionNumbers(content) {
    const lines = content.split('\n');
    
    return lines.map(line => {
        // Match headings with section numbers at the beginning
        const headingMatch = line.match(/^(#{1,6})\s+(\d+(\.\d+)*)\.\s+(.+)/);
        if (headingMatch) {
            const hashes = headingMatch[1];
            const sectionNumber = headingMatch[2];
            const headingText = headingMatch[4];
            return `${hashes} ${headingText} (${sectionNumber})`;
        }
        return line;
    }).join('\n');
}

// Get all .md files excluding node_modules directory
const pattern = process.argv[2] || '*.md';
const options = { ignore: '**/node_modules/**' };
const files = glob.sync(pattern, options);

files.forEach(file => {
    const filePath = path.resolve(file);
    const markdownContent = fs.readFileSync(filePath, 'utf8');
    const updatedContent = moveSectionNumbers(markdownContent);
    fs.writeFileSync(filePath, updatedContent, 'utf8');
    console.log(`Section numbers moved in ${file}`);
});

console.log('Section numbers moved successfully in all matching files!');
