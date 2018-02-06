var fs = require('fs');

fs.appendFile('mynewfile1.txt','add new text to the existing file',function (err) {
  if (err) throw err;
  console.log("updated");
})
