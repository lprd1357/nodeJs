var figlet = require("figlet");

// figlet("nTerarosa", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
//   disData = data;
// });

const express = require('express');
const app = express();
const port = 3000;

app.get('/figlet/:name', (req, res)=>{
  const { name } = req.params;

  //figlet : 문자를 그림으로
  figlet(name, function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    //console.log("figlet >>>> " + data +"<<<<<<");
    console.log(`figlet >>>> ${data} <<<<<<`);
    console.log(data);
    res.send('<pre><font face="Courier New">'+data+'</font></pre>');
    //res.send(disData);
  });


})

app.listen(port, ()=>{
  console.log(`port is ${port}`);
})