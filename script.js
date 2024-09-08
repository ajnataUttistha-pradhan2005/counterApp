const countdisplay = document.getElementById("countdisplay");
const decreasebtn = document.getElementById("decreasebtn");
const resetbtn = document.getElementById("resetbtn");
const increasebtn = document.getElementById("increasebtn");
let count = 0;

decreasebtn.onclick = function(){
    count--;
    countdisplay.textContent = count;
}
resetbtn.onclick = function(){
    count = 0;
    countdisplay.textContent = count;
}
increasebtn.onclick = function(){
    count++;
    countdisplay.textContent = count;
}

