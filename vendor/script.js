let openButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closeButton = document.querySelector ('.popup__closeicon');
let formButton = document.querySelector ('.popup__form-button');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__form-input_name');
let aboutInput = document.querySelector('.poup__form-input_about');
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');

nameInput.value = profileName.textContent;
aboutInput.value = profileAbout.textContent;


function openPopup () {
    popup.classList.add('popup_opened');
}

function closePopup () {
    popup.classList.remove('popup_opened');
}

openButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
formButton.addEventListener('click', closePopup);


function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileAbout.textContent = aboutInput.value;
} 

formElement.addEventListener('submit', formSubmitHandler);