const express = require('express')
const cors = require('cors');
const qq = require('./qq')
const hid = require('./hid')
const info = require('./info')
const config = require('./config')
var app = express();
app.use(cors());

app.use('/ranking', qq);
app.use('/ranking', hid);
app.use('/ranking', info);
app.use('/ranking', config);
app.listen(443, (console.log("Open is http://localhost:443/ranking/")));
app.listen(80, (console.log("Open is http://localhost:80/ranking/")));
