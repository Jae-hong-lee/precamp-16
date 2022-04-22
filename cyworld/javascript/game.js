// 끝말잇기
function startWord() {
    const word = document.getElementById("word").innerText;
    let myword = document.getElementById("myword").value ;
    
    const lastword = word[word.length - 1];
    const firstword = myword[0]
    
    if (lastword === firstword) {
        document.getElementById("result").innerText = "정답입니다!"
        document.getElementById("word").innerText = myword
        // 인풋초기화
        document.getElementById("myword").value = ""
    } else{
        document.getElementById("result").innerText = "떙!"
        document.getElementById("myword").value = ""
    }
}