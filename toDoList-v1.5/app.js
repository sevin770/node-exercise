const express = require("express");
const bodyParser = require("body-parser");

const app = express();
let items = ["초콜릿 먹기","케이크 먹기","마카롱 먹기"];
let workItems = ["왜 안되는 거야","ㅠㅠ","에휴"];

app.set('view engine', 'ejs'); // 상수 선언 위치 아래에 해야함.
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/", function(req,res){
    let today = new Date();

    let options = {
      weekend: "long",
      day: "numeric",
      month: "long"
    }
    let day = today.toLocaleDateString("ko-KR", options);

    res.render("list", {listTitle: day, newListItems: items});  //html에서 ejs로 설정. <%=%>

});


app.get("/work", function(req,res){
    res.render("list", {listTitle: "Work List", newListItems: workItems});
});


// app.post("/", function(req,res){

//     let item = req.body.newItem;
//     workItems.push(item);
//     res.redirect("/work");
// });

app.post("/", function(req,res){

    let item = req.body.newItem;

    if(req.body.list === 'Work'){
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
