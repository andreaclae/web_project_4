const editProfileModal = document.querySelector(".modal");
const editProfileCloseButton =
  editProfileModal.querySelector("#edit-close-button");
const newPlaceModal = document.querySelector("#new-place-modal");
const editModalButton = document.querySelector("#open-edit-modal-button");
const openNewPlaceModalButton = document.querySelector(
  "#open-new-place-modal-button"
);
const modalCloseButtons = document.querySelectorAll(".modal__close-button");
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
const modalAlt = imageModal.querySelector(".modal__image").alt;
const cardTemplate = document.querySelector("#card-template");
const cardGrid = document.querySelector(".element-grid");

const initialCards = [
  {
    title: "Yosemite Valley",
    url: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    title: "Lake Louise",
    url: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    title: "Bald Mountains",
    url: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    title: "Latemar",
    url: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    title: "Vanoise National Park",
    url: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    title: "Lago di Braies",
    url: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];

function openModal(modal) {
  modal.classList.add("modal_open");
  document.addEventListener("keydown", handleKeyDown);
  document.addEventListener("mousedown", handleMouseDown);
}

function closeModal(modal) {
  modal.classList.remove("modal_open");
  document.removeEventListener("keydown", handleKeyDown);
  document.removeEventListener("mousedown", handleMouseDown);
}

function handleKeyDown(event) {
  if (event.key === "Escape") {
    const currentModal = document.querySelector(".modal_open");
    closeModal(currentModal);
  }
}

function handleMouseDown(event) {
  if (event.target.classList.contains("modal_open")) {
    closeModal(event.target);
  }
}

function editProfileFormSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  closeModal(editProfileModal);
}

//open the edit form
editProfileForm.addEventListener("submit", editProfileFormSubmitHandler);
editModalButton.addEventListener("click", () => {
  const submitButton = editProfileModal.querySelector(".modal__submit-button");
  submitButton.disabled = true;
  openModal(editProfileModal);
  nameInput.value = profileName.innerText;
  descriptionInput.value = profileDescription.innerText;
});
//open the new place form
openNewPlaceModalButton.addEventListener("click", () => {
  const submitButton = newPlaceModal.querySelector(".modal__submit-button");
  submitButton.disabled = true;
  openModal(newPlaceModal);
});

modalCloseButtons.forEach((modalCloseButton) => {
  modalCloseButton.addEventListener("click", (event) => {
    const modal = modalCloseButton.closest(".modal");
    closeModal(modal);
  });
});

function createCard(data) {
  const card = cardTemplate.content.querySelector(".card").cloneNode(true);
  const trashButton = card.querySelector(".card__trash");
  const likeButton = card.querySelector(".card__text-heart");

  const imageElement = card.querySelector(".card__image");
  const titleElement = card.querySelector(".card__text");

  imageElement.src = data.url;
  titleElement.textContent = data.title;
  imageElement.alt = data.title;

  imageElement.addEventListener("click", () => {
    modalImageElement.src = data.url;
    modalImageElement.alt = data.title;
    modalCaption.textContent = data.title;

    openModal(imageModal);
  });

  trashButton.addEventListener("click", () => {
    const removedCard = trashButton.closest(".card");
    removedCard.remove();
  });

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__text-heart_full");
  });

  return card;
}

function addCardToPage(card) {
  cardGrid.prepend(card);
}

function renderCard(data) {
  addCardToPage(createCard(data));
}

initialCards.forEach(renderCard);

newPlaceForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newCard = { title: titleInput.value, url: linkInput.value };
  renderCard(newCard);
  newPlaceForm.reset();
  closeModal(newPlaceModal);
});
