'use strict';
// class : template, declare once, no data in (정의만 한 것)
// -> '틀' (template)만 정리해놓음
// Object : instance of a class, created many times, data in
// -> 메모리에도 올라가게 됨.

// Javascript classes
// - ES6에서 추가됨.
// - prototpye을 베이스로 구현됨.

// 1. Class 선언
class Person{
    // construcotr (생성자) 
    constructor(name, age){ //{- object를 전달받을 때 필요한 데이터를 전달 받음
        //fields
        this.name = name; // 할당
        this.age = age;
    }

    // methods
    speak(){
        console.log('${this.name}: Hello!');
    }
}

const subin = new Person('subin', 25) // 새로운 object 생성 시, new 사용
console.log(subin.name);
console.log(subin.age);
subin.speak();

// 2. Getter and setters
class User{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age; //  this.age - getter 호출 , age - 바로 메모리 할당이 아니라 setter 호출
    }

    get age(){ // 값을 리턴
        return this._age; // age를 호출하면 this.age를 리턴해야함.
    }

    set age(value){ // 값을 설정 - value를 받아와야함
        if (value < 0){
            throw Error('age can not be negative'); // 경고
        }
        this._age = value; // 새로운 값 설정
        // == this._age = value < 0 ? 0 : value;
    } // 콜스택이 꽉차는 것을 방지하기 위해 이름을 조금 다르게 설정
}

const user1 = new User('Steve', 'Job', -1); // -1로 설정해도
console.log(user1.age);//방어적으로 잡아주는 것들이 getter 와 setter

// 3. Fields (public, private)
// 정말 최근에 추가
// 최신 브라우저 사용 불가
class Experiment{
    publicField = 2;
    #privateFild = 0; // class 외부에서는 읽기, 변경 등 불가
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privatedField);

// 4. Inheritancd - 상속
// a way for one class to extend another class.
// 공통작성된 것들을 동일하게 사용할 수 있다.
class Shape{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log('drawing'+ this.color + 'color of'); // 오류다시 찾아보기
    }

    getArea(){
        return width * this.height;
    }
}

class Rectangle extends Shape{ //extends를 활용하여 shape 클래스 포함

}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();

// 5. Class checking: instanceOf
console.log(rectangle instanceof Rectangle); //true
//          왼쪽에 있는 오브젝트가 오른쪽에 있는 클래스의 인스텐스 인지 아닌지 확인하는 것
//          true 와 false로 값 출력