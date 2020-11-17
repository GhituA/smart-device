'use strict';

(function () {
  var EVT_KEY_ESCAPE = 'Escape';
  var page = document.querySelector('.page');
  var navCbBtn = page.querySelector('.head-contacts__button');
  var popup = page.querySelector('.popup');
  var popupForm = popup.querySelector('form');
  var closeBtn = popup.querySelector('.popup__esc');
  var nameField = popup.querySelector('#popup-username');
  var phoneField = popup.querySelector('#popup-phone');
  var commentField = popup.querySelector('#popup-comment');

  var isStorageSupport = true;
  var nameStored = '';
  var phoneStored = '';
  var commentStored = '';

  var onPopupClose = function () {
    popup.classList.add('popup--hidden');
    page.classList.remove('page--lock');
    closeBtn.removeEventListener('click', onPopupClose);
    document.removeEventListener('keydown', oneEscPress);
    popup.removeEventListener('click', onPopupClose);
    phoneField.removeEventListener('focus', window.form.onPhoneFocus);
    phoneField.removeEventListener('input', window.form.onPhoneInput);
    nameField.removeEventListener('input', window.form.onNameInput);
    popupForm.removeEventListener('submit', onFormSubmit);

  };

  var oneEscPress = function (evt) {
    if (evt.key === EVT_KEY_ESCAPE) {
      onPopupClose();
    }
  };

  var onOverlayClick = function (evt) {
    if (evt.target === popup) {
      onPopupClose();
    }
  };

  var onPopupOpen = function () {
    nameField.value = nameStored;
    phoneField.value = phoneStored;
    commentField.value = commentStored;
  };

  var onFormSubmit = function () {
    if (isStorageSupport) {
      localStorage.setItem('name', nameField.value);
      localStorage.setItem('phone', phoneField.value);
      localStorage.setItem('comment', commentField.value);
    }
  };

  if (popup) {
    try {
      nameStored = localStorage.getItem('name');
      phoneStored = localStorage.getItem('phone');
      commentStored = localStorage.getItem('comment');
    } catch (err) {
      isStorageSupport = false;
    }
  }

  if (navCbBtn) {
    navCbBtn.addEventListener('click', function (evt) {

      evt.preventDefault();
      popup.classList.remove('popup--hidden');
      page.classList.add('page--lock');
      closeBtn.addEventListener('click', onPopupClose);
      document.addEventListener('keydown', oneEscPress);
      popup.addEventListener('click', onOverlayClick);
      nameField.focus();
      onPopupOpen();
      phoneField.addEventListener('focus', window.form.onPhoneFocus);
      phoneField.addEventListener('input', window.form.onPhoneInput);
      nameField.addEventListener('input', window.form.onNameInput);
      popupForm.addEventListener('submit', onFormSubmit);
    });
  }
})();
