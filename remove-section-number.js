const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to remove section numbers from headings
function removeSectionNumbers(content) {
    const lines = content.split('\n');
    
    return lines.map(line => {
        return line.replace(/\s\(\d+(\.\d+)*\)$/, '');
    }).join('\n');
}

// Get all .md files excluding node_modules directory
const pattern = process.argv[2] || '*.md';
const options = { ignore: '**/node_modules/**' };
const files = glob.sync(pattern, options);

files.forEach(file => {
    const filePath = path.resolve(file);
    const markdownContent = fs.readFileSync(filePath, 'utf8');
    const updatedContent = removeSectionNumbers(markdownContent);
    fs.writeFileSync(filePath, updatedContent, 'utf8');
    console.log(`Section numbers removed from ${file}`);
});

console.log('Section numbers removed successfully from all matching files!');
