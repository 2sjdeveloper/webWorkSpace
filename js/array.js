// (24-01-25) 책 45쪽~

console.log('array.js');

//1. sort()    : 정렬함수 - 오름차순
//reverse() : 정렬함수 - 내림차순

let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits);

fruits.reverse();
console.log(fruits);


let points = [40, 100, 1, 5, 25, 10];
//1, 5, 10, 25, 40, 100 의 형태로 출력되지 않음. 왜? 유니코드기반의 문자 정렬. 그래서 우리가 직접 기준을 만들어줘야됨.
points.sort();
console.log(points);

points.sort(function (a, b) {
    //오름차순을 기반으로 할 경우
    return a - b;
});
console.log(points);


//2. filter : 기존배열 -기준 -> 새로운 배열
let words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
let result = words.filter((a, b, c, d, e) => {
    console.log(a, b, c, d, e);
}); //이렇게 하면 뭐 값을 알 수가 있다고... 

words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
result = words.filter((value, idx) => {
    //return 데이터 타입 boolean
    //return value.length >6; //true 값을 가지는 거를 리턴하면 됨.
    return value.indexOf('a') > -1;
});
console.log(result);

//객체 배열에 filter를 사용할 경우 : 참조타입이 내장된 배열의 경우 필터가 새로운 배열을 만드는게 아님.
let userList = [{ id: 100, name: 'Hong' }, { id: 200, name: 'Kang' }, { id: 300, name: 'Han' }];
let newList = userList.filter(obj => {
    return obj.name.indexOf('g') > -1;
})
console.log(userList, newList);

newList.forEach(obj => {
    obj.age = 20;
})
console.log(userList, newList);


// 3. map() : 기존배열 - 기준+조작 -> 새로운 배열
userList = [{ id: 100, name: 'Hong' }, { id: 200, name: 'Kang' }, { id: 300, name: 'Han' }];

let newArray = userList.map(function (obj) {
    //return 데이터 타입에 제한이 없음. 대신 갯수(size)를 줄이지 못함. 
    return obj.id < 300 ? obj.name : null;
});
console.log(userList, newArray);
console.clear();
newList = userList.map((obj) => {
    return {
        id: obj.id,
        name: obj.name
    };
});
console.log(userList, newList);

newList.forEach(obj => {
    obj.age = 20;
})
console.log(userList, newList);


// 4. reduce() : 누적합계
let nums = [50, 12, 999, 6, 100];
let sumRes = nums.reduce(function (total, value) {
    return total + value;
}, 0);
console.log(sumRes);