'use strict';
// async & await -  promise를 깔끔하게 사용할 수 있게 해줌 

// 1. async //  promise를 조금 더 간편하게 만들 수 있다.
async function fetchUser(){ // 앞에 async를 붙이면 resolve, rejcet안해도됌.
  // 백엔드에서 받아오는 함수 - 10초 

  return 'subin';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await
// await는 async가 붙은 함수 안에서만 사용 가능
function delay(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple(){
  await delay(1000);
  return '🍎';
}

async function getBanana(){
  await delay(1000);
  return '🍌';
}

/*function pickFruits(){
  return getApple().then(apple => {
    return getBanana().then(banana => `${apple} + ${banana}`);
  });
}*/

//위 코드와 같은코드 다른형태
async function pickFruits(){ // await 병렬처리 
  const applePromise = getApple(); //  
  const banananPromise = getBanana();
  const apple = await applePromise;
  const banana = await banananPromise;
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. useful Promise APIs
// - 동시다발적으로 사용해야하는 경우 병렬적으로 기능을 처리(?)
function pickAllFruits(){ //Promise.all - promise 배열을 전달하게되면
  return Promise.all([getApple(), getBanana()])// 모든 promise들이 병렬적으로 다 받을 때까지 모아주는 것
  .then(fruits => fruits.join(' + '));      
}

pickAllFruits().then(console.log);

function pickOnlyOn(){ // Promise.race - 전달받은 배열 중 제일먼저 호출된 아이만
  return Promise.race([getApple(),getBanana()]); //  출력되는 API
}

pickOnlyOn().then(console.log);