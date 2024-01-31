// (24-01-31-wed)

const express = require('express');
const app = express();
const mysql = require('./db.js');
//mysql.excuteQuery(); 를 쓸거임. 이게 뭐 실제로 실행하는? 메서드라고 함.
//application/json
app.use(express.json()); //미들웨어를 등록하는 명령어는 use. 쿼리스트링 제이슨 둘 다 가능.
//application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

app.listen(3000, () => {
    console.log('Server Start, http://localhost:3000');
});


app.get('/customers', async (req, res) => {
    let list = await mysql.executeQuery('customerList'); //customerList가 어디서 나왔는지 알아야됨 : costomerSql.js 에서 참조했음. 
    res.json(list);
})
// http://localhost:3000/customers 이렇게 인터넷 주소창에 입력해야됨.


app.get('/customers/:id', async (req, res) => { //단건이니까 누굴 받을건지 확인이 있어야됨. 경로에 값이 붙어야됨. id든 뭐든. 데이터를 요구하는 라우팅이니까 어싱크가 붙어야됨.
    let customerId = req.params.id;
    let info = (await mysql.executeQuery('customerInfo', customerId))[0]; // 제이슨이 동작되기 전에 데이터가 와야됨. 그래서 어웨이트. 실행하고자 하는 쿼리문은 리스트가 아님. 지금 현재 추가된 대상임. 
    //let info = await mysql.executeQuery('customerInfo', customerId);
    //info = info[0]; 이 두 줄이 위의 코드 한줄과 동일.
    res.json(info);
})
// http://localhost:3000/customers/1 이렇게 id값을 입력하면 값이 나옴. 



//값 입력
app.post('/customers', async (req, res) => {
    let data = req.body.param; //객체. param 이라는 특정 필드가 가지고 있는 대상만 등록하겠다는 개념. param이 들어가면 객체 안에 객체가 있는 구조라서 쿼리스트링이 어려워짐.
    let result = await mysql.executeQuery('customerInsert', data);
    res.json(result);
});
/* 사용자가 값을 입력했을 때 터미널 출력화면.
== insert - auto_increment
OkPacket {
  fieldCount: 0,
  affectedRows: 1, //등록일 경우 수정된 값
  insertId: 2, //auto-increment로 자동 부여된 아이디. 
  serverStatus: 2,
  warningCount: 0,
  message: '',
  protocol41: true,
  changedRows: 0 //수정일 경우
}
*/

app.put('/customers/:id', async (req, res) => {
    let result = await updateInfo(req);
    res.json(result);
});


async function updateAll(request) {
    let data = [selectedInfo(request.body.param), request.params.id]; //[set절, id컬럼]
    let result = await mysql.executeQuery('customerUpdateAll', data);
    return result;
}

/*
function selectedInfo(obj) {
    let delData = ["id", "email"];
    let newObj = {};
    for (let field in obj) {
        if (field == "id") continue; // id만 삭제하고 싶으면 62열 delData는 없어도 됨.
        newObj[field] = obj[field];
    }
    return newObj;
}
*/

/* 결과 : id 안나옴.
--> (41) ComQueryPacket {
  command: 3,
  sql: 'UPDATE customers\n' +
    "    SET `name` = 'Kang', `email` = 'kang@email.com', `phone` = '010-1111-1111', `address` = NULL \n" +
    "    WHERE id = '2'"
}
*/


//수정 : 전체값을 가져와서 아이디랑 이메일을 제외시킨거.
function selectedInfo(obj) {
    let delData = ["id", "email"];
    let newObj = {};
    let isTargeted = null;
    for (let field in obj) { // field : id, name, email, phone, adress
        isTargeted = false;
        for (let target of delData) {
            if (field == target) {
                isTargeted = true;
                break;
            }
        }
        if (!isTargeted) {
            newObj[field] = obj[field];
        }
    }
    return newObj;
}

/* 결과 : id, email 없어짐.
--> (43) ComQueryPacket {
  command: 3,
  sql: 'UPDATE customers\n' +
    "    SET `name` = 'Kang', `phone` = '010-1111-1111', `address` = NULL \n" +
    "    WHERE id = '2'"
}

*/


//수정 : 전체값에서 이메일, 폰, 주소의 지정된 컬럼값만 가져올 수 있도록 처리.
async function updateInfo(request) {
    let data = [...getInfo(request.body.param), request.params.id]; //컬럼 : email, phone, address, id
    let result = await mysql.executeQuery('customerUpdateInfo', data);
    return result;
}

function getInfo(obj) {
    let getData = ["email", "phone", "address"];
    let newAry = [];
    for (let target of getData) {
        for (let field in obj) {
            if (field == target) {
                newAry.push(obj[field]);
                break;
            }
        }
    }
    return newAry; // 값 : [email, phone, address]
}

/* 결과 : email, phone, address 세개만 출력
--> (47) ComQueryPacket {
  command: 3,
  sql: 'UPDATE customers\n' +
    "    SET email = 'kang@email.com', phone = '010-1111-1111', address = NULL\n" +
    "    WHERE id = '2'"
}
*/