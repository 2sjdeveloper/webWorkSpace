// (24-01-29-mon) 책 90쪽~

let data = 'https://user:pass@sub.example.com:8080/p/a/t/h?query-string#hash'

//레거시 API
const url = require('url');
let legercy = url.parse(data);

console.log(legercy);

// WHATWC(웹표준) API
const whatwg = new URL(data);
console.log(whatwg);
console.log(whatwg.searchParams instanceof URLSearchParams);
console.log(whatwg.searchParams.get('query'))