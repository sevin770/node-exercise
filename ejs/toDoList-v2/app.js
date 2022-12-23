const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js"); // 디렉토리 안 모듈 코드 가져오기.
//console.log(date());

const app = express();
let items = ["초콜릿 먹기","케이크 먹기","마카롱 먹기"]; // const는 js에서 새 배열푸시 안됨. 새 배열로 변환됨.
let workItems = ["된당","야호","랄라"];

app.set('view engine', 'ejs'); // 상수 선언 위치 아래에 해야함.
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/", function(req,res){

    let day = date.getDay(); // date모듈 사용
    //let day = date.getDay(); // 

    res.render("list", { listTitle: day, newListItems: items }); //html에서 ejs로 설정. <%=%>
});


app.get("/work", function(req,res){
    res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.get("/about", function(req,res){
    res.render("about");
});


// app.post("/", function(req,res){

//     let item = req.body.newItem;
//     workItems.push(item);
//     res.redirect("/work");
// });

app.post("/", function(req,res){

    let item = req.body.newItem;

    if(req.body.list === 'Work'){ // list가 버튼name인데 안 맞춰줘서 오류나서 헤맴.
        workItems.push(item);
        res.redirect("/work");
    }
    else{
        items.push(item);
        res.redirect("/");
    } 
    console.log(req.body);
});


app.listen(3000, function(){
    console.log("server is running on port 3000");
});
