let isStarted = false



const pressedBtn = () => {
    // 수도코드
    // isStarted가 false 일 경우(타이머가 작동 중이 아닐 경우) => 코드실행
        // 실행될 때 isStarted를 true로 재할당
        // 타이머가 종료되면 isStarted를 false로 재할당
    // isStarted가 true 일 경우(타이머가 작동 중일 경우) => 코드 실행 X

    if (isStarted === false) {
        isStarted = true;


        const token = String(Math.floor( Math.random() *1000000 )).padStart(6,"0");
        document.getElementById('token').innerText = token;
        // 인증번호 생성 시마다글자 색상이 바뀌도록 해
        document.getElementById('token').style.color = "#"+token;
    
        let time = 3;
        let timer = null;
// 타이머라는 변수를 null로 지정하고 setInterval 이라는 함수를 재할당.
        timer = setInterval(function() {
            if (time>=0) {
                const min = String(Math.floor(time/60)).padStart(2,'0')
                const sec = String(time%60).padStart(2,'0')
                document.getElementById("time").innerText = `${min}:${sec}`
                time--
            } else{
                // 타이머가 종료되면 isStarted를 false로 재할당
                document.getElementById('finish').disabled = true
                isStarted = false
                console.log('타이머 동작중')
                clearInterval(timer)
                // timber에 null값을 다시 주면서 종료.
            }
        }, 1000)


    } else{
        console.log('타이머가 이미 동작중입니다.')
    }
}
// 시간 충돌 해결하는 법🤔
// 타이머의 상태 변수가 true false 인지 판정.
// false - 타이머 작동 x > 타이머 시작
// true - 타이머 작동 중  > 코드 실행 X