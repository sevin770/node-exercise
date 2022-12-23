const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs'); // 상수 선언 위치 아래에 해야함.


app.get("/", function(req,res){

    //1. 현재 요일이 주말인가?

    var today = new Date();
    var currentDay = today.getDay(); // getDay() 오늘 이 무슨 요일인지 가져옴 0~6생성(일~토)
    var day = "";

    // if( currentDay === 6 || currentDay === 0) {
    //     day = "Weekend";
    // } else {
    //     day = "Weekday";     
    // }

    //2. 오늘은 무슨 요일인가요?

    switch (currentDay) {
        case 0:
            day = "일요일";
            break;    
        case 1:
            day = "월요일";
            break;    
        case 2:
            day = "화요일";
            break;    
        case 3:
            day = "수요일";
            break;    
        case 4:
            day = "목요일";
            break;    
        case 5:
            day = "굼요일";
            break;    
        case 6:
            day = "토요일";
            break;    
        default:
            console.log("Error : currentDay is equal to" + currentDay);
    }



    res.render("list" , {
        kindOfDay: day //html에서 ejs로 설정. <%=%>
    });


});


app.listen(3000, function(){
    console.log("server is running on port 3000");
});
