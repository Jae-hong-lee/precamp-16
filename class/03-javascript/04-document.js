function changeGreeting() {
    document.getElementById("greeting").innerText = '반갑습니다.'
}

function readValue() {
    let inputValue = document.getElementById("inputData").value ;
    document.getElementById("greeting").innerText = inputValue
    document.getElementById("inputData").value = ""

}