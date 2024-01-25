// (24-01-25) 책 52쪽~
console.log('Destructuring');

//Object Destructuring

function getUserInfo() {
    return {
        firstName: 'John',
        lastName: 'Doe',
        age: 37,
        email: 'john@gmail.com',
        city: 'NewYork',
        country: 'USA',
        info: function () {
            return 'My Name is ' + this.lastName;
        }
    };
}

let user = getUserInfo();
console.log(user);
console.log(user.info());
let { firstName, lastName, info } = getUserInfo();
console.log(firstName, lastName);
console.log(info());


// Array Destructuring
let ary = [1, 2, 3];
let [x, y, z] = ary;
console.log(x, y, z);

let [a, b] = ary;
console.log(a, b);

let [e, f, g, h] = ary;
console.log(e, f, g, h);