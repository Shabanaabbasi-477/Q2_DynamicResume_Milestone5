"use strict";
// -------------Personal Details:
let myName = document.getElementById("myName");
let desig = document.getElementById("desig");
let phone = document.getElementById("phone");
let email = document.getElementById("email");
// -------------Education:
let pass1 = document.getElementById("pass1");
let deg1 = document.getElementById("deg1");
let uni1 = document.getElementById("uni1");
//---------------Expertise:
let skill1 = document.getElementById("skill1");
let skill2 = document.getElementById("skill2");
let skill3 = document.getElementById("skill3");
//---------------Languages:
let lang = document.getElementById("lang");
let lang2 = document.getElementById("lang2");
//---------------Experience:
let styear = document.getElementById("styear");
let endyear = document.getElementById("endyear");
let company = document.getElementById("company");
let jobtitle = document.getElementById("jobtitle");
//---------------Achievements:
let achiev1 = document.getElementById("achiev1");
let achiev2 = document.getElementById("achiev2");
let achiev3 = document.getElementById("achiev3");
let pic = document.getElementById("pic");
//--------------submitBtn
let submitBtn = document.getElementById("submitBtn");
//----------------------------------------------------------
let form = document.getElementById("form");
form?.addEventListener("submit", (e) => {
    e.preventDefault();
    localStorage.setItem("name", myName.value);
    localStorage.setItem("desig", desig.value);
    localStorage.setItem("phone", phone.value);
    localStorage.setItem("email", email.value);
    //-------------------------------------------------------
    localStorage.setItem("pass1", pass1.value);
    localStorage.setItem("deg1", deg1.value);
    localStorage.setItem("uni1", uni1.value);
    //  ------------------------------------------------------
    localStorage.setItem("skill1", skill1.value);
    localStorage.setItem("skill2", skill2.value);
    localStorage.setItem("skill3", skill3.value);
    //  ------------------------------------------------------
    localStorage.setItem("lang", lang.value);
    localStorage.setItem("lang2", lang2.value);
    //  ------------------------------------------------------
    localStorage.setItem("styear", styear.value);
    localStorage.setItem("endyear", endyear.value);
    localStorage.setItem("company", company.value);
    localStorage.setItem("jobtitle", jobtitle.value);
    //  ------------------------------------------------------
    localStorage.setItem("achiev1", achiev1.value);
    localStorage.setItem("achiev2", achiev2.value);
    localStorage.setItem("achiev3", achiev3.value);
    if (pic.files && pic.files[0]) {
        let reader = new FileReader();
        reader.addEventListener("load", () => {
            let textImg = reader.result;
            localStorage.setItem("profile_pic", textImg);
        });
        reader.readAsDataURL(pic.files[0]);
    }
    window.location.href = "./resume/resume.html";
});
