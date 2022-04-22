
function hi(name){
    return name + "님 안녕하세여"
}
// undefined
hi('ㅇㅇㅇㅇㅇㅇ')
// 'ㅇㅇㅇㅇㅇㅇ님 안녕하세여'
let students = ["맹구", '영희', '도비','그루트','너굴맨']
// undefined
function greetingFreinds(arr) {
    for (let i = 0; i < arr.length;i++){
        console.log( `${arr[i]} + 님 안녕하세요!`)
    }
}
// undefined
greetingFreinds(students)
// VM1287:3 맹구 + 님 안녕하세요!
// VM1287:3 영희 + 님 안녕하세요!
// VM1287:3 도비 + 님 안녕하세요!
// VM1287:3 그루트 + 님 안녕하세요!
// VM1287:3 너굴맨 + 님 안녕하세요!
// undefined
function greetingFreinds(arr) {
    for (let i = 0; i < arr.length;i++){
        console.log( `${arr[i]}님 안녕하세요!`)
    }
}
// undefined
greetingFreinds(students)
// VM1342:3 맹구님 안녕하세요!
// VM1342:3 영희님 안녕하세요!
// VM1342:3 도비님 안녕하세요!
// VM1342:3 그루트님 안녕하세요!
// VM1342:3 너굴맨님 안녕하세요!
// undefined