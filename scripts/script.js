let openButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closeButton = document.querySelector ('.popup__closeicon');
let formButton = document.querySelector ('.popup__form-button');
let formElement = document.querySelector('.popup__form');
let usernameInput = document.querySelector('.popup__form-input_type_username');
let aboutInput = document.querySelector('.popup__form-input_type_about');
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');


function openPopup () {
    usernameInput.value = profileName.textContent;
    aboutInput.value = profileAbout.textContent;
    popup.classList.add('popup_opened');
}

function closePopup () {
    popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = usernameInput.value;
    profileAbout.textContent = aboutInput.value;

    closePopup ();
}

openButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);

formElement.addEventListener('submit', formSubmitHandler);