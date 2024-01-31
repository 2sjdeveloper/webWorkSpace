// (24-01-31-wed)
//customerSql.js

let customerList =
    `SELECT id
        , name
        , email
        , phone
        , address
FROM customers`

let customerInfo =
    `SELECT id
        , name
        , email
        , phone
        , address
FROM customers
WHERE id = ?` //컬럼은 대문자 쓰면안됨. 데이터 안넘어감. 만약 크리트를 할 때 대문자로 했으면 대문자로 돌아야됨. 언더바를 썼으면 언더바도 써줘야됨.
// ? 를 어떤식으로 사용하느냐에 따라 배열인지 객체인지 구분해서 뭐 해줘야됨.. 

/* 
1) 배열인지 아닌지 구분하는 방법 : 물음표의 갯수로 구분. 쿼리문아네 있는 물음표가 하나(=배열x)냐 두개 이상(=배열o)이냐에 따라 내가 넘겨줘야하는 데이터 타입이 달라짐. 위에서 아래, 왼쪽에서 오른쪽  방향으로 값이 채워짐.
2) 배열인지 아닌지는 결정났다면, 그 다음 물음표가 가져야된느 타입이 객체냐 단일값이냐 구분하는 방법 : 물음표가 앞에 컬럼이 있는지 없는지로 구분. 이 물음표가 누구한테 들어가는지가 쿼리문에 있느냐..
예를 들어
insert into customers
set ? 
where id = ?; 
-- 두번째 물음표 : id 컬럼에 들어가는 지정값, 단일값.
-- 첫번째 물음표 : 객체. 어디에 들어가는 뭔 값인지 알 수 없기때문에. 셋에 있든 어디든 상관 없음. 앞에 컬럼이 있냐 없냐로 객체인지 단일값인지 구분.
*/

let customerInsert =
    `INSERT INTO customers
    SET ?` //넘어가는 데이터 : 객체. 필드명은 반드시 컬럼명과 같아야함.

let customerUpdateAll =
    `UPDATE customers
    SET ? 
    WHERE id = ?` //배열 [객체, 단일값]
// 넘어가는 데이터 : 배열(물음표가 두개 이상이니까). 데이터 값의 개수 [ , ](물음표가 두개이므로 값도 두개)

let customerUpdateInfo =
    `UPDATE customers
    SET email = ?, phone = ?, address = ?
    WHERE id = ?` // 배열 [단일값, 단일값, 단일값, 단일값] : 이메일, 폰, 어드레스, 아이디 순서.(위에서 아래, 왼쪽부터 오른쪽 순서)
// 넘어가는 데이터 : 배열(물음표가 두개 이상이니까). 데이터 값의 개수 [ , , , ](물음표가 네개니까 값도 네개)



//여길 통하지 않으면 밖에서 호출 못함. 위에서 만드는거 익스포트 해줘야됨.
module.exports = {
    customerList,
    customerInfo,
    customerInsert,
    customerUpdateAll,
    customerUpdateInfo
}