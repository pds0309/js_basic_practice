	 //JSON객체분해할당
	 
	 //가. 이전방식
	 var json = {name:"김갑환",age:20};
	 console.log(json.name, json.age);
	 var key = "name";
	 
	 //나. 객체분해할당
	
	 var {name,age}={name:"김갑환",age:20};
	 console.log(name,age);
	 
	 var {name,age2}={name:"김갑환",age:20};
	 console.log(name,age2);
	 
	 var {name,age2=10}={name:"김갑환",age:20};
	 console.log(name,age2);
	 
	 //변수명 변경
	 var username,userage;
	 var {name:username,age:userage} = {name:"김갑환",age:20};
	 console.log(username,userage);