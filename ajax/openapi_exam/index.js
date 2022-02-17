(() => {
  var httpRequest;
  document.addEventListener("keyup", function (event) {
    if (
      document.getElementById("id-input").value !== "" &&
      window.event.keyCode === 13
    ) {
      console.log("Request Success!");
      requestMovie();
    }
  });
  function requestMovie() {
    console.log("Request Movie");
    httpRequest = new XMLHttpRequest();

    httpRequest.onreadystatechange = responseMovie;

    httpRequest.open(
      "get",
      `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=3d430a039fb1bae3fe5f0bc48df64e46&targetDt=` +
        document.getElementById("id-input").value +
        ""
    );
    httpRequest.send(null);
  }

  function responseMovie() {
    if (httpRequest.readyState === 4 && httpRequest.status === 200) {
      let data = httpRequest.responseText;
      var json = JSON.parse(data);
      var list = json["boxOfficeResult"]["dailyBoxOfficeList"];
      var html = `<table border="1">`;
      html += `<tr>
               <th>랭킹</th>
               <th>영화명</th>
               <th>개봉일</th>
             </tr>`;
      for (let i = 0; i < list.length; i++) {
        html += `<tr>
                       <td>${list[i].rank}</td>
                       <td>${list[i].movieNm}</td>
                       <td>${list[i].openDt}</td>
                     </tr>`;
      }
      html += `</table>`;
      document.querySelector("#result").innerHTML = html;
    }
  }
})();
