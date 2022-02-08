### BOM


<br>


- Browser Object Model
- 자바스크립트가 브라우저와 소통하기 위해 만들어진 모델
- 웹브라우저와 관련된 객체
- 사용자가 웹브라우저를 열면 자동으로 생성되는 객체
	- Window 객체
		- 최상위 객체
		- history,location,navigator,document,screen 등의 객체를 모두포함하는 전역 객체다.
		- window 를 생략하여 다른객체들에 접근한다.
	- History 객체
		- 문서 전후 기록 (URL History)
	- Loaction 객체
		- 현재 URL 관련 정보
		- 브라우저에서 사용자가 요청하는 URL
	- Navigator 객체
		- 어떤 브라우저인가
		- 브라우저명, 버전정보를 속성으로 가진다.
	- Screen
		- 브라우저의 외부 환경에 대한 정보를 제공
	- document
		- 현재 문서에 대한 정보
	- 알아서 생성되며 소문자로 접근한다.





**window의 Object**

- document 
	- window에서 보여지는 현재 문서를 의미한다.
- name 
	- window의 이름을 반환한다.
- history 
	- window의 history객체를 의미한다.
- location 
	- window의 location객체를 의미한다.
- navigator 
	- window의 navigator객체를 의미한다.
- screen 
	- window의 screen객체를 의미한다.
- opener 
	- 새롭게 생성된 window에서 이전 window의 참조값을 반환한다.
- parent 
	- 현재 window의 부모 window 객체를 반환한다.
- self 
	- 현재 window의 참조값을 반환한다.
- top 
	- 가장 최상위 window의 참조값을 반환한다



**window 의 속성**

- alert() 
	- 경고창을 보여줄 때 사용한다.
- open() 
	- 새로운 window창을 보여줄 때 사용한다.
- close() 
	- 현재 window창을 닫는다.
- moveTo() 
	- 명시된 위치로 현재 window를 움직인다.
- print() 
	- 현재 window의 내용을 출력한다.
- setInterval() 
	- 명시된 시간 후 반복적으로 특정 작업 수행.
- setTimeout() 
	- 명시된 시간 후 한번 특정 작업 수행.
- confirm() 
	- 다이얼로그 창을 보여줄 때 사용한다.
- focus() 
	- 현재 window에 포커스를 지정할 때 사용한다.
- blur() 
	- 현재 window의 포커스를 제거할 때 사용한다



**navigator**

- appName 
	- 브라우저의 이름을 반환한다.
- appVersion 
	- 브라우저의 버전을 반환한다.
- cookieEnabled 
	- 브라우저의 쿠키 사용여부를 반환한다.
- language 
	- 브라우저의 language를 반환한다.
- onLine 
	- 브라우저의 online 여부를 반환한다.
- product 
	- 브라우저의 engine명을 반환한다.
- userAgent 
	-서버에서 브라우저에 보내진 user-agent 헤더정보를 반환한다


**history**

- length 
	- 히스토리 리스트에 저장된 URL의 개수.
- back() 
	- 히스토리 리스트에서 이전 URL을 로드한다.
- forward() 
	- 히스토리 리스트에서 다음 URL을 로드한다.
- go(number|URL) 
	- 히스토리 리스트에서 명시된 위치의 URL을 로드한다



**location**

- host 
	- 현재 URL의 포트번호,호스트명을 반환하거나 설정한다.
- href 
	- 전체 URL 정보를 반환하거나 설정한다.
- hostname 
	- 현재 URL의 호스트명을 반환하거나 설정한다.
- origin 
	- 현재 URL의 포트번호,호스트명, 프로토콜을 반환한다.
- port 
	- 현재 URL의 포트번호를 반환하거나 설정한다.
- protocol 
	- 현재 URL의 프로토콜을 반환하거나 설정한다.




