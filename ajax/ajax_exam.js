// ajax 담당 객체 : XMLHttpRequest 객체

//console.dir(httpRequest);

//onreadystatechange
//readyState : 0 ~ 4
// 0 호출되지 않음
// 4 모든데이터 취득 완료
//status
//responseText : plain and JSON
// open , send =>

let httpRequest;
function req() {
  httpRequest = new XMLHttpRequest();
  //  console.dir(httpRequest);
  //  console.log(httpRequest);

  // 요청 시 응답 처리하는 함수 호출
  // 왜 괄호안치나 모르면 안됨
  httpRequest.onreadystatechange = responseFun;

  // open("get|post , 타겟 , true:비동기|false:동기");
  httpRequest.open("get", "b.html", true);
  httpRequest.send(null); // get 이면 null
}

//response

function responseFun() {
  if (httpRequest.readyState === 4 && httpRequest.status === 200) {
    let data = httpRequest.responseText;
    console.log(typeof data);
    document.getElementById("result").innerText = data;
  }
}
