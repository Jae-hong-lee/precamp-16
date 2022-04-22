const pressedBtn = () => {
    const token = String(Math.floor( Math.random() *1000000 )).padStart(6,"0");
    document.getElementById('token').innerText = token;
    // 인증번호 생성 시마다글자 색상이 바뀌도록 해
    document.getElementById('token').style.color = "#"+token;
}