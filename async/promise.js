'use strict';
//Promise - JavaScript 안에 있는 오브젝트
//비동기코드를 깔끔하게 처리할 수 있음 (콜백함수 대신 사용)
//1) state(상태): pending -> fulfilled or rejected
//2) producer(정보 제공) vs consumer(정보 소비)의 차이점

// 1. Producer
// promise 를 작성할 때에는 비동기적으로 수행하고 싶은 코드를 작성
const promise = new Promise((resolve, reject) => {// class 이기 때문에 오브젝트 생성 가능
    // promise 안에서는 보통 heavy한 일들을 한다 (network, read files)
    // 실행하게 되면 promise라는 함수가 바로 실행되는 것을 확인할 수 있다.
    // = when new Promise is created, the executor runs automatically.
    console.log('doing someting....'); 
    setTimeout(() => {
        resolve('subin') //성공적으로 해놨다면 (데이터를 받아왔다) resolve라는 함수를 통해 전달
        //reject(new Error('no network')) // 실패, Error object에는 이유를 잘 명시해야한다.
    },2000)
});

// 2. Consumer - then, catch, finally를 이용해서 값을 받아올 수 있다.
promise // 
    .then(value => { //then은 똑같은 promise를 리턴 (성공한 값)
    console.log(value); 
    })
    .catch(error => { // error가 발생 시, 어떻게 처리할 건지 콜백함수 등록.
        console.log(error);
    })
    .finally(() => 
    {console.log('finally')
    }); // 성공과 실패 상관없이 어떤기능을 마지막에 호출하고싶을 때 사용
    
    // 3. Promise chaining
    const fetchNumber = new Promise((resolve, reject) => {
        setTimeout(() => resolve(1), 1000) // 숫자전달 promise
    })

    fetchNumber
    .then(num => num * 2) //then은 값을 바로 전달할 수도 있고, 다른 비동기 promise를 전달해도 된다.
    .then(num => num * 3)
    .then(num =>{
        return new Promise((resolve, reject) => { // 다른 서버와 통신함
            setTimeout(() => resolve(num - 1),1000);
        }); 
    })
    .then(num => console.log(num));

// 4. Error Handling
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐓'), 1000);
    });
const getEgg = hen =>
    new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)),1000);//성공시 resolve(`${hen} => 🥚`),1000);
    });
const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🍳`), 1000);
    });

/*getHen()
.then(hen => getEgg(hen))
.then(egg => cook(egg))
.then(meal => console.log(meal));
*/

//같은 코드의 다른 형태
getHen() //
    .then(getEgg)
    .catch(error => { // error처리(일명 빵꾸처리)
        return '🥖';
    })
.then(cook)
.then(console.log)
.catch(console.log);