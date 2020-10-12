const express = require('express');
const mysql = require('mysql');
var router = express.Router()



router.post('/:value', (req, res) => {
    var data = JSON.parse(req.params['value'])
    // var id = 'HD' + new Date().getTime();
    var date = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate() + ' ' + new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds()
    // console.log(new Date().getMonth() + 1)

    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        port: '3306',
        database: 'product'
    });
    // console.log(data)
    //let selectSQL = "select * from cart  where ProductName='" + data.ProductName + "'";
    // let updateSQL = "UPDATE cart SET ProductNumber='" + data.ProductNumber + "',HaveNumber='" + data.HaveNumber + "',Remaining='" + (Number(data.ProductNumber) - Number(data.HaveNumber)) + "',Date='" + date + "' WHERE ProductName='" + data.ProductName + "'";
    let insertSQL = "INSERT INTO " + data.username + 'cart' + " ( ProductId ,ProductName,idList,HaveNumber,Date,status)  values ('" + data.ProductId + "','" + data.ProductName + "','" + '' + "','" + data.HaveNumber + "','" + date + "','" + 'unfinish' + "') ";
    // console.log(insertSQL)
    connection.query(insertSQL, function (err, result) {
        if (err) {
            console.log('[INSERT ERROR] - ', err.message);
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



router.post('/:list/:username', (req, res) => {
    var list = JSON.parse(req.params['list'])
    var username = JSON.parse(req.params['username'])
    // console.log(list, username)
    var id = 'HD' + new Date().getTime();
    var date = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate() + ' ' + new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds()
    let purList = []
    for (let item of list) {
        purList.push(item.ProductId)
    }
    purList = purList.join(",").replace(/\"/g, "")
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        port: '3306',
        database: 'product'
    });
    let insertSQL = "INSERT INTO " + username + 'table' + " ( ProductId ,ProductName,idList,Date,status)  values ('" + id + "','" + ' ' + "','" + (purList) + "','" + date + "','" + 'finished' + "') ";
    // console.log(insertSQL)
    connection.query(insertSQL, function (err, result) {
        if (err) {
            console.log('[INSERT ERROR] - ', err.message);
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

module.exports = router
