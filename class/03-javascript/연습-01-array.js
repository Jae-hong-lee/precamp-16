let classmate = ["이희진","이재홍","박기호"];
// undefined
classmate
// (3) ['이희진', '이재홍', '박기호']
classmate[0]
// '이희진'
classmate[1]
// '이재홍'
classmate[2]
// '박기호'
classmate.includes("리리리")
// false
classmate.includes("이재홍")
// true
classmate.push("리리리")
// 4
classmate.includes("리리리")
// true
classmate
// (4) ['이희진', '이재홍', '박기호', '리리리']
classmate.includes("리리리")
// true
classmate.pop()
// '리리리'
classmate
// (3) ['이희진', '이재홍', '박기호']
classmate.length
// 3

// 이런식으로 컴퓨터가 뽑아주는 값들은 주석처리(짝수번째) 기록.


// 02 ex
let developer = ["끈기","열정","노력","인내심","구글"];
// (5) ['끈기', '열정', '노력', '인내심', '구글']
developer[4]
// '구글'
let dream = ['커리어점프', '성공', '할수있다'];
// undefined
developer.concat(dream);
// (8) ['끈기', '열정', '노력', '인내심', '구글', '커리어점프', '성공', '할수있다']

