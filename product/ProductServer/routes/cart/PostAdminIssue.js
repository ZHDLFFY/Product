const express = require('express');
const mysql = require('mysql');
var router = express.Router()



//将购物车的商品确认发货
router.post('/:value/:username', (req, res) => {
    var value = JSON.parse(req.params['value'])
    var username = JSON.parse(req.params['username'])
    // var id = 'HD' + new Date().getTime();
    var date = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate() + ' ' + new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds()
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        port: '3306',
        database: 'product'
    });

    let updateSQLAdmin = "update zhdtable set status ='finished',endDate='" + date + "' where taskId='" + value.taskId + "'";
    let updateSQLUser = "update " + value.customer + 'table' + " set status ='finished',endDate='" + date + "' where taskId='" + value.taskId + "'";
    console.log(updateSQLUser)

    connection.query(updateSQLAdmin, function (err, result) {
        if (err) {
            console.log('[UPDATEADMIN ERROR] - ', err.message);
            res.send("错误");
        } else {
            connection.query(updateSQLUser, function (err, result) {
                if (err) {
                    console.log('[UPDATEUSER ERROR] - ', err.message);
                    res.send("错误");
                } else {
                    res.send(JSON.stringify({
                        succ: true,
                        msg: "PRODUCT INSERT Succeed"
                    }))
                }
            });
            connection.end();
        }
    });
})

module.exports = router