// (24-01-29-mon)

const fs = require('fs');
const express = require('express');
const app = express();
//미들웨어 
// -- Request Data Process
//application/json
app.use(express.json({ //미들웨어 모듈
    limit: '50mb'
}))

// application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))


// 책 126쪽. Error : 내장된 에러핸들러 호출, 직접호출 두가지 방식

app.get('/defaultErr', (req, res) => {
    throw new Error('기본 핸들러 동작');
})
// 서버 재실행 후 http://localhost:8000/defaultErr 입력해보기

app.unsubscribe(function (err, req, res, next) {
    console.log(err);
    res.status(500).json({
        statusCode: res.statusCode,
        errMessage: err.message
    });
});
app.get('/customErr', (req, res, next) => {
    next(new Error('직접 호출 방법'));
})
// 서버 재실행 후 http://localhost:8000/customErr 입력해보기


// 책 127쪽. 정적 파일 제공하기. static
app.use(express.static('./files'));
app.use('/public', express.static('./files'));


// Data Loding
const jsonFile = fs.readFileSync('./db.json');
const jsonData = JSON.parse(jsonFile);

const getData = (target, where) => {
    let data = jsonData[target];
    if (Array.isArray(data)) {
        let list = data;
        for (let obj of list) {
            if (obj.id == where) {
                data = obj;
            }
        }
    }
    return data;
}


app.listen(8000, () => { //listen 은 하나만 실행한다.
    console.log('http://localhost:8000');
})


app.get('/', (req, res) => { // get = 메소드. 
    res.send('Hello, Express.js World'); //callback 값. 콜백값은 리퀘스트(req), 리스판스(res) 두개의 값을 매개변수로 받는다.
})

//전체조회
app.get('/posts', (req, res) => {
    let data = getData('posts');
    res.json(data);
});
//터미널에서 먼저 실행하고, http://localhost:8000/posts 여기서 확인 


//단건조회
app.get('/posts/:id', (req, res) => { // : 을 사용하면 params에 해당 필드가 들어감.
    let postId = req.params.id;
    let data = getData('posts', postId);
    res.json(data);
});
//터미널에서 먼저 실행하고, http://localhost:8000/posts 여기서 단건 확인. 단건 확인은 아이디 입력해야됨. 예를 들어 http://localhost:8000/posts/2 << 이런 식으로.


//전체조회 - comments
app.get('/comments', (req, res) => {
    let data = getData('comments');
    res.json(data);
})

//단건조회 - comments
app.get('/comments/:id', (req, res) => {
    let postId = req.params.id;
    let data = getData('comments', postId);
    res.json(data);
})

//조회 - profile
app.get('/profiles', (req, res) => {
    let data = getData('profiles');
    res.json(data);
})

//검색을 포함하는 경우 -> QueryString
app.get('/search', (req, res) => {
    let keywards = req.query;
    console.log('검색조건 구성', keywards);
    res.json(keywards);
})
//test1 : http://localhost:8000/search?dept=sale&city=deagu
//test2 : http://localhost:8000/search?id=100&name=Hong


//제이슨에대한 파싱처리가 덜되어서 아래 등록,수정,삭제가 아직 실행되진 않음.

//등록
app.post('/posts', (req, res) => {
    let data = req.body;
    console.log('등록', data);
    res.json(data);
});

//수정
app.put('/posts/:id', (req, res) => {
    let postId = req.params.id;
    let data = req.body;
    console.log('수정', postId, data);
    res.json({ id: postId, data })
})

//삭제
app.delete('/posts/:id', (req, res) => {
    let postId = req.params.id;
    console.log('삭제', postId);
    res.sendStatus(203);
})