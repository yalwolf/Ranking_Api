const mysql = require('mysql');
let connection = mysql.createPool({
    host: 'jp66.zhuji.icu',
    user: 'jpsejogkfw0n',
    password: 'PHda7tw1WTOF',
    database: 'jpsejogkfw0n'
});
module.exports = connection;