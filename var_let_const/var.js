console.log(a); // undefined

var a = 5;

console.log(a); // 5

console.log(b); // undefined

if (1 == 1){
	var a = 15; 
	var b = 24;
}

// 함수를 제외한 스코프에서 선언된 var 변수는 밖에서도 사용가능하다.
console.log(b); // 24

console.log(a); // 15

function fA() {
	// 함수 내부의 a 이기때문에 외부와 상관 없다.
	var a = a;
	a = a;
	a = 4;
}

console.log(a); // 15

fA();

console.log(a); // 15