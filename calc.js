let buttons = document.querySelectorAll("button");

let computable = document.querySelector("#inputDiv");

computable.textContent = "";

buttons.forEach(function(button){
    
    button.addEventListener("click", function(){
        
        if (button.className !== "result" && button.className !== "clear"){
            computable.textContent += button.innerText;
        }
        else if (button.className === "result"){
            computable.textContent = eval(computable.textContent);
        }
        else{
            computable.textContent = ""
        }
        
    })
})