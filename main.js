
// declare variables  ================
let outputEl = document.querySelector(".output")
let result = document.querySelector(".result");
let buttons = document.querySelectorAll("button");


// function ==============================
buttons.forEach(key => {
    key.addEventListener("click" , calculate)
});
function calculate (){
    let buttonText = this.innerText;
    if (buttonText === "C"){
        outputEl.innerText = "";
        result.innerText = 0 ;
        return;
    }
    if(buttonText === "DEL"){
        outputEl.textContent = outputEl.textContent.substring(0 , outputEl.textContent.length-1);
        return;
    }
    if (buttonText === "="){
        result.textContent = eval(outputEl.textContent);
        result.style.animation = "big 0.3s ease-in-out ";
        outputEl.style.animation = "small 0.3s ease-in-out ";
        result.style.animationFillMode = "forwards";
        outputEl.style.animationFillMode = "forwards";



    }
    else{
        outputEl.textContent+= buttonText;
        return;
    }
}