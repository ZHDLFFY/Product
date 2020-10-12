const express = require('express');
const mysql = require('mysql');
var router = express.Router()


router.post('/:value', (req, res) => {                            //登陆请求
    let data = JSON.parse(req.params['value'])
    console.log(data)
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        port: '3306',
        database: 'product'
    });
    let sql = "select * from users  where username='" + data.username + "' and password='" + data.password + "'";

    connection.query(sql, function (err, result) {
        if (err) {
            console.log('[select ERROR] - ', err.message);
            res.send("错误");

        } else {
            for (let item of result) {
                if (item.username == data.username && item.password == data.password) {
                    res.send(JSON.stringify({
                        succ: true,
                        msg: "SELECT Succeed"
                    }))
                    // console.log('LOGIN Succeed')
                } else {
                    res.send(JSON.stringify({
                        succ: false,
                        msg: "SELECT Fail"
                    }))
                    // console.log('LOGIN Fail --> The user name or password is incorrect.')
                }
                return
            }
        }
    });

    connection.end();
})


module.exports = router