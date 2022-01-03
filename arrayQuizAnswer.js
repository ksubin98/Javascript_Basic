'use strict'

// Q1. make a string out of an array 
{
const fruits = ['apple', 'banana', 'orange'];
for(let fruit of fruits ){
    console.log(fruit);
}   

const result0 = fruits.join(); // join - 배열을 string으로 변환 
console.log(result0);
}


// Q2. make an array out of a string
{
const fruits1 = '🍎, 🥝, 🍌, 🍒';
const r1 = fruits1.split(',');
console.log(r1);
// split - string을 배열로 변환, 꼭 구분자를 전달해줘야 한다.
}


// Q3. make this array look like this ; [5,4,3,2,1]
{
const array = [1,2,3,4,5];
console.log(array);
const result = array.reverse(); // reverse - 배열자체를 거꾸로 바꿔줌
console.log(result);
}

// Q4. make new array without the first two elements
{
const array2 = [1,2,3,4,5];
//array2.splice(0,2);  splice는 새로운 배열을 생성하지 않기 때문에  - 배열자체를 수정
                    // 이 문제에서는 사용 불가
console.log(array2);

//Answer
const result1 = array2.slice(2,5); // slice - 새로운 배열 생성 후 해당조건의 요소만 출력
console.log(result1);               // 원하는 부분만 return에서 받아와서 쓰고싶을 때
}


class Student{
    constructor(name, age, enrolled, score){
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const student = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

// Q5. fine a student with the score 90
{
const result1 = student.filter((student) => student.score == 90);
console.log(result1);

//Answer
const result = student.find(function(student, index){ // find는 콜백함수를 만들어서 전달해야함
    return student.score == 90; // 배열에 있는 요소들을 하나씩 모두 호출하고 찾는다.
});

// 위의 코드와 동일한 출력
const result2 = student.find((student) => student.score == 90);
console.log(result2);
}

// Q6. make an array of enrolled students
{
const result2 = student.filter((student) => student.enrolled == true);
console.log(result2); // filter - 우리가 원하는 요소만 뽑아올 수 있다.
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
const result4 = student.map((student) => student.score);
console.log(result4);
//map - 배열 내의 모든 요소 각각에 대하여 주어진 콜백함수를 호출한 결과를 모아 새로운 배열로 반환
//콜백함수에서는 의미없는 이름으로 X 
}

// Q8. check if there is a student with the score lower than 50
{
console.clear();
const result3 = student.some((student) => student.score < 50);
console.log(result3);
// some - 배열 요소 중 콜백함수가 하나라도 만족한다면 true 반환
// every - 콜백함수 모두 충족하면 true를 반환
}

// Q9. compute students' average score
{
const reducer = (accumulator, currentValue) => accumulator + currentValue;
const sum = student.reduce(function(acc,cur){
    return acc + cur.score;
},0);
const average = sum / 5;
console.log(average); 

//Answer
    const result = student.reduce((prev, curr) =>{ // reduce - 모든배열을 돌면서 어떤 값을 누적할 때 씀.
        console.log('----------');
        console.log(prev); 
        console.log(curr); // 배열의 item값들을 순차적으로 전달 받는다.
        return (prev + curr.score); // 리턴값이 순차적으로 prev로 전달
    },0);
    console.log(result / student.length); 

}

// Q10. make a string containing all the scores
// result should be : '45, 80, 90, 66, 88'
{
//Answer
    const result = student.map((student) => student.score).join();
    console.log(result);
}


// Q11. do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
//Answer
    const result = student.map((student) => student.score).sort((a,b)=> a-b).join();
    console.log(result);
}