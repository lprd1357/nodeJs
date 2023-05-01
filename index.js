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
const cors  = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extends: true}))

app.listen(port, ()=>{
  console.log(`port is ${port}`);
})

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
    console.log(`figlet GET >>>> ${data} <<<<<<`);
    console.log(data);
    res.send('<pre><font face="Courier New">'+data+'</font></pre>');
    //res.send(data);
    //res.json({'data' : data});
  });

})

app.post('/', (req, res)=>{
  console.log(` [POST]`);
  console.log(` req.body >>> ${req.body} <<<`);
  const { name } = req.body;

  //figlet : 문자를 그림으로
  figlet(name, function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    //console.log("figlet >>>> " + data +"<<<<<<");
    console.log(`figlet POST >>>> ${data} <<<<<<`);
    console.log(data);
    //res.send('<pre><font face="Courier New">'+data+'</font></pre>');
    //res.send(data);
    res.json({'data' : data});
  });

})