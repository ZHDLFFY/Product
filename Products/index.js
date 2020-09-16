const express = require('express');
const mysql = require('mysql');
const app = express();

/*跨域访问*/
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

    if (req.method == 'OPTIONS') {
        res.send(200);
        /让options请求快速返回/
    } else {
        next();
    }
});


app.get('/', (req, res) => {
    res.send('Hello Express')
})


app.post('/Login/:value', (req, res) => {                            //登陆请求
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
                    console.log('LOGIN Succeed')
                } else {
                    res.send(JSON.stringify({
                        succ: false,
                        msg: "SELECT Fail"
                    }))
                    console.log('LOGIN Fail --> The user name or password is incorrect.')
                }
                return
            }
        }
    });

    connection.end();
})

app.post('/Register/:value', (req, res) => {                                                //注册请求
    let data = JSON.parse(req.params['value'])

    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        port: '3306',
        database: 'product'
    });
    let sql = "INSERT INTO users (username, password,phone)  values ('" + data.username + "','" + data.password + "','" + data.phone + "') ";

    connection.query(sql, function (err, result) {
        if (err) {
            console.log('[INSERT ERROR] - ', err.message);
            res.send("错误");

        } else {
            res.send(JSON.stringify({
                succ: true,
                msg: "INSERT Succeed"
            }))
            console.log('LOGIN Succeed')
        }
    });

    connection.end();
})


app.get('/GetUserInfo/:value', (req, res) => {                            //用户信息请求
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



app.post('/PostCart/:value', (req, res) => {              //注册请求
    let flag = true
    var data = JSON.parse(req.params['value'])
    var id = 'HD' + new Date().getFullYear() + new Date().getMonth() + new Date().getDate()
    var date = new Date().getFullYear() + '-' + new Date().getMonth() + '-' + new Date().getDate() + ' ' + new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds()
    // console.log(date)

    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        port: '3306',
        database: 'product'
    });

    let selectSQL = "select * from cart  where ProductName='" + data.name + "'";
    let updateSQL = "UPDATE cart SET ProductNumber='" + data.number + "',Date='" + date + "' WHERE ProductName='" + data.name + "'";
    let insertSQL = "INSERT INTO cart ( ProductId ,ProductName,ProductNumber,Date)  values ('" + id + "','" + data.name + "','" + data.number + "','" + date + "') ";


    connection.query(selectSQL, (err, result) => {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message);
            res.send("错误");
        } else {
            for (let item of result) {
                if (item.ProductName == data.name) {
                    flag = false;
                    console.log(item.ProductName, data.name, '匹配到')
                    break;
                }
            }
            if (flag == true) {
                connection.query(insertSQL, function (err, result) {
                    if (err) {
                        console.log('[INSERT ERROR] - ', err.message);
                        res.send("错误");
                    } else {
                        console.log(flag, '插入')
                        res.send(JSON.stringify({
                            succ: true,
                            msg: "PRODUCT INSERT Succeed"
                        }))
                        console.log('PRODUCT INSERT Succeed')
                    }
                });
                connection.end();
            } else {
                connection.query(updateSQL, function (err, result) {
                    if (err) {
                        console.log('[UPDATE ERROR] - ', err.message);
                        res.send("错误");
                    } else {
                        console.log(flag, '更新')
                        res.send(JSON.stringify({
                            succ: true,
                            msg: "PRODUCT UPDATE Succeed"
                        }))
                        console.log('PRODUCT UPDATE Succeed')

                    }
                });
                connection.end();
            }
        }
    });

    console.log(flag, '最终')

})


app.listen(3000, () => console.log('Example app listening on port'))