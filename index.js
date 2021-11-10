const editProfileModal = document.querySelector('#edit-profile-modal');
const editProfileCloseButton = editProfileModal.querySelector('.modal__close-button');

const openModalButton = document.querySelector('#open-modal-button');

const editProfileForm = document.querySelector('#edit-profile-form');
const nameInput = editProfileForm.name;
const descriptionInput = editProfileForm.description;
const editProfileSubmit = editProfileForm.querySelector('button[type=submit]');

const profileName = document.querySelector('#profile-name');
const profileDescription = document.querySelector('#profile-description');

const likeButtons = document.querySelectorAll('.element-grid__text-heart');


editProfileCloseButton.addEventListener("click", () => {
    editProfileModal.classList.remove("modal__open");
})
openModalButton.addEventListener("click", () => { 
    editProfileModal.classList.add("modal__open");
})
editProfileModal.addEventListener("click", (e) => {
if(e.target == editProfileModal){
    editProfileModal.classList.remove("modal__open");
}
})

editProfileForm.addEventListener("submit", (e) => {
    e.preventDefault();
   profileName.textContent = nameInput.value;
   profileDescription.textContent = descriptionInput.value;

   editProfileModal.classList.remove("modal__open");
    editProfileForm.reset();

})



likeButtons.forEach((likeButtons) => {
    likeButtons.addEventListener("click", () => {
if( likeButtons.classList.contains('element-grid__text-heart_empty')){
likeButtons.classList.remove("element-grid__text-heart_empty");
likeButtons.classList.add("element-grid__text-heart_full");
} else{
    likeButtons.classList.remove("element-grid__text-heart_full");
likeButtons.classList.add("element-grid__text-heart_empty");
}
    })
    })


