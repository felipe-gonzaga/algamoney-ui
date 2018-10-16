const express = require('express');
const app = express();

//servir os arquivos staticos (em dist)
app.use(express.static(__dirname + '/dist'));

app.get('/*', function(req, res) {
  res.sendFile(__dirname + '/dist/index.html');
});

app.listen(process.env.PORT || 4200);
