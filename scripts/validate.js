var isValid = true;

enableValidation({
    formSelector: '.modal__form',
    inputSelector: '.modal__input',
    errorTextSelector: '.modal__error-text', 
    submitButtonSelector: ".modal__submit-button",
    inactiveButtonClass: "modal__button_disabled",
})


function enableValidation(settings) {
    const forms = document.querySelectorAll(settings.formSelector)
 forms.forEach((form => {
     setEventListeners(form, settings);
 }))
} 

function setEventListeners(form, settings){
 const inputs = form.querySelectorAll(settings.inputSelector);
 
inputs.forEach((input) => {
    //add the event listenser
    input.addEventListener('input', (event) => {
        checkInputValidity(input, settings)
    //check if it's valid
    //check if all the inputs are valid
    })
    
})

}

function checkInputValidity(input, settings) {
   if(input.validity.valid){
       removeErrorStyles(input)
       isValid = true;
   }else{
       addErrorStyles(input)
       isValid = false;
   } 
   return isValid
   
}

function removeErrorStyles(input, settings){
    input.classList.remove('modal__input_has-error')
 input.nextElementSibling.classList.remove('modal__error-text_visible')

 const currentModalButton = input.form.querySelector(".modal__submit-button")
     currentModalButton.disabled = false;
     currentModalButton.classList.remove('modal__submit-button_disabled')

}


function addErrorStyles(input, settings){
    input.classList.add('modal__input_has-error')
   input.nextElementSibling.classList.add('modal__error-text_visible')

  const currentModalButton = input.form.querySelector(".modal__submit-button")
    currentModalButton.disabled = true;
    currentModalButton.classList.add('modal__submit-button_disabled')
}



//for each form
    //get all inputs
        //add event listener to each input
        //check validity of that input
        //check validity of that all inputs
        //chnage the disabled status of submit button