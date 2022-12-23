
const express = require("express");
// const { get } = require("http");
const app = express();


app.get("/", function(request,response){
    response.send("<h1>Hello</h1>");
});

app.get("/contact",function(req,res){
    res.send("Contact me at :ddd@naver.com");
});

app.get("/about",function(req,res){
    res.send("My name is sevin");
});

app.get("/about2",function(req,res){
    res.send("coffee<h1>Good</h1>");
});

app.listen(3000,function(){
    console.log("Sever started on port 3000");
});

//html을 만들어주고나서 터미널에서 node 파일이름.확장자 써줘야함.

//노드몬 npm install -g
//nodemon index.js
//노드몬을 쓰면 node ~~안써줘도 자동으로 됨.
//npm i pstree.remy@1.1.0 -D