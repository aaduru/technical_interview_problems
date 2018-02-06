var fs = require('fs');

fs.writeFile('mynewfile3.txt','the text has been replaced',function (err) {
  if (err) throw err;
  console.log("replaced");
});
