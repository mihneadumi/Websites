
const pass1 = document.querySelector("#pass");
const pass2 = document.querySelector("#pass-confirm");
const passText = document.querySelector("#pass-match");

function checkPass() {
    if(pass1.value === pass2.value){
        pass1.className = "input";
        pass2.className = "input";
        passText.className = "hide";
    }
    else{
        pass1.className = "input error";
        pass2.className = "input error";
        passText.className = "wrong-pass";
    }
}

pass1.addEventListener("input", checkPass);
pass2.addEventListener("input", checkPass);