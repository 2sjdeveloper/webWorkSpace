// (24-01-31-wed)
// db.js

const mysql = require('mysql');
const sql = require('./db/customerSql.js');
//sql.customerList

const connectionPool = mysql.createPool({
    host: '127.0.0.1',
    port: '3306', //이거는 만들때 정해져있었음.
    user: 'dev01', //얘만 가능. root 계정은 접근 불가.
    password: '1234',
    database: 'dev',
    connectionLimit: 10,
    debug : true
});

const executeQuery = async (alias, values) => { // promise가 return 하기때문에 async 가 필요. 
    return new Promise((resolve, reject) => {
        let executeSql = sql[alias];
        connectionPool.query(executeSql, values, (err, results) => {
            if (err) {
                console.log(err);
                reject({ err });
            } else {
                console.log(results);
                resolve(results);
            }
        })
    })
}

module.exports = {
    executeQuery
}

//이렇게 다 해놓으면 sql문만 추가되면 됨. db.js는 여기서 뭔가 더 추가 될 일이 없을 것. 아마도..