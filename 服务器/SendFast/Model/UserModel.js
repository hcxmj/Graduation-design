let SqlBase = require('./SqlBase');
class UserModel extends SqlBase {
    constructor() {
        super();
    }
    //插入用户
    insert(name, password, address, num, call) {
        //1,编写sql语句
        var sql = `INSERT INTO user(name,password,address,num,money) VALUES('${name}','${password}','${address}','${num}','1000')`;
        //2,进行插入操作
        /**
         *query，mysql语句执行的方法
         * 1，userAddSql编写的sql语句
         * 2，function (err, result)，回调函数，err当执行错误时，回传一个err值，当执行成功时，传回result
         */
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log('[INSERT ERROR] - ', err.message);
                return;
            }
            call(result);
        });
        //5,连接结束
    }
    //查询用户
    selectByName(name, callback) {
        //编写sql语句
        let sql = `select * from user where name="${name}"`;
        //查询数据
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log(err.message);
                return;
            }
            callback(result);
        });
    }
    update(name, password, address, num, img, id, call) {
        //4,编写sql语句
        let sql = `UPDATE user SET name ='${name}',password = '${password}',img='${img}',address = '${address}' ,num = '${num}' WHERE id = '${id}'`;
        //5，更新操作
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log('[INSERT ERROR] - ', err.message);
                return;
            }
            call(result);
        });
    }
    updateMoney(userId, money, call) {
        //编写sql语句
        let sql = `UPDATE user SET money =${money} WHERE id = '${userId}'`;
        console.log(sql)
        //5，更新操作
        this.connection.query(sql, function (err, result) {
            if (err) {
                console.log('[INSERT ERROR] - ', err.message);
                return;
            }
            call(result);
        });
    }

}
module.exports = UserModel;