// (24-01-26-fri)

// 2024-01-26 15:04:30 으로 표현하는 함수 만들기


// 내가 검색해서 찾은거 

//현재 연월일시분초 구하는 함수
var today = new Date();
var year = today.getFullYear();
var month = ('0' + (today.getMonth() + 1)).slice(-2);
var day = ('0' + today.getDate()).slice(-2);
var dateString = year + '-' + month + '-' + day;
//console.log(dateString);

var today = new Date();
var hours = ('0' + today.getHours()).slice(-2);
var minutes = ('0' + today.getMinutes()).slice(-2);
var seconds = ('0' + today.getSeconds()).slice(-2);
var timeString = hours + ':' + minutes + ':' + seconds;
//console.log(timeString);

console.log('수진 : ' + dateString + ' ' + timeString);


//교수님이랑 같이
function format(value) {
    return ('0' + value).slice(-2); //2자리    
}
function getDateTime() {
    let today = new Date();
    let year = today.getFullYear();
    let month = format(today.getMonth() + 1); //month는 0부터 11까지 있음. 
    let day = format(today.getDate()); //getDay 는 요일.    
    let hour = format(today.getHours());
    let min = format(today.getMinutes());
    let sec = format(today.getSeconds());
    return `${year}-${month}-${day} ${hour}:${min}:${sec}`;
}
console.log('교수님 : ' + getDateTime());


const timeout = setTimeout(() => {
    console.log('교수님 : ' + getDateTime());
}, 3000);
//clearTimeout(timeout);

let count = 0;
const interval = setInterval(()=>{ //setInterval은 웬만하면 반복문안에 넣지 않도록.. 셋인터벌: 동일한 코드를 주기적으로 반복. 잘못사용하면 이미 셋인터벌이 동작하는데 또 셋인터벌위에 실행될수도. 반복문 안에서 돌기시작하면 제어가 안됨.
    console.log('count', count++);
    if(count == 5){
        clearInterval(interval);
    }
    console.log(getDateTime());
}, 2000);

setImmediate(()=>{
    console.log('setImmediate', getDateTime());
});
console.log('마지막 코드'); //코드들이 동작하는 순서를 한번 보기. 