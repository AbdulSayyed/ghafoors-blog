const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to add section numbers at the end of headings
function addSectionNumbers(content) {
    const lines = content.split('\n');
    const headingLevels = [1, 0, 0, 0, 0, 0]; // Start from 1 instead of 0
    
    return lines.map(line => {
        const headingMatch = line.match(/^(#{1,6})\s+(.+)/);
        if (headingMatch) {
            const level = headingMatch[1].length;
            headingLevels[level - 1]++;
            headingLevels.fill(0, level);
            
            const sectionNumber = headingLevels.slice(0, level).map((num, index) => index === 0 ? num : num + 1).join('.');
            return `${headingMatch[1]} ${headingMatch[2]} (${sectionNumber})`;
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
    const updatedContent = addSectionNumbers(markdownContent);
    fs.writeFileSync(filePath, updatedContent, 'utf8');
    console.log(`Section numbers added to ${file}`);
});

console.log('Section numbers added successfully to all matching files!');
