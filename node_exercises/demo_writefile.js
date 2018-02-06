var fs = require('fs');

fs.writeFile('mynewfile3.txt','writing content', function (err) {
  if (err) throw err;
  console.log("saved");
})
