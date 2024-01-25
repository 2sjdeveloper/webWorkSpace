//(24-01-25)
console.log('arrow.js');

//함수를 표현하는 방식
//1. 함수선언식 => var 선언자 와 동일. (단점 : 중복허용, 특징 : 위치 상관 없이 호출 가능 그래서 보통 아래쪽에 적어줌)
function hello(name) {
    console.log(name);
}

function hello(msg) {
    console.log('출력 :' + msg);
}


//2. 함수표현식(최근들어 권장하는 방법) => const 선언자(와 같은 레벨로 사용된다. 라고 생각하면 된다?)(특징 : 호출되기전에 선언해줘야 함. 추적가능. 위에 적어준다)
const hello2 = function (name) {
    console.log('hello, ' + name);
}

const hello3 = (name) => console.log('hello, ' + name);

hello3('Javascript');


// - 화살표 함수 문법
let msg = msg => console.log('result, ' + msg); //매개변수가 하나일경우 괄호 생략 가능.
//let msg = (msg) => console.log('result, ' + msg);
msg = () => console.log('Hello, World');
msg = (x, y) => console.log(x + y);

msg = (x, y) => {
    let result = x + y;
    console.log(result);
}

console.clear();

// - 화살표 함수와 this의 연관성 : 화살표 함수는 this와는 무관하다.. 
let array = [1, 3, 5, 7];
array.forEach(function(value, idx){
    console.log(value, this);
});

array.forEach((value, idx)=>{
    console.log(value, this);
})
/* 자바의this가 객체, 인스턴스를 가리키는것 처럼 자바스크립트의 메소드 안에 있는 this는 객체를 가리킨다는거를 기억.
화살표 함수로는 메소드를 만들면 안된다. 화살표함수는 this가 문제가 될 가능성이 높다?
*/


// - Array 내장 함수
/* 배열다루는 함수와 문자를 다루는 함수 형태의 기본적인 부분들을 어떤 언어를 배우더라도 기본적으로 해야한다.
*/ 
