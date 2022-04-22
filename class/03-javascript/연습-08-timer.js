setTimeout(function() {
    console.log('3초가 지났습니다.')
},3000)
// 3초 후 console.log 출력
setInterval(function() {
    console.log('1초!')
},1000)
// 1초 마다 console.log 출력

// 10초 지나면 멈추는 타이머 만들기.
let time = 10
setInterval(function(){
    if (time >=0) {
        console.log(time)
        time--   
    }
},1000)

// 3분 시간초 타이머 만들기. 분초 단위로 나누어서 1초마다 출력
let time = 180
setInterval(function() {
    if (time>=0) {
        const min = String(Math.floor(time/60)).padStart(2,'0')
        const sec = String(time%60).padStart(2,'0')
        console.log(`${min}:${sec}`)
        time--
    }
},1000)