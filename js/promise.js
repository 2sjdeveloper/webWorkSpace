// (24-01-26-fri)

let test = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('비동기 작업 실행');
        reject('작업성공'); //resolve, reject 차이.
    }, 1000);
});

test
    .then(data => console.log('then', data))
    .catch(err => console.log('catch', err))
    .finally(() => console.log('작업끝!'));

let fetch = () => {
    return new Promise((resolve, reject) => {

    })
}