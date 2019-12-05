//1,引入express
const express = require('express');
const app = express();
const path = require('path');
//2,引入的ejs插件
const ejs = require('ejs');
//3,设置html引擎
app.set('view engine', 'html');
//4,设置视图地址
app.set('views', path.join(__dirname, '/views'));
//5,设置ejs引擎
app.engine('html', require('ejs').__express);
//6,静态文件
app.use(express.static('public'));
//7,引入body-parser模块
var bodyParser = require('body-parser');
app.use(bodyParser.json());
//8，创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({
    extended: false
});
//9  引入模块  帮助图片上传
var multer = require('multer');
//10  引入公共数据
let config = require('./Utils/config');
//设置跨域
app.all('*',function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    if (req.method == 'OPTIONS') {
      res.send(200);
    }
    else {
      next();
    }
  });
//引入用户模块
const UserController = require('./Controller/UserController')
//用户登录
app.post('/login',UserController.checkUser)
//用户注册
app.post('/register',UserController.registeUser)
//修改用户信息
app.post('/updateUser',UserController.updateUser)
//修改用户余额
app.post('/updateMoney',UserController.updateMoney)
//引入商家登录模块
const StoreLogin=require('./Controller/StoreLogin')
app.post('/adminLogin',StoreLogin.checkAdmin)
//上传图片
let fileController = require('./Controller/FileController');
app.post("/uploadImgs", multer({
    dest: __dirname + '/public/upload/imgs/'
}).array('file'), fileController.upload);
//引入后台管理模块
let ProductController=require('./Controller/ProductController')
//获取所有商品
app.post('/getProduct',ProductController.getProduct)
//添加商品
app.post('/insert',ProductController.insert)
//删除商品
app.post('/delete',ProductController.delete)
//搜索内容
app.get('/source',ProductController.source)
//通过id查询商品
app.get('/getById',ProductController.getById)
//修改商品
app.post('/update',ProductController.update)
//引入购物车模块
let CartController=require('./Controller/CartController')
//添加到购物车
app.post('/insertCart',CartController.insert)
//查询是否有菜品
app.get('/selectBefore',CartController.selectBefore)
//获取用户购物车数据
app.get('/getCart',CartController.getCart)
//更新购物车商品数量
app.post('/updateCount',CartController.updateCount)
//买单
app.post('/pay',CartController.pay)
//获取历史订单
app.post('/getPayed',CartController.getPayed)

 


//监听端口
app.listen(8888,function(){
    console.log('端口号:8888');
});