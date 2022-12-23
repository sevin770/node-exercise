const express = require("express");
const bodyParse = require("body-parser");
const app = express();


app.use(bodyParse.urlencoded({extended: true}));

app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");
}); //html파일로 연결

app.post("/", function(req,res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
    res.send("계산 결과" + result);
});

app.get("/bmicalculator", function(req,res){
    res.sendFile(__dirname + "/bmicalculator.html")
});

app.post("/bmicalculator", function(req,res){
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);

    var bmi = weight / (height * height);

    res.send("your bmi" + bmi);

});

app.listen(3001,function(){
    console.log("sever started");
});