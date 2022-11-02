const express = require('express');
const router = express.Router();

//DB 세팅
const mysql = require('mysql');
const path = require('path');

let conn = mysql.createConnection({
    host : "127.0.0.1",
    user : "root",
    password : "@xask3355",
    port : "3306",
    database : "nodejs_DB"
});

router.post('/joinData',(request,response)=>{
    console.log('JoinData 라우터');
    console.log(request.body.user)

    let sql = 'insert into member values(?,?,"3")'
    conn.query(sql,[request.body.user.id , request.body.user.pw],(err,rows)=>{
        if(rows){
            console.log('회원가입 성공!!!')
            response.json({
                result:'success'
            })
        }else{
            console.log("회원가입 실패");
            response.json({
                result : 'fail'
            });
        }
        response.end();
    });
});

router.get('loginData',(request,response)=>{
    let sql = 'select * from member where id=?';
    conn.query(sql,[id],(err,rows)=>{
        if(rows.length > 0){
            response.json({
                result : 'success'
            });
        }else{
            response.json({
                result:'fail'
            });
        }
        response.end();
    })
})

router.get('*', function (req, res) {
    console.log('main')
    res.sendFile(path.join(__dirname, '..', 'react-project', 'build', 'index.html'))
})