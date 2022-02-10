	 배열객체분해할당
	 //가. 이전방식
	 var arr = [10,20];
	 var n = arr[0];
	 var n2 = arr[1];
	 console.log(n, n2);
	 
	 //나. 객체분해할당
	 var [n,n2] = [100,200];
	 console.log(n, n2);
	 
	 var [n,n2,n3] = [100,200];
	 console.log(n, n2, n3);
	 
	 var [n,n2,n3=999] = [100,200];
	 console.log(n, n2, n3);
	 
	 var [,,n3] = [100,200,300];
	 console.log(n3);
	 
	 
	 var [n,n2,n3, ...rest] =[1,2,3,4,5,6,7];
	 console.log(n,n2, n3, rest);
	 