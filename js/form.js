function listenForValidation() {
  const PERSONAL_DATA_FORM = document.getElementById("personal-data-form");
  PERSONAL_DATA_FORM.addEventListener("submit", validatePersonalDataForm);
}

function validatePersonalDataForm(e) {

  const CAR = e.target.car.value;
  const MODEL = e.target.model.value;
  const EMAIL = e.target.email.value;

  let valid = true;

  if (!CAR) {
    document.getElementById("form-car").style.visibility = "visible";
    valid = false;
  } else document.getElementById("form-car").style.visibility = "hidden";

  if (!MODEL) {
    document.getElementById("form-model").style.visibility = "visible";
    valid = false;
  } else document.getElementById("form-model").style.visibility = "hidden";

  if (!EMAIL) {
    document.getElementById("form-email").style.visibility = "visible";
    valid = false;
  } else document.getElementById("form-email").style.visibility = "hidden";

  if (EMAIL && !validateEmail()) {
    document.getElementById("form-email-invalid").style.visibility = "visible";
    valid = false;
  } else document.getElementById("form-email-invalid").style.visibility = "hidden";


  if (!valid) {
    e.preventDefault();
  } else {
    saveData(CAR, MODEL, EMAIL);
  }

  // Crear el objeto con los datos
  const formData = { car, model, email };

  // Recuperar datos existentes de localStorage
  const savedData = JSON.parse(localStorage.getItem('formData')) || [];

  // Agregar los nuevos datos
  savedData.push(formData);

  // Guardar en localStorage
  localStorage.setItem('formData', JSON.stringify(savedData));

  // Resetear el formulario
  this.reset();

  alert('Datos guardados correctamente.');
}

function saveData(car, model, email) {
  localStorage.setItem("car", car);
  localStorage.setItem("model", model);
  localStorage.setItem("email", email);
}

function validateEmail() {

  // Get our input reference.
  var emailField = document.getElementById('email');

  // Define our regular expression.
  var validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

  // Using test we can check if the text match the pattern
  if (validEmail.test(emailField.value)) {
    // alert('Email is valid, continue with form submission');
    return true;
  } else {
    // alert('Email is invalid, skip form submission');
    return false;
  }
}

listenForValidation();

