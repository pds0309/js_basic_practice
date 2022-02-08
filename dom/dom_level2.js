// <body onload="함수"> 역할로서 모든 html의 태그(DOM)가  DOM 트리로 만들어졌을 때 실행된다.
window.onload=function(){
    // DOM Level2 이벤트 처리 
    document.querySelector("#ok3")
            .addEventListener("click",function(){
                console.log("ok3");
            },false);
    document.querySelector("#select2")
    .addEventListener("change",function(){
        console.log(this.value);
    },false);
};
