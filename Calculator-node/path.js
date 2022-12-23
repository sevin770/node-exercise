console.log(__dirname);

//__dirname : 현재 파일 위치를 파악하게 해주는 상수
app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");
}); //html파일로 연결