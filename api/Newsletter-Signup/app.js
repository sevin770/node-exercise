const express = require("express"); // 모듈 3가지 설치 express body-parser request
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const { stringify } = require("querystring");



const app = express();

// 서버에서 css및이미지등 로컬에 있는 정적 파일을 제공하려면 express의 기능을 써야함.
//public이라는 폴더 안에 css,imges폴더를 만들어서 넣는다. 그리고 html경로에서는 public을 빼야 연결됨.
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req,res){
    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;

    //console.log(firstName, lastName, email);

    const data = {
        member: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName,
                }
            }
        ]
    };

    const jsonData = JSON.stringify(data);

    const url = "https://mandrillapp.com/api/1.0/lists/e93f267912";

    const options = {
        method: "POST",
        auth: "e5eb36196c63587adffc330a364d9ad9-us21"
    }

    const request = https.request(url, options, function(response){
        
        if(response.statusCode === 200) {
            res.send("successfully subscribed");
        }else {
            res.sendFile(__dirname + "/failure.html");
        }  
        response.on("data", function(data){
            console.log(JSON.parse(data));
        });
    });


    request.write(jsonData);
    request.end();
});


app.post("/failure", function(req,res){
    res.redirect("/");
});

app.listen(3000, function(){
    console.log("server is running on port 3000");
});

