'use strict';
//....콜백지옥....
class UserStorage{ // 사용자의 정보를 받아오는 함수
    loginUser(id, password){
      return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(
                (id === 'subin' && password === 'sch') ||
                (id === 'coder' && password === 'univer')
            ){
                resolve(id);
            } else{
                reject(new Error('not found'));
            }
        },2000);
      })
    }
    getRoles(user){ // 사용자가 역할을 받아오는 함수
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if(user === 'subin'){
              resolve({ name: 'subin', role: 'student'});
          } else{
              reject(new Error('no access'));
          }
      }, 1000);
      })
    }
}

//(1) 사용자에게 id와 password를 입력받아올 것
//(2) 서버에게 전송하여 login
//(3) login이 성공적이라면 사용자의 id를 받아오는데, 받아온 id를 통해 role을 받아올 것
//(4) 사용자의 이름과 역할이 들어있는 obj를 출력

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(id, password)//
.then(userStorage.getRoles)
.then(user => alert(`Hello ${user.name}, you have a ${user.role}`))
.catch(console.log);


