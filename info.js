const express = require('express')
const multiparty = require('multiparty');
var connection = require("./sql")
const router = express.Router()
var app = express();
app.use(express.json())

router.post("/info", (req, res) => {
    let form = new multiparty.Form();
    form.parse(req, function(err, fields) {
        if (req.query) {
            if (!fields) {
                res.json({
                    code: 1001,
                    msg: '传参错误',
                })
            }
            if (!fields.apikey) {
                res.json({
                    code: 1002,
                    msg: '传参错误',
                })
            } else {
                if (fields.apikey != "8a2a789976e64a1c9455e2d9") {
                    res.json({
                        code: 1003,
                        msg: 'API密钥错误',
                    })
                } else if (fields.apikey == "8a2a789976e64a1c9455e2d9") {
                    var sql = 'SELECT * FROM ranking_talent_competition_dbhg order by ranking';
                    connection.query(sql, function(err, result) {
                        if (err) {
                            res.json({
                                code: 1004,
                                msg: 'No- ' + err.message
                            })
                            return;
                        }

                        if (result) {
                            res.json({
                                code: 1000,
                                data: result,
                                msg: "ok"
                            })
                        }
                    })
                } else {
                    res.json({
                        code: 1005,
                        msg: '传参错误',
                    })
                }
            }
        }
        if (err) {
            res.json({
                code: 1006,
                msg: err
            })
        }
    })
})
module.exports = router