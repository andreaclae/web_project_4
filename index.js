const editProfileModal = document.querySelector(".modal");
//const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseButton = editProfileModal.querySelector(
  "#edit-close-button"
);
const newPlaceModal = document.querySelector("#new-place-modal");
const newPlaceCloseButton = newPlaceModal.querySelector(
  "#new-place-close-button"
);
const editModalButton = document.querySelector("#open-edit-modal-button");
const openNewPlaceModalButton = document.querySelector("#open-new-place-modal-button");
const modalCloseButtons = document.querySelectorAll(".modal__close-button")


const editProfileForm = document.querySelector("#edit-profile-form");
const nameInput = editProfileForm.name;
const descriptionInput = editProfileForm.description;

const newPlaceForm = document.querySelector("#new-place-form");
const titleInput = newPlaceForm.title;
const linkInput = newPlaceForm.link;

const editProfileSubmit = editProfileForm.querySelector("#edit-submit");
const newPlaceSubmit = editProfileForm.querySelector("#new-place-submit");


const profileName = document.querySelector("#profile-name");
const profileDescription = document.querySelector("#profile-description");

const imageModal = document.querySelector("#image-popup");

const modalImageElement = imageModal.querySelector(".modal__image");
const modalCaption = imageModal.querySelector(".modal__caption");
const cardTemplate = document.querySelector("#card-template");
const cardGrid = document.querySelector(".element-grid");


const initialCards = [
  {
    title: "Yosemite Valley",
    url: "https://code.s3.yandex.net/web-code/yosemite.jpg"
  },
  {
    title: "Lake Louise",
    url: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
  },
  {
    title: "Bald Mountains",
    url: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
  },
  {
    title: "Latemar",
    url: "https://code.s3.yandex.net/web-code/latemar.jpg"
  },
  {
    title: "Vanoise National Park",
    url: "https://code.s3.yandex.net/web-code/vanoise.jpg"
  },
  {
    title: "Lago di Braies",
    url: "https://code.s3.yandex.net/web-code/lago.jpg"
  }
];

function closeModal(modal){
  modal.classList.remove("modal_open");
}
function openModal(modal){
  nameInput.value = profileName.innerText;
  descriptionInput.value = profileDescription.innerText;

  modal.classList.add("modal_open");
}

function editProfileFormSubmitHandler(evt) {
    e.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = descriptionInput.value;
    editProfileForm.reset();
    closeModal(editProfileModal);
  }

  //open the edit form
  editProfileForm.addEventListener("submit", editProfileFormSubmitHandler);
  editModalButton.addEventListener("click", () => {
openModal(editProfileModal);
  });
//open the new place form
openNewPlaceModalButton.addEventListener("click", () => {
openModal(newPlaceModal);
  });
  

  function changeInputForm() {
    editProfileForm.addEventListener("submit", (e) => {
      e.preventDefault();
      profileName.textContent = nameInput.value;
      profileDescription.textContent = descriptionInput.value;
  
openModal(editProfileModal);
      editProfileForm.reset();
      closeModal(editProfileModal);
    });
  }

modalCloseButtons.forEach((modalCloseButton) => {
  modalCloseButton.addEventListener("click", (event) => {
    const modal = modalCloseButton.closest(".modal");
  closeModal(modal);
  });
})



function createCard(data){
  const card = cardTemplate.content.querySelector(".card").cloneNode(true);
  const imageElement = card.querySelector(".card__image");
  const titleElement = card.querySelector(".card__text");


  imageElement.src = data.url;
  titleElement.textContent = data.title;

  imageElement.addEventListener('click', () => {
    
    modalImageElement.src = data.url;
    modalCaption.textContent = data.title;
  openModal(imageModal);
  })

  return card;
}

function addCardToPage(card){
  cardGrid.prepend(card);

}

function renderCard(data){
  addCardToPage(createCard(data))

}


initialCards.forEach((cardData) => {
  renderCard(cardData);
})


  newPlaceForm.addEventListener("submit", (e) => {
    closeModal(newPlaceForm);

    console.log(titleInput.value);
    console.log(linkInput.value);
    debugger;
    const newCard = { title: titleInput.value, url: linkInput.value };
    initialCards.unshift(newCard);
    createCard(newCard);
    renderCard(newCard);

   
  });

  initialCards.forEach((cardData) => {
    renderCard(cardData);
  })


changeInputForm();

const likeButtons = document.querySelectorAll(".card__text-heart");


function likeButton() {
  likeButtons.forEach((likeButton) => {
    likeButton.addEventListener("click", () => {
      if (likeButton.classList.contains("card__text-heart_full")) {
        likeButton.classList.remove("card__text-heart_full");
      } else {
        likeButton.classList.add("card__text-heart_full");
      }
    });
  });
}

likeButton();

const trashButtons = document.querySelectorAll(".card__trash");


function deleteButton() {
  trashButtons.forEach((trashButton) => {
    trashButton.addEventListener("click", () => {
      const removedCard = trashButton.closest(".card");
      removedCard.remove();
    });
  });
}

deleteButton();