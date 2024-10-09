window.onload = pageLoad;
function pageLoad(){
	var regisForm = document.getElementById("myRegister");

    // Dummy Value
    regisForm.firstname.value = "Theeridth";
    regisForm.lastname.value = "Yodkure";
    regisForm.gender.value = "male";
    regisForm.bday.value = "2003-07-01";
    regisForm.email.value = "peemmegachan@gmail.com";
    regisForm.username.value = "Peemmega";
    regisForm.password.value = "123456";
    regisForm.re_password.value = "123456";
    
    regisForm.onsubmit = validateForm;
}

function warningText(text){
    var errormsg = document.getElementById("errormsg");
    errormsg.innerHTML = text;
    return false;
}

function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    var regisForm = document.forms["myRegister"];

    if (!regisForm.firstname.value){
        return warningText("Invalid firstname value");
    } else if (!regisForm.lastname.value){
        return warningText("Invalid lastname value");
    } else if (!regisForm.gender.value){
        return warningText("Invalid gender value");
    } else if (!regisForm.bday.value){
        return warningText("Invalid bday value");
    } else if (!regisForm.email.value){
        return warningText("Invalid email value");
    } else if (!regisForm.username.value){
        return warningText("Invalid username value");
    } else if (!regisForm.password.value){
        return warningText("Invalid password value");
    } else if ((!regisForm.re_password.value)){
        return warningText("Invalid re_password value");
    } else if (regisForm.password.value != regisForm.re_password.value){
        return warningText("รหัสไม่ตรงกัน");
    }
    console.log(regisForm);
    alert("Register success");
}