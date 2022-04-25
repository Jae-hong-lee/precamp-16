// menuHome
function menuHome() {
    document.getElementById("contentFrame").setAttribute('src','home.html')
    document.getElementById("menuHome").style ="color: black; background-color: white;"
    document.getElementById("menuGame").style ="color: white; background-color: #298BE5;"
    document.getElementById("menuJukebox").style ="color: white; background-color: #298BE5;"
}
// menuGame
function menuGame() {
    document.getElementById("contentFrame").setAttribute('src','game.html')
    document.getElementById("menuGame").style = "color: black; background-color: white;"
    document.getElementById("menuHome").style = "color: white; background-color: #298BE5;"
    document.getElementById("menuJukebox").style = "color: white; background-color: #298BE5;"
}
// menuJukebox
function menuJukebox() {
    document.getElementById("contentFrame").setAttribute('src','jukebox.html')
    document.getElementById("menuJukebox").style = "color: black; background-color: white;"
    document.getElementById("menuGame").style = "color: white; background-color: #298BE5;"
    document.getElementById("menuHome").style = "color: white; background-color: #298BE5;"
}
