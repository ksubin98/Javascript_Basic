'use strict'

// Q1. make a string out of an array
const fruits = ['apple', 'banana', 'orange'];
for(let fruit of fruits ){
    console.log(fruit);
}   

// Q2. make an array out of a string
// ? const fruits1 = '๐','๐ฅ','๐','๐';

// Q3. make this array look like this ; [5,4,3,2,1]
const array = [1,2,3,4,5];
console.log(array);
const result = array.reverse(); // reverse - ๋ฐฐ์ด ๊ฑฐ๊พธ๋ก ๋ฐ๊ฟ์ฃผ๋
console.log(result);

// Q4. make new array without the first two elements
const array2 = [1,2,3,4,5];
array2.splice(0,2);
console.log(array2);

// Q5. fine a student with the score 90

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

const result1 = student.filter((student) => student.score == 90);
console.log(result1);

// Q6. make an array of enrolled students
const result2 = student.filter((student) => student.enrolled);
console.log(result2);

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
const result4 = student.map((student) => student.score);
console.log(result4);
//map - ๋ฐฐ์ด ๋ด์ ๋ชจ๋  ์์ ๊ฐ๊ฐ์ ๋ํ์ฌ ์ฃผ์ด์ง ํจ์๋ฅผ ํธ์ถํ ๊ฒฐ๊ณผ๋ฅผ ๋ชจ์ ์๋ก ๋ฐํ

// Q8. check if there is a student with the score lower than 50
const result3 = student.some((student) => student.score < 50);
console.log(result3);
// some - ๋ฐฐ์ด ์์ ์ค ํด๋น์กฐ๊ฑด์ด ํ๋๋ผ๋ ์์ผ๋ฉด true ๋ฐํ
// every - ๋ฐฐ์ด์ ํด๋น์กฐ๊ฑด์ ๋ชจ๋ ํด๋นํ๋ฉด true๋ฅผ ๋ฐํ

// Q9. compute students' average score
const reducer = (accumulator, currentValue) => accumulator + currentValue;
const sum = student.reduce(function(acc,cur){
    return acc + cur.score;
},0);
const average = sum / 5;
console.log(average);

// Q10. make a string containing all the scores
// result should be : '45, 80, 90, 66, 88'


// Q11. do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'