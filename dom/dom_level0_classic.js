
// <body onload="함수"> 역할로서 모든 html의 태그(DOM)가  DOM 트리로 만들어졌을 때 실행된다.
window.onload = function () {

    //고전 방식
    // var btn = document.querySelector("#ok2");
    // btn.onclick=function() {
    //	console.log("ok2");
    //};

    document.querySelector("#ok2").onclick = function () {
        console.log("okee2");
    };

    //select태그
    document.querySelector("#select").onchange = function () {
        console.log(this);
        console.log(this.value);
    };

    //form태그의 고전방식 이벤트 처리
    // 조건: id값을 입력하지 않으면 submit 안되게 처리한다.
    document.querySelector("form").onsubmit = function () {
        var id = document.querySelector("#userid").value;
        if (id.length == 0) {
            event.preventDefault();
        }
    };
};