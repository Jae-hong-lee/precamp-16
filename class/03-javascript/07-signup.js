// 인풋창 변화가 생겼을때 버튼 활성화 시키기.
const checkValidation = () => {
    console.log('함수 작동됨')
    // 이메일의 값을 가져와 변수에 할당
    const email = document.getElementById('email').value
    // 비밀번호 값 변수 할당
    const pw1 = document.getElementById('pw1').value
    // 비밀번호 확인 값 변수 할당
    const pw2 = document.getElementById('pw2').value

    // 3개의 변수에 담긴 값이 모두 비어있지 않을때 버튼 활성화.
    // setAttribute : 속성을 세팅해준다.
    if (email  && pw1  && pw2 ) {
// 조건문에는 boolen으로 들어감.
        document.getElementById('sign').disabled = false
        document.getElementById('sign').setAttribute('style','background-color: yellow')
    }   
    // 하나라도 비어있다면 버튼 비활성화
    else{
        document.getElementById('sign').disabled = true
        document.getElementById('sign').setAttribute('style','background-color: none')
    }
}