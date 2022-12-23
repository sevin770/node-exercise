forEach 함수
var lettersArray = ['a','b','c'];
lettersArra.forEach(function(letter){
  console.log(letter);
});



express 라우팅 매개변수 사용
https://expressjs.com/en/guide/routing.html#route-parameters

app.get('/users/:userId/books/:bookId', (req, res) => {
    res.send(req.params)
  })

app.get("/new/:topic", function(req,res){ 
  console.log(req.params.topic); //new폴더 안에 있는 html경로로 이동하면 console에 찍힘.
});

app.get("/new/science", function(req,res){  
  console.log(req.params.topic); // science 출력
});

app.get("/new/politics", function(req,res){ 가져옴.
  console.log(req.params.topic); //politics 출력
})



///lodash 사용법

//npm i lodash
//var _ = require('lodash');