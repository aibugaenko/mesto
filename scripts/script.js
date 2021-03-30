const openButtonEdit = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('#popupedit');
const popupAdd = document.querySelector('#popupadd');
const closeButtonEdit = document.querySelector ('#popupcloseiconedit');
const formButton = document.querySelector ('.popup__form-button');
const formElementEdit = document.querySelector('#formelementedit');
const usernameInput = document.querySelector('.popup__form-input_type_username');
const aboutInput = document.querySelector('.popup__form-input_type_about');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const openButtonAdd = document.querySelector ('.profile__add-button');
const closeButtonAdd = document.querySelector('#popupcloseiconadd');
const elementsList = document.querySelector('.elements');
const cardplaceInput = document.querySelector('.popup__form-input_type_cardplace');
const cardphotoInput = document.querySelector('.popup__form-input_type_cardphoto');
const formElementCard = document.querySelector('#formelementcard');
const templateElement = document.querySelector('#templateelements').content.querySelector('.element');
const PhotoView = document.querySelector('.photo-view');
const closeButtonPhotoView = document.querySelector('.photo-view__closebutton');
const PhotoViewImage = document.querySelector('.photo-view__image');
const PhotoViewCaption = document.querySelector('.photo-view__caption');



const cards = [
    {
      name: 'Москва',
      link: './images/moscow.jpg'
    },
    {
      name: 'Рим',
      link: './images/rome.jpg'
    },
    {
      name: 'Луксор',
      link: './images/luxor.jpg'
    },
    {
      name: 'Токио',
      link: './images/tokyo.jpg'
    },
    {
      name: 'Нью-Йорк',
      link: './images/newyork.jpg'
    },
    {
      name: 'Мельбурн',
      link: './images/melbourne.jpg'
    }
  ];

const cardsSubmitHandler = ((evt) => {
    evt.preventDefault();

    const cardsElement = templateElement.cloneNode(true);

    cardsElement.querySelector('.element__title').textContent = cardplaceInput.value;
    cardsElement.querySelector('.element__photo').src = cardphotoInput.value;

    cardsElement.querySelector('.element__like').addEventListener('click', function(evt){
      evt.target.classList.toggle('element__like_active');
    });
    
    const deleteElementButton = cardsElement.querySelector('.element__delete');
    deleteElementButton.addEventListener('click', () => cardsElement.remove());

    closePopupAdd ();

    function PhotoHandler (evt) {
      evt.preventDefault();
      PhotoViewCaption.textContent = cardplaceInput.value;
      PhotoViewImage.src = cardphotoInput.value;
      
      openPhotoView();
    };

    cardsElement.querySelector('.element__photo-button').addEventListener('click', PhotoHandler);

    elementsList.prepend(cardsElement);
});



cards.forEach ((el) => {
    const cardsElement = templateElement.cloneNode(true);

    cardsElement.querySelector('.element__title').textContent = el.name;
    cardsElement.querySelector('.element__photo').src = el.link;

    cardsElement.querySelector('.element__like').addEventListener('click', function(evt){
      evt.target.classList.toggle('element__like_active');
    });
    
    const deleteElementButton = cardsElement.querySelector('.element__delete');
    deleteElementButton.addEventListener('click', () => cardsElement.remove());
    
    function PhotoHandler (evt) {
      evt.preventDefault();
      PhotoViewCaption.textContent = el.name;
      PhotoViewImage.src = el.link;
      
      openPhotoView();
    };

    cardsElement.querySelector('.element__photo-button').addEventListener('click', PhotoHandler);

    elementsList.append(cardsElement);
});


function openPopupEdit () {
    usernameInput.value = profileName.textContent;
    aboutInput.value = profileAbout.textContent;
    popupEdit.classList.add('popup_opened');
}

function closePopupEdit () {
    popupEdit.classList.remove('popup_opened');
}

function openPopupAdd () {
    popupAdd.classList.add('popup_opened');
}

function closePopupAdd () {
    popupAdd.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = usernameInput.value;
    profileAbout.textContent = aboutInput.value;

    closePopupEdit ();
}

function openPhotoView () {
  PhotoView.classList.add('photo-view_opened');
};

function closePhotoView () {
  PhotoView.classList.remove('photo-view_opened');
};

openButtonEdit.addEventListener('click', openPopupEdit);
closeButtonEdit.addEventListener('click', closePopupEdit);
openButtonAdd.addEventListener('click', openPopupAdd);
closeButtonAdd.addEventListener('click', closePopupAdd);
closeButtonPhotoView.addEventListener('click', closePhotoView);

formElementEdit.addEventListener('submit', formSubmitHandler);
formElementCard.addEventListener('submit', cardsSubmitHandler);