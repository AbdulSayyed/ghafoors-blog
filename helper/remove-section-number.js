const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to remove section numbers from headings
function removeSectionNumbers(content) {
    const lines = content.split('\n');
    
    return lines.map(line => {
        return line.replace(/\s(\(\d+(\.\d+)*\)|\d+(\.\d+)*)$/, '');
    }).join('\n');
}

// Get the file pattern or path from command line arguments
const pattern = process.argv[2];

if (!pattern || !pattern.endsWith('.md')) {
    console.error('Error: Please provide a valid .md file path like ./abc.md or a pattern.');
    process.exit(1);
}

const options = { ignore: '**/node_modules/**' };
const files = glob.sync(pattern, options);

if (files.length === 0) {
    console.error('Error: No matching files found.');
    process.exit(1);
}

files.forEach(file => {
    const filePath = path.resolve(file);
    const markdownContent = fs.readFileSync(filePath, 'utf8');
    const updatedContent = removeSectionNumbers(markdownContent);
    fs.writeFileSync(filePath, updatedContent, 'utf8');
    console.log(`Section numbers removed from ${file}`);
});

console.log('Section numbers removed successfully from all matching files!');



