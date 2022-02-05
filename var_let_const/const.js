const name = 'pds'
// name = 'sdp' //Uncaught TypeError: Assignment to constant variable.


// 재할당이 안될 뿐 const 가 불변을 의미하지는 않는다.
const user = {
  id: 'pds0309',
}

user.id = 'pp0309';

console.log(user) // { id: "pp0309" }