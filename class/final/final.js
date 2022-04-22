// Focus
const changeFocus1 = () => {
    const p1 = document.getElementById("p1").value
    if (p1.length === 3) {
        document.getElementById("p2").focus()
    }
}
const changeFocus2 = () => {
    const p2 = document.getElementById("p2").value
    if (p2.length === 4) {
        document.getElementById("p3").focus()
    }
}

// Timer
let isStarted = false
const pressedBtn = () => {
    if (isStarted === false) {
        isStarted = true;
        const token = String(Math.floor( Math.random() *1000000 )).padStart(6,"0");
        document.getElementById('token').innerText = token;
        document.getElementById('token').style.color = '#0068FF';
        // document.getElementById('sign').setAttribute('style','background-color: #0068FF')
        let time = 180;
        let timer = null;
        timer = setInterval(function() {
            if (time>=0) {
                const min = String(Math.floor(time/60)).padStart(2,'0')
                const sec = String(time%60).padStart(2,'0')
                document.getElementById("time").innerText = `${min}:${sec}`
                time--
            } else{
        
                document.getElementById('finish').disabled = true
                isStarted = false
                console.log('타이머 동작중')
                clearInterval(timer)
            }
        }, 1000)


    } else{
        console.log('타이머가 이미 동작중입니다.')
    }
}
