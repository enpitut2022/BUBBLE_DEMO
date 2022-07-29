const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())

//CORSポリシーを無効にしている。
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api', function(req, res) {
  console.log(req.query.textQuery)
  console.log('back ok')
  res.send({
    wordCloud: '雨のちドラゴン'   //pythonで実施した演算結果をフロントエンドに返している。
  })

  // var {PythonShell} = require('python-shell');
  // var pyshell = new PythonShell('sample.py');  
  // console.log("req")
  // console.log(req.query.textQuery) //フロントエンドから受け取ったデータをconsole.logしている。

  // pyshell.send(req.query.textQuery); //本コードからpythonコードに'req.query.textQuery'を入力データとして提供する 

  // //pythonコード実施後にpythonから本コードにデータが引き渡される。
  // pyshell.on('textQuery',  function (textQuery) {
  //   console.log("return data")
  //   res.send({
  //     message: data   //pythonで実施した演算結果をフロントエンドに返している。
  //   })
  // })

})

app.listen(port, () => {
  console.log(`listening on *:${port}`);
})