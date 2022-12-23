const express = require("express");
const app = express();
const https = require("https"); //https 모듈 사용
const bodyParser = require("body-parser"); // 1. npm i body-parser : req.body 속성에서 사용할 수 있는 미들웨어에서 수신 요청 본문을 핸들러보다 먼저 구문 분석합니다.

//0. 지정된 나라가 아니라 사용자가 원하는 나라를 지정해서 볼 수 있게 하려면?

app.use(bodyParser.urlencoded({extended: true})); //2.

app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");

});

app.post("/",function(req,res){
    //console.log("post request recieved");
    //console.log(req.body.cityName); //3. 이렇게 쓰면 하면 입력한 나라가 나옴. 밑에 활용한다.
    const query = req.body.cityName;
    const apiKey = "aa63fb7e57433eb352bb91dfd92cdb2c";
    const unit = "metric"
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + unit;

    https.get(url, function(response){
        console.log(response.statusCode); //현재상태 200이면 정상작동

        response.on("data", function(data){
            const weatherData = JSON.parse(data); //압축된 json을 js로 풀었다.
            const temp = weatherData.main.temp; 
            const weatherdescription = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon; 
            const imgUrl = "http://openweathermap.org/img/wn/" + icon +"@2x.png" 

            res.writeHead(200, {'Content-Type': 'text/html;charset=UTF-8'});
            res.write("<p>현재 날씨 상태는" + weatherdescription + "</p>");
            res.write("<h1>"+ query + "의 온도는 " + temp + "도 입니다.</h1>");  //html태그도 넣을 수 있다.
            res.write("<img src=" + imgUrl + ">"); 
            res.send();
        });


    });

    //res.send("Server is up and running"); //send는 하나만 할 수 있다. write는 여러개 가능



});

    

app.listen(3000, function(){
    console.log("server is running on port 3000");
});