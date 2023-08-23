function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeCross = document.querySelectorAll('.close')

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));


// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


//Fermeture de la page avec la croix
closeCross.forEach((cross) => cross.addEventListener("click", closeModal));

function closeModal() {
  modalbg.style.display = "none";
}


// Validation du formulaire avec message sous chaques champs en cas d'erreurs

  

  function validateForm() {
      const firstName = document.getElementById("first")
      const lastName = document.getElementById("last")
      const email = document.getElementById("email")
      const birthday = document.getElementById("birthdate")
      const quantity = document.getElementById("quantity")
      const cityLocation = document.querySelectorAll('.radio input')
      const checkbox1 = document.getElementById("checkbox1")
      const regex = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/
      const emailReg = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/i);


    // Validation du prénom

    function firstNameValidator() {
    
      if(firstName.trim()==="" || !firstName.value.match(regex) || firstName.length < 2){
        firstName.style.border = '1px solid #c80014'
        document.getElementById("firstError").textContent = "non rempli"
        return false
      }else{
        document.getElementById("firstError").textContent = ""
        return true
      }
    }

    // Validation du nom de famille 

    function lastNameValidator() {

      if(lastName.trim()==="" || !lastName.value.match(regex) || lastName.length < 2){
        firstName.style.border = '1px solid #c80014'
        document.getElementById("lastError").textContent = "non rempli"
        return false
      }else{
        document.getElementById("lastError").textContent = ""
        return true
      }
    }

    // Validation de l'email

    function emailValidator() {
      if(email.trim()==="" || !email.value.match(emailReg) ) {
        firstName.style.border = '1px solid #c80014'
        document.getElementById("lastError").textContent = "non rempli"
      }else {
        document.getElementById("lastError").textContent = ""
        return true
      }
    }


    // Validation de la date de naissance

    function birthValidator() {
      if(birthday.trim ==="" || birthday.length != 10) {
        firstName.style.border = '1px solid #c80014'
        document.getElementById("lastError").textContent = "non rempli"
      }else {
        document.getElementById("lastError").textContent = ""
        return true
      }
    }

    
    // validation de la quantité de participation

    function quantityValidator() {
      if(quantity.trim ==="" || quantity.length < 1) {
        firstName.style.border = '1px solid #c80014'
        document.getElementById("lastError").textContent = "non rempli"
      }else {
        document.getElementById("lastError").textContent = ""
        return true
      }
    }

  }