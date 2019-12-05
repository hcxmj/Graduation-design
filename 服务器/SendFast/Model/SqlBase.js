class SqlBase {
    constructor() {
        let mysql = require('mysql'); //调用MySQL模块

        //1，创建一个connection
        this.connection = mysql.createConnection({
            // host: 'cdb-a9y1iffo.cd.tencentcdb.com', //主机 ip
            // user: 'root', //MySQL认证用户名
            // password: 'cdhq1234', //MySQL认证用户密码
            // port: '10055', //端口号
            // database: 'NoDeleteMeMeDa' //数据库里面的数据
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'Design'
        });
        //2,连接
        this.connection.connect();
    }


    end() {
        this.connection.end();
    }


}

module.exports = SqlBase;