var express = require('express')
var app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  var json = {"handle":"akilud"}
  res.send(json)
})

app.listen(8000)
