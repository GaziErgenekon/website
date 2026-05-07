const fs = require('fs');
let file = 'src/constants/index.jsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/(\s+)email:\s*".*",?\n/g, (match, p1) => {
  if (match.includes('info@teamergenekon.org')) return match;
  return '';
});

fs.writeFileSync(file, content);
