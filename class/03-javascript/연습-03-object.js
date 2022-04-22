let friend = {
    name : '철수',
    age : 13,
    camp : "코드캠프"
}
// undefined
friend
// {name: '철수', age: 13, camp: '코드캠프'}
friend.name
// '철수'
friend.age
// 13
friend.camp
// '코드캠프'
friend.school
// undefined

// ---------------------------------


// ex02 배열에 객체를 만들고 객체안에 값 하나하나 뽑아보기.
const classmates = [
    {name:'철수', age:13, school: "다람쥐초등학교"},
    {name:'영희', age:8, school: "공룡초등학교"},
    {name:'훈이', age:11, school: "거북이초등학교"}
]
// undefined
classmates
// (3) [{…}, {…}, {…}]0: {name: '철수', age: 13, school: '다람쥐초등학교'}1: {name: '영희', age: 8, school: '공룡초등학교'}2: {name: '훈이', age: 11, school: '거북이초등학교'}length: 3[[Prototype]]: Array(0)
classmates[0]
// {name: '철수', age: 13, school: '다람쥐초등학교'}
classmates[1].school
// '공룡초등학교'

// 번호 , 공백, 타이틀. 1~10줄.







