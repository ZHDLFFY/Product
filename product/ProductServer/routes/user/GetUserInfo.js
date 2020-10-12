const express = require('express');
const mysql = require('mysql');
var router = express.Router()



router.get('/:value', (req, res) => {                            //用户信息请求
    let data = JSON.parse(req.params['value'])
    console.log(data.username)
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        port: '3306',
        database: 'product'
    });
    let sql = "select * from users  where username='" + data.username + "'";

    connection.query(sql, function (err, result) {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message);
            res.send("错误");

        } else {
            for (let item of result) {
                if (item.username == data.username) {
                    res.send(JSON.stringify(result))
                    console.log('GETINFO Succeed')
                } else {
                    res.send(JSON.stringify(result))
                }
                return
            }

        }
    });

    connection.end();
})



module.exports = router