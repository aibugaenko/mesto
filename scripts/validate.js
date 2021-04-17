const settings = {
    formSelector: '.popup__form',
    inputSelector: '.popup__form-input',
    submitButtonSelector: '.popup__form-button',
    inactiveButtonClass: 'popup__form-button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
  };


const showInputError = (formEl, inputEl, errorMessage) => {
    const errorEl = formEl.querySelector(`.${inputEl.id}-error`);
    inputEl.classList.add(settings.inputErrorClass);
    errorEl.textContent = errorMessage;
    errorEl.classList.add(settings.errorClass);
  };
  
  const hideInputError = (formEl, inputEl, settings) => {
    const errorEl = formEl.querySelector(`.${inputEl.id}-error`);
    inputEl.classList.remove(settings.inputErrorClass);
    errorEl.textContent = "";
    errorEl.classList.remove(settings.errorClass);
  };
  
  const checkInputValidity = (formEl, inputEl) => {
    if (!inputEl.validity.valid) {
      showInputError(formEl, inputEl, inputEl.validationMessage, settings);
    } else {
      hideInputError(formEl, inputEl, settings);
    }
  };
  
  const changeButtonState = (inputList, buttonEl, settings) => {
    const isValid = inputList.every((inputEl) => inputEl.validity.valid);
  
    if (isValid) {
      buttonEl.removeAttribute("disabled");
      buttonEl.classList.remove(settings.inactiveButtonClass);
    } else {
      buttonEl.setAttribute("disabled", true);
      buttonEl.classList.add(settings.inactiveButtonClass);
    }
  };
  
  const setEventListener = (formEl) => {
    const inputList = Array.from(formEl.querySelectorAll(settings.inputSelector));
    const buttonEl = formEl.querySelector(settings.submitButtonSelector);
    changeButtonState(inputList, buttonEl, settings);
    inputList.forEach((inputEl) => {
      inputEl.addEventListener("input", function () {
        checkInputValidity(formEl, inputEl);
        changeButtonState(inputList, buttonEl, settings);
      });
    });
  };
  
  function enableValidation(settings) {
    const formList = Array.from(document.querySelectorAll(settings.formSelector));
    formList.forEach((formEl) => {
      formEl.addEventListener("submit", (evt) => {
        evt.preventDefault();
      });
      setEventListener(formEl);
    });
  }
  
  enableValidation(settings);