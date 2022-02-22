function checkPasswords() {
    let pass = document.getElementById('user_password');
    let cpass = document.getElementById('confirm_password');
    const pmatch = document.getElementById('passmatch');
   
    if(pass.value === cpass.value) {
        pass.classList.remove("invalid");
        pmatch.classList.add("hidden");
        cpass.classList.remove("invalid");
        return true;
        }
    else {
        pass.classList.add("invalid");
        pmatch.classList.remove("hidden");
        cpass.classList.add("invalid")
        return false;
    }

}