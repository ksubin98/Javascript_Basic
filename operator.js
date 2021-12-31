// 1. String concatenation
console.log('my'+' cat');
console.log('1'+ 2);
console.log('string literals: 1 + 2= ${1 + 2}');
// \n - enter, \n\t - tap

// 2. Numeric operators
console.log(1+1); // add
console.log(1-1); // substract
console.log(1/1); // divide
console.log(1*1); // multiply
console.log(1%1); // remainder
console.log(1**1); // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter; // - 증가 후 할당
// counter = counter + 1;
// PreIncrement = counter;
// PreDecrement도 같다.

const postIncrement = counter++; // - 할당 후 증가
// PostIncrement = counter;
// counter = counter + 1;
// PostDecrement도 같다.

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y
x -= y; // x = x - y
x *= y; // x = x * y
x /= y; // x = x / y

// 5. Comparison operators (비교)
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. Logical operators; || (or), && (and), ! (not)
const value1 = false;
const vlaue2 = 4 < 2;

// || (or), finds the first truthy value
// 첫번째 값이 true 이면 계산을 멈춤
// || (or)은 true가 한개라도 존재한다면 true를 결과값으로 냄.
console.log('or: ${value1 || value2 || check()}');
//함수를 호출하는 변수?들은 맨 마지막에 배치 -> 효율적

function check(){
    for (let i = 0; i < 10; i++){
        //wasting time. 
        console.log('😱');
    }
    return true; // 결국엔 true 결과값을 가지는 함수
}

// && (and)), finds the first falsy value
// 모든값이 true 이여야 한다.
console.log('or: ${value1 && value2 && check()}');
//함수를 호출하는 변수?들은 맨 마지막에 배치 -> 효율적

//often used to compress long if-statement
//nullableObject && nullableObject.someting
if(nullableObject != null){
    nullableObject.something;
}

function check(){
    for (let i = 0; i < 10; i++){
        //wasting time. 
        console.log('😱');
    }
    return true; // 결국엔 true 결과값을 가지는 함수
}

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion (타입을 변경해서 검사)
console.log(stringFive == numberFive); 
console.log(stringFive != numberFive);

// === strict equality, no type conversion (타입을 신경써서 타입이 다르면 다르다고 판정)
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference - object는 reference형태로 저장
const ellie1 = { name: 'ellie'}; // 1과 2는 각각 다른 레퍼런스 다른 오브젝트
const ellie2 = { name: 'ellie'};
const ellie3 = ellie1;

console.log(ellie1 == ellie2); // false
console.log(ellie1 === ellie2); // false
console.log(ellie1 === ellie3); // true

// equality - puzzler
console.log(0 == false); // ture
console.log(0 === false); // false
console.log('' == flase); // ture
console.log('' === false); // false
console.log(null == underfined); // true
console.log(null === underfined); // false

// 8. Conditional operators: if
// if, else if, else
const name = 'ellie';
if(name == 'ellie'){
    console.log('Welcome, Ellie!');
} else if (name === 'coder'){
    console.log('You are amazing coder');
} else {
    console.log('unkwnon');
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
// 삼항연산자
console.log(name === 'ellie' ? 'yes' : 'no');
// condition이 true이면 value1, false이면 value2 실행

// 10. Switch statement
// use for multiple if checks
// use for enum-like value checks
// use for multiple type checks in TS

const browser = 'IE';
switch (browser){
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}

// 11. Loops (반복문)
// while loop, while the condition is truthy,
// body cod is executed.

let i = 3;
while (i > 0){
    console.log('while: ${i}');
    i--;
}

// do while loop - code를 먼저 실행한 다음 
//                 조건의 만족 여부를 확인
do{
    console.log('do while: ${i}');
    i--; 
} while (i > 0);

// for loop, for(begin; condition; step)
for(i = 3; i > 0; i--){
    console.log('for: ${i}');
}

for(let i = 3; i > 0; i = i - 2){
    //inline varialbe declaration
    console.log('inline variable for: ${i}');
}

// nested loops (loop 중첩문)
for (let i = 0; i < 10; i++){
    for(let j = 0; j < 10; j++){
        console.log('i: ${i}, j:${j}');
    }
}

// Quiz 1
for (let i=0; i<=10; i++){
    if(i%2 != 0){
        continue;
    }
    console.log('q1. ${i}');
}

// Quiz 2
for (let i =0; i<11; i++){
    if(i>8){
        break;
    }
    console.log('q2. ${i}');
}