// (24-01-30-tue)

const express = require('express');
const router = express.Router();

// 회원가입? 그런걸 한다고 가정하고 코드 작성해보기

// user/
router.get('/', (req, res) => {
    res.send('회원정보조회');
})

// user/insert
router.post('/insert', (req, res) => {
    res.send('회원 등록');
})

// user/update
router.put('/update', (req, res) => {
    res.send('회원 수정');
})

// user/delete
router.delete('/delete', (req, res) => {
    res.send('회원 삭제');
})

module.exports = router;