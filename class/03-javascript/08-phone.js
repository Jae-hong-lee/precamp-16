// p1 에서 p2,p2 에서 p3로 이동하는 함수
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
