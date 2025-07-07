// getExtension.js
function getExtension(filename) {
  return filename.split('.').pop();
}

console.log(getExtension('report.pdf'));      // pdf
console.log(getExtension('resume.final.docx'));// docx
