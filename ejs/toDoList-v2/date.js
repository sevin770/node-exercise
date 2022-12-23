
//console.log(module);
//module.exports = getDate; // 0. 함수가 두개라면 어떻게 연결?

//module.exports.getDate = getDate; // 1. 첫번째 함수를 포함해서 넣어주고

// function getDate() {
//   let today = new Date();

//   let options = {
//     weekday: "long",
//   };
//   //let day = today.toLocaleDateString("ko-KR", options);
//   //return day;

//   return today.toLocaleDateString("ko-KR", options);

// }

//간단하게 표현 1번
// module.exports.getDate = getDate;
// var getDate = function(){
//   let today = new Date();

//   let options = {
//     weekday: "long",
//   };
//   //let day = today.toLocaleDateString("ko-KR", options);
//   //return day;

//   return today.toLocaleDateString("ko-KR", options);

// }

//더 간단하게 2번
  exports.getDate = function(){ // module.exports = exports 같다
  const today = new Date();

  const options = {
    weekday: "long",
  };
  //let day = today.toLocaleDateString("ko-KR", options);
  //return day;

  return today.toLocaleDateString("ko-KR", options);

}




//2. module.exports.getDay = getDay; 두번째 함수도 넣어준다. 3. 그리고 필요한 걸 갖다씀
// module.exports.getDay = getDay;

// function getDay() {
//     let today = new Date();
  
//     let options = {
//       day: "numeric",
//       month: "long",
//     };
//     //let day = today.toLocaleDateString("ko-KR", options);
//     //return day;
//     return today.toLocaleDateString("ko-KR", options);
//   }

//   console.log(module.exports);

    exports.getDay = function(){
    const today = new Date();
  
    const options = {
      day: "numeric",
      month: "long",
    };
    //let day = today.toLocaleDateString("ko-KR", options);
    //return day;
    return today.toLocaleDateString("ko-KR", options);
  }

  //console.log(module.exports);
