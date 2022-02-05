let letA = 5;
// let letA = 5; // SyntaxError: Identifier 'letA' has already been declared

console.log(letA); // 5

if(1 == 1) {
//	console.log(letA); // Cannot access 'letA' before initialization 
	let letA = 4;
	let letB = "hello";
	console.log(letA + " In If scope"); // 4 In If scope
}


if(1 == 1 ) {
	console.log(letA + " 앞의 스코프에서 선언된 let 사용");
} 

console.log(letA); // 5

// console.log(letB); // Cannot access 'letB' before initialization