

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeCross = document.querySelectorAll('.close')
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthday = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const cityLocation = document.querySelectorAll(".radio input");
const checkbox1 = document.getElementById("checkbox1");
const regex = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/;
const emailReg = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/i
    );

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

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

   // Validation du formulaire au moment de la soumission
   const buttonForm = document.querySelector(".btn-submit")

   buttonForm.addEventListener("click", function (e) {
    e.preventDefault();
    formulaireValidator()  
   });

    // Validation du prénom
  function firstNameValidator() {
    if (
      firstName.value.trim() === "" ||
      !firstName.value.match(regex) ||
      firstName.value.length < 2
    ) {
      document.getElementById("firstError").textContent =
        "Veuillez entrer un prénom valide.";
        document.getElementById("firstError").style.color = "red";
      return false;
    } else {
      document.getElementById("firstError").textContent = "";
      return true;
    }
  }

  // Validation du nom de famille
  function lastNameValidator() {
    if (
      lastName.value.trim() === "" ||
      !lastName.value.match(regex) ||
      lastName.value.length < 2
    ) {
      document.getElementById("lastError").textContent =
        "Veuillez entrer un nom de famille valide.";
        document.getElementById("lastError").style.color = "red";
      return false;
    } else {
      document.getElementById("lastError").textContent = "";
      return true;
    }
  }

  // Validation de l'email
  function emailValidator() {
    if (email.value.trim() === "" || !email.value.match(emailReg)) {
      document.getElementById("emailError").textContent =
        "Veuillez entrer une adresse e-mail valide.";
        document.getElementById("emailError").style.color = "red";
      return false;
    } else {
      document.getElementById("emailError").textContent = "";
      return true;
    }
  }

  // Validation de la date de naissance
  function birthValidator() {
    if (birthday.value.trim() === "" || birthday.value.length !== 10) {
      document.getElementById("birthdateError").textContent =
        "Veuillez entrer une date de naissance valide (format YYYY-MM-DD).";
        document.getElementById("birthdateError").style.color = "red";
      return false;
    } else {
      document.getElementById("birthdateError").textContent = "";
      return true;
    }
  }

  // Validation de la quantité de participation
  function quantityValidator() {
    if (quantity.value.trim() === "" || quantity.value < 1) {
      document.getElementById("quantityError").textContent =
        "Veuillez entrer une quantité valide.";
        document.getElementById("quantityError").style.color = "red";
      return false;
    } else {
      document.getElementById("quantityError").textContent = "";
      return true;
    }
  }

  function formulaireValidator() {

    firstNameValidator() 
    lastNameValidator() 
    emailValidator() 
    birthValidator() 
    quantityValidator()
  
}



// Si formulaire valide, alors afficher le bloc de confirmation


function formulaireValidator() {
  const isFirstNameValid = firstNameValidator();
  const isLastNameValid = lastNameValidator();
  const isEmailValid = emailValidator();
  const isBirthValid = birthValidator();
  const isQuantityValid = quantityValidator();

  if (isFirstNameValid && isLastNameValid && isEmailValid && isBirthValid && isQuantityValid) {
    modalConfirmation();
  }
}



    // Message de confirmation suite à un formulaire bien rempli

let newElement = document.createElement("div")
let parentOfNewElement = document.querySelector(".bground")
parentOfNewElement.appendChild(newElement)
newElement = "modalBgr"

let spanPhrase = document.createElement("span")
newElement.appendChild(spanPhrase)

function modalConfirmation () {
  newElement.style.display = "block"
  spanPhrase.innerHTML ="Merci pour votre inscription"
}




