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

//Не удалось исправить замечание проверяющего: 
//Если я добавил карточку и я открываю попап добавления карточек опять я вижу кнопку 
//Сохранить активной при пустых полях, а она должна быть неактивной. При этом у меня 
//появляется возможность сохранять пустые карточки.

const cardsSubmitHandler = (evt) => {
  evt.preventDefault();

  const placeValue = cardplaceInput.value;
  const photoValue = cardphotoInput.value;

  addCards({ name: placeValue, link: photoValue });
  closeModal(popupAdd);
  formElementCard.reset();
};

function photoHandler(el) {
  photoViewCaption.textContent = el.name;
  photoViewImage.src = el.link;
  photoViewImage.alt = el.name;
  
  openModal(photoView);
  }

function createCards(el) {
  const cardsElement = templateElement.cloneNode(true);

  cardsElement.querySelector(".element__title").textContent = el.name;
  cardsElement.querySelector(".element__photo").src = el.link;
  cardsElement.querySelector(".element__photo").alt = el.name;

  const deleteElementButton = cardsElement.querySelector(".element__delete");
  deleteElementButton.addEventListener("click", () => cardsElement.remove());

  cardsElement
    .querySelector(".element__like")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("element__like_active");
    });

  cardsElement
    .querySelector(".element__photo-button")
    .addEventListener("click", () => photoHandler(el));

  return cardsElement;
}

const addCards = (el) => {
  elementsList.prepend(createCards(el));
};

cards.reverse().forEach((el) => {
  addCards(el);
});

function openModal(modal) {
  modal.classList.add("popup_opened");
  document.addEventListener("keydown", escHandler);
}

function closeModal(modal) {
  modal.classList.remove("popup_opened");
  document.removeEventListener("keydown", escHandler);
}

function formEditProfileSubmitHandler(evt) {
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

openButtonEdit.addEventListener("click", function() { 
  openModal(popupEdit)
  usernameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
});

openButtonAdd.addEventListener("click", () => openModal(popupAdd));
closeButtonEdit.addEventListener("click", () => closeModal(popupEdit));
closeButtonAdd.addEventListener("click", () => closeModal(popupAdd));
closeButtonPhotoView.addEventListener("click", () => closeModal(photoView));
closeOverlayEdit.addEventListener("click", () => closeModal(popupEdit));
closeOverlayAdd.addEventListener("click", () => closeModal(popupAdd));
closePhotoViewOverlay.addEventListener("click", () => closeModal(photoView));

formElementEdit.addEventListener("submit", formEditProfileSubmitHandler);
formElementCard.addEventListener("submit", cardsSubmitHandler);