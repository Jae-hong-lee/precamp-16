1+'1'
// '11'
1+1
// 2
'안녕' + '하세요'
// '안녕하세요'
'123' === 123
// false
'123' == 123
// true
!false
// true
!true
// false


// -------조건문 연습-------------
if (1+1 === 2) {
    console.log("정답입니다")
} else {
    console.log("틀렸습니다")
}
// VM963:2 정답입니다
// undefined
if (1+1 === 3) {
    console.log("정답입니다")
} else {
    console.log("틀렸습니다")
}
// VM973:4 틀렸습니다
// undefined
if(true) {
    console.log("정답입니다")
} else {
    console.log("틀렸습니다")
}
// VM1048:2 정답입니다
// undefined
if(false) {
    console.log("정답입니다")
} else {
    console.log("틀렸습니다")
}
// VM1077:4 틀렸습니다
// undefined
const password1 = "123"
// undefined
const password2 = "333"
undefined
if(password1 === password2) {
    alert("비밀번호 일치!")
} else {
    alert("일치하지 않음!")
}
// undefined





// 철수나이 뽑기------------------------
const profile = {
    name : "철수",
    age : 12,
    school : "다람쥐초등학교"
}
// 1
if (profile.age >= 20) {
    console.log("성인입니다.")
} else if( 8<= profile.age < 20) {
    console.log("학생입니다")
} else{
    "어린이입니다."
}
// 학생입니다

// *수정! - 에러 핸들링이라고 한다 음수는 나이가 아니기 떄문!
if (profile.age >= 20) {
    console.log("성인입니다.")
} else if(profile.age >= 8) {
    console.log("학생입니다")
} else if(profile.age >=0){
    "어린이입니다."
} else{
    console.log("잘못된 입력입니다")
}
// VM2199:4 학생입니다.











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