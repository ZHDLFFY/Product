const express = require('express');
const mysql = require('mysql');
var router = express.Router()





router.get('/:id', (req, res) => {                            //货物信息请求
    let id = JSON.parse(req.params['id'])
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        port: '3306',
        database: 'product'
    });
    let sql = "select * from cart where ProductId='" + id + "' ";
    console.log(sql)
    connection.query(sql, function (err, result) {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message);
            res.send("错误");

        } else {
            res.send(JSON.stringify({
                succ: true,
                result: result,
                msg: "SELECT Succeed"
            }))
        }
    });

    connection.end();
})


module.exports = router
