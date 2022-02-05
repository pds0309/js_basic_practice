

### var ,let , const



#### hoisting

> 자바스크립트 코드 실행 전에 변수의 선언과 함수의 선언이 자바스크립트 스코프 최상단으로 올려진 것과 같은 상태를 말한다.


자바스크립트 엔진이 코드 실행 전에 모든 선언들에 대해 스코프에 등록을 먼저 하기 때문에

선언 시점보다 앞에서 참조되거나 호출되어도 오류가 나지 않는 것이다.

정확히는 var 키워드의 변수와 함수 선언문일 경우에만 맨 위로 올려진 것 처럼 동작한다.




#### let 과 함수표현식은 hoisting 이 안된다?

호이스팅은 되었지만 let , const , 함수 표현식은 undefined 로 초기화 되지 않은 상태로

실제 선언하는 라인까지 가기전에는 사용할 수 없는 상태가 된다

> TDZ - Temporal Dead Zone(일시적 사각지대) 에 머물러 있다가 초기화 라인에서 해제되는 것


- 선언하지 않은 변수와 let 으로 선언하고 앞에서 호출했을 때 나오는 에러를 비교해보면 명확하다.

> Uncaught ReferenceError: Cannot access 'Var' before initialization

> Uncaught ReferenceError: 'Var' is not defined




#### var

* ES6 이전에 있던 변수 키워드.

 

* 중복 선언이 가능하다

 

* 함수 레벨의 스코프

   => 함수 안에서 선언 되면 그 함수 안에서만 사용 가능하다.

   => 블럭 스코프에서는 사용이 가능하다.

   => 함수를 제외한 스코프에서 선언된 var 변수는 어디서든 사용 가능한 전역 변수가 된다.


- var 의 무분별한 사용은 중복하여 선언이 가능하고 함수 외부에 선언하게 되면 어디서든 접근할 수 있게 되어버려 예측이나 유지보수가 어려워 예기치 못한 결과를 초래할 수도 있게 된다!




#### let

* ES6 에서 등장하였다. 

* 변수 선언은 중복해서 할 수 없고 재할당은 가능하다 

* 블록 레벨의 스코프

   => 블럭 내부에서 선언된 것은 내부에서만 사용 가능하다.




#### const

- 역시 ES6 에서 등장 

- 재선언은 물론 재할당도 금지된다. 선언만 하는 것도 불가능하다.

     => const A;

          Uncaught SyntaxError: Missing initializer in const declaration



<br>

---


[공부하고 정리한 글](https://sd0309.tistory.com/25)
