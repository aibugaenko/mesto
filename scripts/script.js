const openButtonEdit = document.querySelector(".profile__edit-button");
const popupEdit = document.querySelector("#popupedit");
const popupAdd = document.querySelector("#popupadd");
const closeButtonEdit = document.querySelector("#popupcloseiconedit");
const formButton = document.querySelector(".popup__form-button");
const formElementEdit = document.querySelector("#formelementedit");
const usernameInput = document.querySelector(
  ".popup__form-input_type_username"
);
const aboutInput = document.querySelector(".popup__form-input_type_about");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");
const openButtonAdd = document.querySelector(".profile__add-button");
const closeButtonAdd = document.querySelector("#popupcloseiconadd");
const elementsList = document.querySelector(".elements");
const cardplaceInput = document.querySelector(
  ".popup__form-input_type_cardplace"
);
const cardphotoInput = document.querySelector(
  ".popup__form-input_type_cardphoto"
);
const formElementCard = document.querySelector("#formelementcard");
const templateElement = document
  .querySelector("#templateelements")
  .content.querySelector(".element");
const photoView = document.querySelector(".photo-view");
const closeButtonPhotoView = document.querySelector(".photo-view__closeicon");
const photoViewImage = document.querySelector(".photo-view__image");
const photoViewCaption = document.querySelector(".photo-view__caption");
const closeOverlayEdit = document.querySelector("#overlayedit");
const closeOverlayAdd = document.querySelector("#overlayadd");
const closePhotoViewOverlay = document.querySelector(".photo-view__overlay");

const cards = [
  {
    name: "Москва",
    link: "./images/moscow.jpg",
  },
  {
    name: "Рим",
    link: "./images/rome.jpg",
  },
  {
    name: "Луксор",
    link: "./images/luxor.jpg",
  },
  {
    name: "Токио",
    link: "./images/tokyo.jpg",
  },
  {
    name: "Нью-Йорк",
    link: "./images/newyork.jpg",
  },
  {
    name: "Мельбурн",
    link: "./images/melbourne.jpg",
  },
];

const cardsSubmitHandler = (evt) => {
  evt.preventDefault();

  const placeValue = cardplaceInput.value;
  const photoValue = cardphotoInput.value;

  createCards({ name: placeValue, link: photoValue });
  closeModal(popupAdd);
};

function createCards(el) {
  const cardsElement = templateElement.cloneNode(true);

  cardsElement.querySelector(".element__title").textContent = el.name;
  cardsElement.querySelector(".element__photo").src = el.link;

  const deleteElementButton = cardsElement.querySelector(".element__delete");
  deleteElementButton.addEventListener("click", () => cardsElement.remove());

  cardsElement
    .querySelector(".element__like")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("element__like_active");
    });

  function photoHandler() {
    photoViewCaption.textContent = el.name;
    photoViewImage.src = el.link;

    openModal(photoView);
  }

  addCards(cardsElement);

  cardsElement
    .querySelector(".element__photo-button")
    .addEventListener("click", photoHandler);
}

const addCards = (el) => {
  elementsList.prepend(el);
};

cards.reverse().forEach((el) => {
  createCards(el);
});

function openModal(modal) {
  usernameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
  modal.classList.add("popup_opened");
}

function closeModal(modal) {
  modal.classList.remove("popup_opened");
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = usernameInput.value;
  profileAbout.textContent = aboutInput.value;

  closeModal(popupEdit);
}

function escHandler(evt) {
  if (evt.key === "Escape") {
    closeModal(document.querySelector(".popup_opened"));
  }
}

document.addEventListener("keydown", escHandler);

openButtonEdit.addEventListener("click", () => openModal(popupEdit));
openButtonAdd.addEventListener("click", () => openModal(popupAdd));
closeButtonEdit.addEventListener("click", () => closeModal(popupEdit));
closeButtonAdd.addEventListener("click", () => closeModal(popupAdd));
closeButtonPhotoView.addEventListener("click", () => closeModal(photoView));
closeOverlayEdit.addEventListener("click", () => closeModal(popupEdit));
closeOverlayAdd.addEventListener("click", () => closeModal(popupAdd));
closePhotoViewOverlay.addEventListener("click", () => closeModal(photoView));

formElementEdit.addEventListener("submit", formSubmitHandler);
formElementCard.addEventListener("submit", cardsSubmitHandler);