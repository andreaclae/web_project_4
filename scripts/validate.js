enableValidation({
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  errorTextSelector: ".modal__error-text",
  submitButtonSelector: ".modal__submit-button",
});

function enableValidation(settings) {
  const forms = document.querySelectorAll(settings.formSelector);
  forms.forEach((form) => {
    setEventListeners(form, settings);
  });
}

function setEventListeners(form, settings) {
  const inputs = form.querySelectorAll(settings.inputSelector);
  const button = form.querySelector(settings.submitButtonSelector);

  inputs.forEach((input) => {
    //add the event listenser
    input.addEventListener("input", (event) => {
      checkInputValidity(input, settings);
      //check if it's valid
      checkAllInputs(inputs, button);
      //check if all the inputs are valid
      changErrorText(input, settings);
      debugger;
    });
  });
}
function checkAllInputs(inputs, button) {
  var inputArr = Array.from(inputs);
  if (
    inputArr.every((input) => {
      return input.validity.valid;
    })
  ) {
    activateButton(button);
  } else {
    deactivateButton(button);
  }
}

function checkInputValidity(input, settings) {
  if (input.validity.valid) {
    removeErrorStyles(input);
  } else {
    addErrorStyles(input);
  }
}

function removeErrorStyles(input, settings) {
  input.classList.remove("modal__input_has-error");
  const span = document.querySelector(`#${input.id}-error`);
  span.classList.remove("modal__error-text_visible");
}

function addErrorStyles(input, settings) {
  input.classList.add("modal__input_has-error");
  const span = document.querySelector(`#${input.id}-error`);
  span.classList.add("modal__error-text_visible");
  if (input.value.length == 0) {
    span.textContent = "Please fill out this field";
  } else if (input.value.length < input.minLength) {
    span.textContent =
      "Please lengthen this text to " +
      input.minLength +
      " characters or more. Your are currently using " +
      input.value.length +
      " character";
  }
}

function deactivateButton(button) {
  button.disabled = true;
}
function activateButton(button) {
  button.disabled = false;
}

function resetValidation(input, form, settings) {
  input.classList.remove("modal__input_has-error");
  const button = form.querySelector(settings.submitButtonSelector);
  button.disabled = true;
}

//validity should have error text as well use .textcontent to change text
