const express = require('express');
const router = require('./routes/routes');
const bodyParser = require('body-parser');
const app = express();

app.set("view engine","ejs");
//dizendo para o express para utilizar a pasta public para os arquivos estaticos
app.use(express.static('public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use('/',router);
app.listen(9090);