//(24-01-26-fri)

const defaultNum = 1;

function add(num1, num2) {
    return num1 + num2;
}

function minus(num1, num2) {
    return num1 - num2;
}


function multi(num1, num2) {
    return num1 * num2;
}


function divide(num1, num2) { //함수는 선언하는 순간 하나의 변수.
    return num1 / num2;
}

module.exports = { //컴먼 어쩌고랑 노드js랑 익스포트 하는 방법이 다르고 어쩌구..
//export default { //이름을 지정하지 않고 권한을 넘겨준다...어쩌구..
    defNum : defaultNum,
    add, // 이름:add, 내용:add
    minus, // "minus" : minus 와 같은 개념. 
    multi,
    divide
} //여기가 끝이어야함. 더이상의 코드는 있으면 안됨.