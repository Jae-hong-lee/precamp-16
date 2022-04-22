let students = ["맹구", '영희', '도비','그루트','너굴맨']

for (let i = 0; i < students.length; i++) {
    console.log(students[i]+"님 안녕하세요!")
}
// 맹구님 안녕하세요!
// VM2996:2 영희님 안녕하세요!
// VM2996:2 도비님 안녕하세요!
// VM2996:2 그루트님 안녕하세요!
// VM2996:2 너굴맨님 안녕하세요!

let persons = [
    {name: '철수', age:18},
    {name: '영희', age:22},
    {name: '도우너', age:5},
    {name: '말포이', age:14},
    {name: '도비', age:3},
  ]

for (let h = 0; h < persons.length; h++) {
    if (persons[h].age > 18) {
        console.log(persons[h].name + "님은 성인입니다!")
    } else {
        console.log(persons[h].name+ "님은 성인이 아닙니다!")
    }
}
// 철수님은 성인이 아닙니다!
// VM3050:3 영희님은 성인입니다!
// VM3050:5 도우너님은 성인이 아닙니다!
// VM3050:5 말포이님은 성인이 아닙니다!
// VM3050:5 도비님은 성인이 아닙니다!


// Quiz
const fruits = [
    { number: 1, title: "레드향"},
    { number: 2, title: "샤인머스켓"},
    { number: 3, title: "산청딸기"},
    { number: 4, title: "한라봉"},
    { number: 5, title: "사과"},
    { number: 6, title: "애플망고"},
    { number: 7, title: "딸기"},
    { number: 8, title: "천혜향"},
    { number: 9, title: "과일선물세트"},
    { number: 10, title: "귤"},
    ]

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i].number +' ' + fruits[i].title)
}
for (let i = 0; i < fruits.length; i++) {
    console.log( (i+1) +' ' + fruits[i].title)
}
// 1 레드향
// VM3227:2 2 샤인머스켓
// VM3227:2 3 산청딸기
// VM3227:2 4 한라봉
// VM3227:2 5 사과
// VM3227:2 6 애플망고
// VM3227:2 7 딸기
// VM3227:2 8 천혜향
// VM3227:2 9 과일선물세트
// VM3227:2 10 귤


// 인증번호 받기
Math.random()
// 0.8356633531948785
Math.random() * 1000

Math.floor( Math.random() * 1000 )
// 앞이 0 일때 0이 소멸 한채로 나와서 두자리 한자리가 나올 수 있음
String(Math.floor( Math.random() * 100000 ))
// 문자형으로 바꿈
String(Math.floor( Math.random() * 100000 )).padStart(6, "0")
// '020422'
// padStart 함수. 6자리가 안될경우 앞자리부터 0을 추가시켜줌.

// 실무에선 보통 변수를 지정해서 거기에 저장해두고 사용한다.
let token = String(Math.floor( Math.random() * 100000 )).padStart(6, "0");
// undefined
token
// '022464'