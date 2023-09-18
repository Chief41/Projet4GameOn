

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelector(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeCross = document.querySelectorAll('.close')
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthday = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const cityLocation = document.querySelectorAll(".radio input");
const checkbox1 = document.getElementById("checkbox1");
const checkbox2 = document.getElementById("checkbox2")
const formular = document.getElementById("formular")
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
modalBtn.addEventListener("click", launchModal);


// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


//Fermeture de la page avec la croix
closeCross.forEach((cross) => cross.addEventListener("click", closeModal));

function closeModal() {
  modalbg.style.display = "none";
}


//const btnInscription = document.querySelector(".btn-signup")

modalBtn.addEventListener("click", launchMedia);

function launchMedia() {
  modalbg.style.display = "block";
}







// Validation du formulaire avec message sous chaques champs en cas d'erreurs

   // Validation du formulaire au moment de la soumission
   const buttonForm = document.querySelector(".hero-section > .btn-signup")

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
        document.getElementById("first").style.borderColor = "red"
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
        document.getElementById("last").style.borderColor = "red"
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
        document.getElementById("email").style.borderColor = "red"
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
        document.getElementById("birthdate").style.borderColor = "red"
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
        document.getElementById("quantity").style.borderColor = "red"
      return false;
    } else {
      document.getElementById("quantityError").textContent = "";
      return true;
    }
  }

  // Validation de la ville
function cityValidator() {
  const cityInputs = document.querySelectorAll('input[name="location"]');
  let isValid = false; // Initialisation à false

  for (let i = 0; i < cityInputs.length; i++) {
    if (cityInputs[i].checked) {
      isValid = true; // Si une ville est cochée, isValid devient true
      break;
    }
  }

  if (!isValid) {
    document.getElementById("locationError").textContent =
      "Veuillez sélectionner une ville.";
    document.getElementById("locationError").style.color = "red";
  } else {
    document.getElementById("locationError").textContent = "";
  }

  return isValid; // Renvoie la valeur isValid
}


// Acceptation check
function checkForm() {
  const isValid = checkbox1.checked; // Initialise isValid avec la valeur de checkbox1.checked

  if (!isValid) {
    document.getElementById("checkError").textContent =
      "Veuillez accepter les conditions d'utilisation.";
    document.getElementById("checkError").style.color = "red";
  } else {
    document.getElementById("checkError").textContent = "";
  }

  return isValid; // Renvoie la valeur isValid
}





//Fonction permettant d'englober les fonctions de chaques champs de formulaires afin de les tester par la suite
  function formulaireValidator() {

    firstNameValidator() 
    lastNameValidator() 
    emailValidator() 
    birthValidator() 
    quantityValidator()
    cityValidator()
    checkForm()
  
}




//Cette evenement permet au formulaire de ne pas être soumit par défaut
const form = document.forms.reserve; // Sélectionne le formulaire par son nom
form.addEventListener("submit", function (e) {
  e.preventDefault();
  formulaireValidator();
});







// fonction pour afficher le message de confirmation en lui donnant du style

function validate() {
  formular.style.display = "none";
  let parentOfNewElement = document.querySelector(".content");
  let elementchild = document.querySelector(".modal-body");

  // Créer une div pour englober le bouton
  let buttonDiv = document.createElement("div");

  let spanPhrase = document.createElement("span");
  let closeButton = document.createElement("button");
  closeButton.textContent = "Fermer";

  // Ajouter le contenu centré au parent
  parentOfNewElement.appendChild(elementchild);
  elementchild.appendChild(spanPhrase)
  elementchild.appendChild(buttonDiv)
  buttonDiv.appendChild(spanPhrase)


  // Ajouter la div englobante du bouton au contenu centré
  parentOfNewElement.display = "flex"
  parentOfNewElement.flex = "wrap"

  // Ajouter le bouton à la div englobante du bouton
  buttonDiv.appendChild(closeButton);

  parentOfNewElement.style.height = "45rem";
  spanPhrase.style.color = "white"; // Texte blanc ou autre couleur de texte
  spanPhrase.innerHTML = "Merci pour <br/> votre inscription";

  // Centrer horizontalement la phrase et la div englobante du bouton
  spanPhrase.style.textAlign = "center";
  spanPhrase.style.position = "absolute";
  spanPhrase.style.left = "50%";
  spanPhrase.style.transform = "translateX(-50%)";
  spanPhrase.style.top = "40%";


  closeButton.style.position = "absolute"
  closeButton.style.left = "9pc"
  closeButton.style.top = "40pc"
  closeButton.style.background = "red"
  closeButton.style.borderRadius = "7px"
  closeButton.style.padding = "12px 82px"
  closeButton.style.color = "white"
  closeButton.style.border = 0
  closeButton.style.cursor = "pointer"


  closeButton.addEventListener("click", function() {
    // Supprimer le parentOfNewElement
    parentOfNewElement.remove();
    formular.style.display = "block"; // Afficher à nouveau le formulaire si nécessaire
    // Rediriger l'utilisateur vers une autre page de votre site web
    window.location.href = "http://127.0.0.1:5500/GameOn-website-FR-master/starterOnly/index.html"
  });
}




// Fonction pour valider le formulaire et si formulaire valide afficher le message de confirmation

function formulaireValidator() {
  const isFirstNameValid = firstNameValidator();
  const isLastNameValid = lastNameValidator();
  const isEmailValid = emailValidator();
  const isBirthValid = birthValidator();
  const isQuantityValid = quantityValidator();
  const isCityValid = cityValidator()
  const isCheckValid = checkForm();

  //condition verifiant si tous nos champs sont valides
  if (isFirstNameValid && isLastNameValid && isEmailValid && isBirthValid && isQuantityValid && isCityValid &&  isCheckValid) {
    validate();
  }
}
 



  



    




