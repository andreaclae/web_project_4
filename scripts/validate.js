

enableValidation({
    formSelector: '.modal__form',
    inputSelector: '.modal__input',
    errorTextSelector: '.modal__error-text', 
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
        checkInputValidity(input)
    //check if it's valid
    //check if all the inputs are valid

    })
})}

function checkInputValidity(input) {
   if(input.validity.valid){
       removeErrorStyles(input)
   }else{
       addErrorStyles(input)
   }
   
}

function removeErrorStyles(input){
    input.classList.remove('modal__input_has-error')
    input.nextElementSibling.classList.remove('modal__error-text_visible')

    
}


function addErrorStyles(input){
    input.classList.add('modal__input_has-error')
   input.nextElementSibling.classList.add('modal__error-text_visible')

          

}

//for each form
    //get all inputs
        //add event listener to each input
        //check validity of that input
        //check validity of that all inputs
        //chnage the disabled status of submit button