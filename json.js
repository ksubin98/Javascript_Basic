//JSON
// 함수의 이름은 동일하지만 어떤 파라미터를 전달하내, 몇개의 파라미터를 전달하느냐에 따라
// 각각의 다른 호출이 가능한 것 -> 오버로딩!

// 1. Object -> JSON
// - stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']); // - 배열처럼 표기
console.log(json); // json의 규격상태로 출력이 된다.

const tiger = {
    name: 'ti',
    color = 'white',
    size = null,
    birthDate: new Date(),
    Symbol: Symbol("id"), // 자바스크립트 만의 특별한 데이터도 json에 포함 X
    run: () => { // json에 포함 X -  함수는 obj에 포함되는 데이터가 아니므로
        console.log(`${this.name} can run!`);
    },
};

json = JSON.stringify(tiger);
console.log(json);

json = JSON.stringify(tiger, ["name"]); // 원하는 proper만 넣으면 그것만 출력
console.log(json);

//콜백함수를 통해 세밀하게 통제 가능
//최상의 오브젝트가 가장 먼저 전달
json = JSON.stringify(tiger, (key, value) => { //모든 키와 함수들이 콜백함수로 전달.
});
console.log(json);

// 2. JSON -> Object
// - parse(json) -> string을 obj로 변환하고자 할때는 reviver함수 사용
console.clear();

const obj = JSON.parse(json);
console.log(obj);
tiger.run();
// 다시 만든 오브젝트에서는 함수에 대한 API가 생성 X
