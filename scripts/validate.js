const showInputError = (formEl, inputEl, errorMessage) => {
    const errorEl = formEl.querySelector(`.${inputEl.id}-error`);
    inputEl.classList.add("popup__input_type_error");
    errorEl.textContent = errorMessage;
    errorEl.classList.add("popup__error_visible");
  };
  
  const hideInputError = (formEl, inputEl) => {
    const errorEl = formEl.querySelector(`.${inputEl.id}-error`);
    inputEl.classList.remove("popup__input_type_error");
    errorEl.textContent = "";
    errorEl.classList.remove("popup__error_visible");
  };
  
  const checkInputValidity = (formEl, inputEl) => {
    if (!inputEl.validity.valid) {
      showInputError(formEl, inputEl, inputEl.validationMessage);
    } else {
      hideInputError(formEl, inputEl);
    }
  };
  
  const changeButtonState = (inputList, buttonEl) => {
    const isValid = inputList.every((inputEl) => inputEl.validity.valid);
  
    if (isValid) {
      buttonEl.removeAttribute("disabled");
      buttonEl.classList.remove("popup__form-button_disabled");
    } else {
      buttonEl.setAttribute("disabled", true);
      buttonEl.classList.add("popup__form-button_disabled");
    }
  };
  
  const setEventListener = (formEl) => {
    const inputList = Array.from(formEl.querySelectorAll(".popup__form-input"));
    const buttonEl = formEl.querySelector(".popup__form-button");
    changeButtonState(inputList, buttonEl);
    inputList.forEach((inputEl) => {
      inputEl.addEventListener("input", function () {
        checkInputValidity(formEl, inputEl);
        changeButtonState(inputList, buttonEl);
      });
    });
  };
  
  function enableValidation() {
    const formList = Array.from(document.querySelectorAll(".popup__form"));
    formList.forEach((formEl) => {
      formEl.addEventListener("submit", (evt) => {
        evt.preventDefault();
      });
      setEventListener(formEl);
    });
  }
  
  enableValidation();