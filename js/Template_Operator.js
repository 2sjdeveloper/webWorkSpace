// (24-01-25) 책 51쪽~

// 1. Template literals 문법
console.log('Template literals');

let subject = 'Javascript';
let tool = 'VS code';

//현재 수업은 "Javascript"를 진행하고
//사용하는 툴은 "VS Code"입니다.
let msg = '현재 수업은 "' + subject + '"를 진행하고 ';
console.log(msg);
msg = '사용하는 툴은 "' + tool + '"입니다.';
console.log(msg);

//백틱(`) 사용
msg =
    `현재 수업은 "${subject}"를 진행하고
사용하는 툴은 "${tool}"입니다.`;
console.log(msg);


// 2. Spread Operator (펼침연산자)
console.log('Spred Operator');

//배열
let arr1 = [4, 5, 6];
let arr2 = [1, 2, 3];
let arr3 = [arr1, arr2];
console.log(arr3);
arr3 = [...arr1, ...arr2];
console.log(arr3);

//문자열
let word = "Hello";
// H e l l o
let alphabet = [...word, "J", "S"];
console.log(alphabet);
//Array.isArray(); //배열인지 아닌지 체크

// for in : 객체 내부값을 순환하는 반복문. [](대괄호)를 이용해서 내부 필드값에 접근해야 함.
let user = {
    id: 100, name: "Hong", age: 20, address: "Daegu"
};
let info = [];
for (let field in user) {
    console.log(field, user[field]);
    //user.field => {field : "js"};     //user.field 는 사용 불가. 

    //객체 -> 배열
    info.push(field);
}
console.log(info);

