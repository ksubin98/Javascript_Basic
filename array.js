'use strict';

// Array

// 1. Array Declaration 선언
const arr1 =  new Array(); //  배열 생성
const arr2 = [1, 2]; //2개인 배열 

// 2. Index position
// 인덱스를 통해서 배열에 어떻게 접근하는지
const fruits = ['🍎','🍌'];
console.log(fruits);
console.log(fruits.length); // 길이는 2
console.log(fruits[0]); // 사과 출력
// 인덱스에 해당하는 value들을 받아올 수 있다.
// 배열의 첫번째를 찾을 때는 인덱스 0을 많이 사용하며
console.log(fruits[fruits.length-1]); // 배열의 마지막을 찾을 때는 배열 길이의 -1 해서 찾을 수 있다.
// 배열은 인덱스가 0부터 시작하기 때문에 - 총 길이의 -1을 하면 마지막

// 3. Looping over an array
// 배열안에 들어있는 value들을 모두 출력
for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
} // 내가 작성한 코드

// (1) 방법
for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}

// (2) 방법
for(let fruit of fruits){
    console.log(fruit);
}

// (3) 방법
fruits.forEach(function(fruit, index, array){ // 보통 array는 받아오지 않는다.
    console.log(fruit, index, array);
}) // forEach는 콜백함수를 받아온다.
//위의 코드와 동일한 결과
fruits.forEach((fruit) => console.log(fruit));

// 4. Addtion, deletion, copy
//(1) 아이템을 제일 마지막에 넣고싶다. -push
fruits.push('🍑', '🍊');
console.log(fruits);

//(2) 아이템을 제일 마지막에서부터 지우고싶다. -pop
fruits.pop(); // 맨 뒤에서부터 하나씩 삭제 (귤 삭제)
fruits.pop(); // 맨 뒤에서부터 하나씩 삭제 (복숭아 삭제)
console.log(fruits);


//(3) 앞에서부터 아이템을 추가 - unshift
fruits.unshift('🍑', '🍊');
console.log(fruits);

//(4) 앞에서부터 아이템을 삭제 - shitf
fruits.shift();// 맨 앞에서부터 하나씩 삭제 (복숭아 삭제)
fruits.shift();// 맨 앞에서부터 하나씩 삭제 (귤 삭제)
console.log(fruits); 

// 중요!!
// shift, unshift는 pop과 push보다 정말정말 느리다.
// 배열의 길이가 길면 길수록 더욱 더 느려짐 (당김과 움직임이 계속 반복적으로 나타나기 때문에)
// 전체의 데이터들이 움직여야한다면 굉장히 느려짐.

// (5) 아이템을 지정된 포지션내에서 지우는 것 - splice
fruits.push('🍋','🍓','🥝');
console.log(fruits);
fruits.splice(1, 1) // splice(지우고싶은 시작 인덱스위치 , 몇개를 지울 것인지)
console.log(fruits);
fruits.splice(1, 1, '🥥', '🍋'); 
//1번째 인덱스 값이 삭제된 후 코코넛이 삽입되고, 그 뒤에 레몬이 삽입
console.log(fruits);

// 두가지 배열을 묶기
const fruits2 = ['🫐','🍈'];
const newFruits = fruits.concat(fruits2); // fruits와 fruits2를 연결
console.log(newFruits); 

// 5. Searching
// 배열 안에 어떤 값이 몇번째 인덱스에 있는지 확인할 수 있다. - indexOf
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍎')); // 없는 값이 없으면 -1 출력
console.log(fruits.includes('🍎'));
// includes - 배열에 해당 값이 있는지 없는지 확인할 수 있다 - true, false로 결과값이 나옴.

// lastIndexOf
console.clear();
fruits.push('🍎');
console.log(fruits);
console.log(fruits.indexOf('🍎'));
//맨 처음에 만나게 되면 첫번째 만나게 된 해당 값의 인덱스 번호를 출력
console.log(fruits.lastIndexOf('🍎'));
//맨 마지막으로 만나게 된 해당 값의 인덱스 번호를 출력

