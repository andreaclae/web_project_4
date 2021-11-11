const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseButton = editProfileModal.querySelector(
  ".modal__close-button"
);

const openModalButton = document.querySelector("#open-modal-button");

const editProfileForm = document.querySelector("#edit-profile-form");
const nameInput = editProfileForm.name;
const descriptionInput = editProfileForm.description;

const editProfileSubmit = editProfileForm.querySelector("button[type=submit]");

const profileName = document.querySelector("#profile-name");
const profileDescription = document.querySelector("#profile-description");

const likeButtons = document.querySelectorAll(".card__text-heart");

function closeButton() {
  editProfileCloseButton.addEventListener("click", () => {
    editProfileModal.classList.remove("modal_open");
  });
  openModalButton.addEventListener("click", () => {
    editProfileModal.classList.add("modal_open");

    nameInput.value = profileName.innerText;
    descriptionInput.value = profileDescription.innerText;
  });
  editProfileModal.addEventListener("click", (e) => {
    if (e.target == editProfileModal) {
      editProfileModal.classList.remove("modal_open");
    }
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
closeButton();
changeInputForm();

/*
Deleting without deleting- please disregard
function likeButton() {
  likeButtons.forEach((likeButtons) => {
    likeButtons.addEventListener("click", () => {
      if (likeButtons.classList.contains("card__text-heart_empty")) {
        likeButtons.classList.remove("card__text-heart_empty");
        likeButtons.classList.add("card__text-heart_full");
      } else {
        likeButtons.classList.remove("card__text-heart_full");
        likeButtons.classList.add("card__text-heart_empty");
      }
    });
  });
}

closeButton();
changeInputForm();
*/
