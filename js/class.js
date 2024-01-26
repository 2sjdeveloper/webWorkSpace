// (24-01-26-fri)

// ES6 이전
// 재생산을 위한 객체 => 생성자함수 + 즉시실행함수. 두개를 결합해서 만듦.

// var Person = (function () {
//     function Person(name) {
//         //객체가 가질 필드를 정의함.
//         this._name = name;
//     }

//     //객체가 가질 메소드
//     Person.prototype.sayHi = function () {
//         console.log('Hi ' + this._name);
//     }

//     //필드에 접근할 Setter, Getter
//     Person.prototype.setName = function (name) {
//         this._name = name; // _ : 직접 접근하지 말라는 의미.
//     }

//     Person.prototype.getName = function () {
//         return this._name;
//     }
//     return Person;
// })();

// let userA = new Person('Hong')
// userA.sayHi();
// userA.setName('Adward');
// userA.sayHi();


// ES6 이후 - let, cost
class Person{
    constructor(name){
        this._name = name;
    }
    sayHi(){
        console.log('Hi, new ' + this._name);
    }

    set name(name){
        this._name = name;
    }

    get name(){
        return this._name;
    }

}

let userB = new Person('Hong');
userB.sayHi();
userB.name = 'Lee';
console.log(userB.name);
userB.sayHi();
