var bulb = document.querySelector(".bulb");
var btn = document.querySelector("button");

var f=0;
btn.addEventListener("click",function(){
    if (f==0) {
        bulb.style.background = "yellow";
        f=1;
        btn.innerHTML="ON"
    } else {
        bulb.style.background = "black";
        f=0;
        btn.innerHTML="OFF"

    }

})