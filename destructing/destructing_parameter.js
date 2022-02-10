	 //객체분해할당 - 파라미터
	 
	   // 1)이전방식
	   function  fun1(n) {
		  console.log(n[0], n[1]);
	   }
	 
	   fun1([10,20]);
	 
	   //2) 객체분해할당
	   function fun2([n,n2]){
		   console.log(n, n2);
	   }
	   fun2([100,200]);
	   
	   function fun3([n,n2,n3]){
		   console.log(n, n2, n3);
	   }
	   fun3([100,200]);
	   
	   function fun4([n,n2,n3=999]){
		   console.log(n, n2, n3);
	   }
	   fun4([100,200]);
	   
	   function fun5([n,n2,n3, ...rest]){
		   console.log(n, n2, n3, rest);
	   }
	   fun5([1,2,3,4,5,6,7,8,9]);
	   
	   ////////////////////////////////
	   
	   function x({name, age}){
		   console.log(name, age);
	   }
	   //arrow 함수
	   var x = ({name, age})=>console.log(name, age);
	   x({name:"김갑환",age:20});