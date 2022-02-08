

### DOM

<br>


#### DOM (Document Object Model)

- html 문서를 만들면 html <->JS Object 클래스로 매핑되는 방법론을 말함
- html 이나 xml 문서에 접근하기 위한 일종의 인터페이스다.
- 문서내의 모든 요소를 정의하고 각각 요소에 접근하는 방법이 제공된다.
- 문서 계층구조에 자바스크립트로 접근해 속성추가,제거, 반응 등 작업을 할 수 있다.
	- Document : HTML 문서를 의미한다.
	- Object : 자바스크립트 객체를 의미한다.
	- Model : 방법론, 방안
	- 1. 우리가 html을 만든다
	- 2. 서버에 저장되겠지 그걸 사용자는 정해진 http 경로로 요청할거다.
	- 3. 서버가 찾아 응답한다.
	- 4. 브라우저가 클라이언트 단에 다운을 받고 화면에 렌더링 해준다.
 		- a. 요 다운과 렌더링 사이의 중간과정에 아주 중요한 작업을 한다
 			- i. 각 HTML 태그에 해당되는 객체를 생성한다. (EX) head 면 head에 대한 객체, title이면 title에 대한 객체 )
			- ii. 태그를 외부 부터 내부 까지 순서대로 객체트리 로 만든다. => DOM 트리라고 한다.
				- 1. DOM TREE 의 3가지 구성
					- a. Element Node - > 트리의 각 구성 태그를 말함
					- b. Text Node -> 태그에 포함되어있는 값
					- c. Attribute Node -> 태그의 속성
 
	- 왜 알아야 하나?
		- JS 에서 DOM 트리에 접근할거다.
		- 원하는 계층 에 접근해 속성에 대한 추가나 변경 , 제거 , 반응 등을 작업한다.
		- HTML이라는 정적 파일을 동적으로 활용, 처리가 가능해진다.

- 결론
	- Document(html 문서) 를 Object(HTML 객체)로 구조화 한 것
	- JS Document 객체
	- document변수로 domtree에 접근한다
	- 3가지를 정의한다.
		- 문서에 대한 논리적인 트리 구조
		- 동적인 접근 방법
		- 동적인 제어 방법

#### BOM??

- Browser Object Model
- 웹브라우저와 관련된 객체이다
- 사용자가 웹브라우저를 열면 자동으로 생성되는 객체
	- Window 객체
		- history,location,navigator,document,screen 등의 객체를 모두포함하는 전역 객체다.
		- window 를 생략하여 다른객체들에 접근한다.
	- History 객체
		- 문서 전후 기록
	- Loaction 객체
		- URL 관련 정보
	- Navigator 객체
		- 어떤 브라우저인가
	- Screen
	- 알아서 생성되고 소문자 이름으로 접근해서 사용함





#### DOM Level


**Dom Level**

- DOM 이란 xml,html 문서의 각 항목을 트리구조로 표현해 생성,변형,삭제를 원활하게 해주는
cross-platform, 언어독립적인 인터페이스를 말함
- W3C 표준
- 21-12 기준 최신은 level4, 대부분 level3 명세
- dom level은 일종의 권고안





**Level 0**

- W3C 표준화 전의 모델
- 하나의 이벤트에 하나의 이벤트 리스너 연결
	- EX) button onclick

- Classic Model

```html
<script>
     window.onload=function(){
          let button = document.getElementById('button');
         
          button.onclick=function(){
               let message = '기본 이벤트 모델';
               alert(message);
          }
     }    
</script>
<button id="button">고전</button>
```

- Inline Model

```html
<script>
</script>
<body>
<button onclick="함수">
인라인 이벤트 모델
</button>
</body>
```

- Event Handler 하나밖에 처리 불가능


**Level 1**
- HTML, XML 문서 구조 정의에 초점

**Level 2**

- namespace ,event, css 지원
- Event 와 EventHandler 를 연결
- 여러개의 Event Handler 처리 가능
- addEventListener, removeEventListener 사용

```javascript
document.getElementById('btn1')
	.addEventListener('click', handler, false);
document.getElementById('btn2')
	.addEventListener('click', handler, false);
```

** Level 3**

- 더 많은 Event , Element
	- Core,HTML,Views,Events,Style 모듈 정의
- 유효성 검사기



**DOM 처리**

- DOM 트리에서 원하는 Node(Element) 로 접근해 값을 얻거나 변경,삭제 처리하는 것

- document.getElementById("ID");
	- HTMLcollection 반환
- querySelector
	- 모든 선택자를 사용 가능한 메소드 지원
	- document.querySelector("선택자") - 단일값 반환
	- document.querySelectorAll("선택자") - 다중값 반환
	- 더 구체적이고 한정적인 엘리먼트를 얻어올 수 있다.
	- **NodeList** 반환

- HTMLCollection의 항목은 name, id 속성으로도 접근이 가능하지만, NodeList의 항목은 인덱스 번호로만 접근이 가능하다.


- What is Better?

> "Better" is subjective. 
> querySelector is the newer feature.
> getElementById is better supported than querySelector.
> querySelector is better supported than getElementsByClassName.
> querySelector lets you find elements with rules that can't be expressed with getElementById and getElementsByClassName
> You need to pick the appropriate tool for any given task. (In the above, for querySelector read querySelector / querySelectorAll).


[model2](https://openhome.cc/eGossip/JavaScript/DOMLevel2EventModel.html)
[dom](http://www.ktword.co.kr/test/view/view.php?m_temp1=2506)



