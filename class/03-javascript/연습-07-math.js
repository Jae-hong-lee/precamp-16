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