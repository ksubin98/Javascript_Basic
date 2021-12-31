// Function
// - fundametal building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value 

// 1. Fuction declaration
// function name(parm1, parm2){ body ... return; }
// one function === one thing
// naming: doSomething, command, 동사의 형태로
// 함수가 너무 많은 동작을 하지 않도록 세분화 하여 작성한다.
// 자바스크립트에서 function은 object이다.

function printHello(){ // parm(인수) 받지 않음
    console.log('hello');
}
printHello(); // 함수 호출

function log(message){ //parm를 받게 되면
    console.log(message);
}
log('Hello@'); //함수 호출 시, 원하는 메시지 전달 가능
// 변수의 타입을 작성하는 것이 좋다 (typeScript 사용시)

// 2. Parameters
// permitive parameters: value가 저장
// object parameters: reference가 저장

function changeName(obj){ //obj -> 함수 안에서 값을 변경하면
    obj.name = 'coder'; // 변경된 사항이 메모리에 그대로 적용
}
const ellie = {name : 'ellie'};
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown'){
    console.log('${message} by ${form}');
} // para 옆에 기본값 설정 가능

showMessage('Hi');

// 4. Rest parameters (added in ES6)
function printAll(...args){ // ... <- 배열 형태로 전달
    for(let i = 0; i<args.length; i++){
        console.log(args[i]);
    }

    for (const arg of args){ //args안의 값들이 차례대로 지정되면서 출력
        console.log(arg);
    }
}

printAll('dream', 'coding', 'ellie'); // 3칸으로 이루어진 배열형태

// 5. Local scope -- 썬팅과 같은 개념 (안에서는 볼 수 있지만 밖에서는 X)
let globalMessage = 'global'; // global variable
function printMessage(){
    let message = 'hello';
    console.log(message); // local variable , 안에서만 사용가능
    console.log(globalMessage);
}

// 6. Return a value
function sum(a,b){
    return a + b;
}
const result = sum(1,2);
console.log('sum: ${sum(1,2)}');

// return 값이 없는 함수의 경우 return undefined; 생략된 경우.

// 7. Early return, early exit
//bad
function upgradUser(user){
    if(user.point > 10){
        //long upgrad logic...
        // 블록 안에서 logic을 많이 작성하면 가독성 떨어짐 
    }
}

// good
function upgradUser(user){
    if(user.point <= 10){ // 조건이 맞지 않을때는 빨리 return 하여 함수 종료 후
        return ;
    }
    // 조건이 맞을때만의 logic을 작성하는 것이 좋다,
    // long upgrad logic...
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1) Function expression
// a function declaration can be called earler than it is defiedn. (hoisted)
// function expression은 할당한 다음부터 호출 가능
// a function expression is created when the execution reaches it.
const print = function(){ //print 라는 변수를 선언함과 동시에
    console.log('print'); // 바로 함수 할당.
}; //함수에 이름이 없는 함수를 anonymous function.
print(); // 호출 가능
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,3)); 

// 2) Callback function using function expression
function randomQuiz(answer, printYes, printNo){
    if(answer === 'love you'){
        printYes();
    } else {
        printNo(); 
    }
}

// anonymous function
const printYes = function(){
    console.log('yes!');
};
// named function
const printNo = function print(){
    console.log('no!');
}
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous - 함수를 간결하게 만들어 주는 요소
const simpleprint = function(){
    console.log('simplePrint!');
}
// 위에 함수를 간결하게 아래처럼 만들기 가능
// function 삭제, =>(arrow) 추가
const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a + b;

const add = function(a,b){
    return a+b;
};

//IIFE: Immediately Invoked Function Expression
(function hellp(){
    console.log('IIFE');
}) (); // 함수를 선언함과 동시에 호출 하는 방법

// Fun quiz
// (1) function calculate(command, a, b)
// 입력받은 command에 따라서 a와 b의 숫자값을 사칙연산을 할 수 있으면 좋겠다.
// - command: add, substract, divide, multiply, remainder