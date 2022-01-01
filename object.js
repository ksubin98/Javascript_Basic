'use strict';

// 1. Objects - 자바스크립틔 데이터 타입 중 하나 
// object는 key와 value의 집합체 -> object = {key: value};
const name = 'subin';
const age = 4; // 값을 하나만 할당할 수 있다.
print(name, age);
function print(name, age){
    console.log(name);
} // 인자가 많아질수록 추가해야하는 것들이 많아진다. - 문제점 (관리하기 힘듬)

// 개선하고자 object 사용
const subin = {name : 'subin', age : 4};
function print(person){
    console.log(person.name);
    console.log(person.age);
}
print(subin); // 간편해진다

// object 생성
const obj1 = {}; // 'object literal' syntax - 괄호를 사용하여 생성
const obj2 = new Object(); // 'object construtor' syntax - 클래스를 이용하여 템플릿형태로 (new 키워드 사용)

// 자바스크립트는 후에 properties를 추가할 수 있다.
subin.hasJob = true;
console.log(subin.hasJob);
// 자바스크립트는 삭제도 가능하다.
delete subin.hasJob;
console.log(subin.hasJob);

// 2. Computed properties (계산된 properties)
// 꼭 string 타입으로 지정해서 받아와야 한다.
console.log(subin.name); // 아래와 같은 결과값을 출력
console.log(subin['name']); // subin이라는 데이터 안에 string 타입의 name 접근 가능
subin['hasJob'] = true;
console.log(subin.hasJob);
// '.' <- 그 key에 해당하는 값을 받아오고 싶을 때 사용 (이것을 사용하는 것이 맞다)
// ['abc'] <- 우리가 정확하게 어떤 key가 필요한지 모를때 사용, runtime에서 결정될 때 사용 (실시간?)

// 3. Property value shorthand
const person1 = {name: 'bob', age: 2};
const person2 = {name: 'steve', age: 3};
const person3 = {name: 'dave', age: 4};
const person4 = makePerson('subin', 25); // 함수를 이용해서 값을 전달
console.log(person4);

function makePerson(name, age){ // 함수를 이용해서 오브젝트를 생성하는 함수를 만들 수 있다
    return{
        name, // name : name 일 경우, 같은 단어이므로 삭제해도 무방
        age,
    };
}

// 위와 동일한 결과를 가져오는 함수 코드
// 4. Constructor function
const person4 = new Person('subin', 25); //js가 알아서 오브젝트를 생성해줌.
function Person(name, age){
    //this = {};
    this.name = name;
    this.age = age;
}

// 5. in operator : 해당하는 오브젝트 안에 key가 있는지 없는지 확인하는 것
console.log('name' in ellie); // 'in' 을 사용 -> 결과값: true

// 6. for..in vs for..of
// for(key in obj)
console.clear(); // log history delete
for (key in subin){// subin이 가지고 있는 key들이 key라는 지역변수에 할당이 된다.
    console.log(key);
// 모든 key들을 받아와서 출력하고자할 때 사용하면 유용하다.
}

// for(value of iterable)
// 오브젝트 사용 x , 배열과 같은 배열리스트들을 사용
const array = [1,2,4,5];
for(value of array){
    console.log(value);
}

// 7. Fun cloning
const user = {name: 'subin', age: '20'}; 
const user2 = user;
user2.name = 'coder';
console.log(user); // user2의 name은 subin에서 coder로 바뀜

// 오브젝트를 복제할 수 있는 방법
// old way
const user3 = {};
for(key in user){
    user3[key] = user[key];
} // 메뉴얼적으로, 수동적으로 할당해주는 방법
console.log(user3);

// Object.assign(dest, [obj1, obj2, obj3...])
const user4 = {}; // (빈) T(타겟) 생성
Object.assign(user4, user); // 오른쪽 - 우리가 복사하고자 하는 것을 전달
console.log(user4);

// 위의 코드와 동일한 결과값을 출력
const user4 = Object.assign({}, user);
console.log(user4);

