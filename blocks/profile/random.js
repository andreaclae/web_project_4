//EDIT PROFILE MODAL
function closeEditForm() {
    editProfileCloseButton.addEventListener("click", () => {
      editProfileModal.classList.remove("modal_open");
    });
    editProfileModal.addEventListener("click", (e) => {
      if (e.target == editProfileModal) {
        editProfileModal.classList.remove("modal_open");
      }
    });
  }
  function openEditForm() {
    openEditModalButton.addEventListener("click", () => {
      editProfileModal.classList.add("modal_open");
  /*I use inner Text because after looking at it with the tutor if we use textContent, extra spacing is added before the second input*/
      nameInput.value = profileName.innerText;
      descriptionInput.value = profileDescription.innerText;
    });
  
  }
  
  function changeInputForm() {
    editProfileForm.addEventListener("submit", (e) => {
      e.preventDefault();
      profileName.textContent = nameInput.value;
      profileDescription.textContent = descriptionInput.value;
  
      editProfileModal.classList.remove("modal_open");
      editProfileForm.reset();
    });
  }

  /*
//NEW PLACE MODAL
function closeNewPlaceForm() {
  newPlaceCloseButton.addEventListener("click", () => {
    newPlaceModal.classList.remove("modal_open");
  });
  newPlaceModal.addEventListener("click", (e) => {
    if (e.target == newPlaceModal) {
      newPlaceModal.classList.remove("modal_open");
    }
  });
}
function openNewPlaceForm() {
  openNewPlaceModalButton.addEventListener("click", () => {
    newPlaceModal.classList.add("modal_open");

  });

}


function addNewPlace() {
  newPlaceForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let newPlaceCard = {'name': titleInput ,  'link': linkInput}
    initialCards.unshift(newPlaceCard);

    console.log(titleInput);
    console.log(linkInput);

  console.log(initialCards);

    newPlaceModal.classList.remove("modal_open");
    newPlaceForm.reset();
  });
}
*/
to do the other modal form go to minute 40


