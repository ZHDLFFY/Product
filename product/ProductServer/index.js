const express = require('express');
const mysql = require('mysql');
const app = express();
var PostAdminIssue = require('./routes/cart/PostAdminIssue')
var GetProductByID = require('./routes/cart/GetProductByID')
var GetCart = require('./routes/cart/GetCart')
var PostCart = require('./routes/cart/PostCart')
var GetUseCart = require('./routes/cart/GetUseCart')

var Login = require('./routes/user/Login')
var Register = require('./routes/user/Register')
var GetUserInfo = require('./routes/user/GetUserInfo');



//发生数次的故障是，app.use()写完之后不起作用，写法正确，此时重启电脑就好了

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

app.use('/PostAdminIssue', PostAdminIssue)
app.use('/GetProductByID', GetProductByID)
app.use('/GetCart', GetCart)
app.use('/PostCart', PostCart)
app.use('/GetUseCart', GetUseCart)


app.use('/Login', Login)
app.use('/Register', Register)
app.use('/GetUserInfo', GetUserInfo)

app.listen(3000, () => console.log('Example app listening on port'))