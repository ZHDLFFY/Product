const express = require('express');
const mysql = require('mysql');
var router = express.Router()


router.post('/:value', (req, res) => {                                                //注册请求
    let data = JSON.parse(req.params['value'])
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        port: '3306',
        database: 'product'
    });
    let sql = "INSERT INTO users (userID,username, password,phone)  values ('" + new Date().getTime() + "','" + data.username + "','" + data.password + "','" + data.phone + "') ";
    let showTables = "show tables"
    let creatTable = "CREATE TABLE " + data.username + 'table' + "(id INT NOT NULL AUTO_INCREMENT ,taskId VARCHAR(255) ,productName VARCHAR(255) ,idList VARCHAR(1000),number VARCHAR(255),status VARCHAR(255) ,startDate VARCHAR(255),endDate VARCHAR(255),PRIMARY KEY ( id))ENGINE=InnoDB DEFAULT CHARSET=utf8;"
    // let creatCart = "CREATE TABLE " + data.username + 'cart' + "(id INT NOT NULL AUTO_INCREMENT ,ProductId VARCHAR(255) NOT NULL,ProductName VARCHAR(255)  NOT NULL,HaveNumber VARCHAR(255) ,Date VARCHAR(255) NOT NULL,PRIMARY KEY ( id))ENGINE=InnoDB DEFAULT CHARSET=utf8;"
    // (id INT NOT NULL AUTO_INCREMENT,ProductId VARCHAR NOT NULL,ProductName VARCHAR  NOT NULL,HaveNumber VARCHAR ,Date VARCHAR NOT NULL,PRIMARY KEY ( id))ENGINE=InnoDB DEFAULT CHARSET=utf8


    connection.query(sql, (err, result) => {
        if (err) {
            console.log('[INSERT ERROR] - ', err.message);
            res.send("错误");
        } else {
            connection.query(showTables, (err, result) => {
                if (err) {
                    console.log('[INSERT ERROR] - ', err.message);
                    res.send("错误");
                } else {
                    let flag = true;
                    for (let item of result) {
                        if (item.Tables_in_product == data.username + 'table') {
                            flag = false;
                        }
                    }
                    if (flag == true) {

                        connection.query(creatTable, (err, result) => {
                            if (err) {
                                console.log('[INSERT ERROR] - ', err.message);
                                res.send("错误");
                            } else {
                                console.log('register table succeed')
                                res.send(JSON.stringify({
                                    succ: true,
                                    msg: "REGISTER Succeed"
                                }))
                            }
                        });
                        // connection.query(creatCart, (err, result) => {
                        //     if (err) {
                        //         console.log('[INSERT ERROR] - ', err.message);
                        //         res.send("错误");
                        //     } else {
                        //         res.send(JSON.stringify({
                        //             succ: true,
                        //             msg: "REGISTER Succeed"
                        //         }))
                        //         console.log('register cart succeed')
                        //     }
                        // });

                        return
                    } else {
                        res.send(JSON.stringify({
                            succ: true,
                            msg: "REGISTER table Fail"
                        }))
                    }
                }
                connection.end();
            });
        }
    });

})
module.exports = router