const express = require('express');
const mysql = require('mysql');
var router = express.Router()



//往商品表中添加商品
router.post('/:value/', (req, res) => {
    var value = JSON.parse(req.params['value'])
    console.log(value)
    var id = 'HD' + new Date().getTime();
    var date = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate() + ' ' + new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds()
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        port: '3306',
        database: 'product'
    });
    let insertCARTSQL = "INSERT INTO cart (ProductId,ProductName, ProductNumber,image,Date)  values ('" + id + "','" + value.name + "','" + value.number + "','" + value.image + "','" + date + "') ";


    connection.query(insertCARTSQL, function (err, result) {
        if (err) {
            console.log('[insertCARTSQL ERROR] - ', err.message);
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