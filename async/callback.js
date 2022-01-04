'use strict';

// JavaScript is synchronous.(동기적이다.)
// synchronous -> hoisting이 된 이후부터 하나하나 실행이 된다.
// hoisting -> var, function 선언되는 것들이 자동적으로 제일 위로 올라가는 것.
// asynchronous -> 코드가 언제 시작될지 예측되지 않는 것
// callback 함수 - 우리가 전달해준 함수를 나중에 불러주는 함수.

console.log('1');
setTimeout(function(){ // 1초가 지나면 전달한 함수를 실행함.
    console.log('2');
},1000) // 밀리세컨드(1000ms -> 1초)
// 위의 코드와 동일한 코드
setTimeout(() => console.log('2'), 1000);

console.log('3'); // 출력은 1 - 3 - 2
// 1 출력 - setTimeout(브라우저에게 1초 뒤에 실행 요청) - 3 출력 - setTimout 실행 : 비동기적인 실행방법

// synchronous callback
function printImmediately(print){ //JavaScript 엔진이 함수를 제일 위로 올려 선언했을 것이다.
    print();
}
printImmediately(() => console.log('hello'));

// asynchronous callback
function printWithDelay(print, timout){ // setTimeout을 랩핑하고 있는 함수
    setTimeout(print, timeout); //  전달받은 함수를 setTimout에 요청하는 것
}
printWithDelay(() => console.log('async callback'), 2000);


//....콜백지옥....
class UserStorage{ // 사용자의 정보를 받아오는 함수
    loginUser(id, password, onSuccess, onError){
        setTimeout(() => {
            if(
                (id === 'subin' && password === 'sch') ||
                (id === 'coder' && password === 'univer')
            ){
                onSuccess(id);
            } else{
                onError(new Error('not found'));
            }
        },2000);
    }
    getRoles(user, onSuccess, onError){ // 사용자가 역할을 받아오는 함수
        setTimeout(() => {
            if(user === 'subin'){
                onSuccess({ name: 'subin', role: 'student'});
            } else{
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

//(1) 사용자에게 id와 password를 입력받아올 것
//(2) 서버에게 전송하여 login
//(3) login이 성공적이라면 사용자의 id를 받아오는데, 받아온 id를 통해 role을 받아올 것
//(4) 사용자의 이름과 역할이 들어있는 obj를 출력

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id,
    password,
    user => {
        userStorage.getRoles(
            user,
            userWithRole => { // 사용자의 정보와 역할을 잘 받아와야 실행되는 함수
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`)
            },
            error => {
                consol.log(error);
            }
        );
    }, 
    error => {
        console.log(error)
    }
);

//콜백함수의 단점 
//(1) 가독성 떨어짐. - 비즈니스 로직성 파악하기도 어렵다.
//(2) 에러나 디버깅 경우 어렵다
//(3) 유지, 보수도 어렵다.