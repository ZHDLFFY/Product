const express = require('express');
const mysql = require('mysql');
var router = express.Router()


//从商品详情页提交到购物车
router.post('/:value', (req, res) => {
    var data = JSON.parse(req.params['value'])
    var id = 'HD' + new Date().getTime();
    var date = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate() + ' ' + new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds()
    // console.log(data)
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        port: '3306',
        database: 'product'
    });

    let insertSQL = "INSERT INTO " + data.username + 'table' + " ( taskId ,ProductName,number,idList,startDate,status,endDate)  values ('" + id + "','" + data.ProductName + "','" + data.HaveNumber + "','" + data.ProductId + "','" + date + "','" + 'ready' + "','" + '' + "') ";
    // console.log(insertSQL)
    connection.query(insertSQL, function (err, result) {
        if (err) {
            console.log('[insertSQL ERROR] - ', err.message); b
            res.send("错误");
        } else {
            res.send(JSON.stringify({
                succ: true,
                msg: "PRODUCT INSERT Succeed"
            }))
        }
    });
    connection.end();

})




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

    let updateSQL = "update " + username + 'table' + " set status ='issued',startDate='" + date + "' where taskId='" + value.taskId + "'";
    let insertAdminSQL = "INSERT INTO zhdtable ( taskId ,productName,idList,number,startDate,status,customer,endDate)  values ('" + value.taskId + "','" + value.productName + "','" + value.idList + "','" + value.number + "','" + date + "','" + 'unfinish' + "','" + username + "','" + '' + "') ";
    // console.log(insertAdminSQL)

    connection.query(updateSQL, function (err, result) {
        if (err) {
            console.log('[updateSQL ERROR] - ', err.message);
            res.send("错误");
        } else {
            connection.query(insertAdminSQL, function (err, result) {
                if (err) {
                    console.log('[insertAdminSQL ERROR] - ', err.message);
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
