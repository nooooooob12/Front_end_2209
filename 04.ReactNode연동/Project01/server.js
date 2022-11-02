const express = require('express');
const app = express();
const router =require('./router/router');


// 경로처리를 하는 모듈 : path
/** 01. 경로 처리를 하는 모듈 ( 환경마다 경로를 지정하는 변수가 다르기 때문에, 단순히 문자열로 접근하면 프로그램이   
 * 특정 운영체제에서만 돌아가기 때문에, 위험을 방지하고자 설치한다.) */
const path = require('path');

/** 02. 외부에 있는 정보들을 요청할때 사용하는 모듈 : cors
 * 데이터를 주고 받는 경우 필수적으로 등록/설치 할 것.
 */
const cors = require('cors');

/** 이 폴더 안에 있는 static파일을 사용하겠다는 의미. */
app.use(express.static(path.join(__dirname, 'react-project','build')));

/** 값을 주고받을때 필요함 */
app.use(cors());
app.use(express.json());

//MiddleWare
app.use(router);

app.listen(3001)
