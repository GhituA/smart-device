'use strict';

(function () {

  var cbForm = document.querySelector('form');
  var cbPhone = cbForm.querySelector('#phone');
  var cbName = cbForm.querySelector('#username');
  var MIN_NAME_LENGTH = 4;
  var MAX_NAME_LENGTH = 30;
  var numbers = /^[\d\+ ]*$/;

  // var isStorageSupport = true;
  // var storage = "";
  //
  // try {
  //   storage = localStorage.getItem("login");
  // } catch (err) {
  //   isStorageSupport = false;
  // }

  var onPhoneInput = function (evt) {
    var valueLength = evt.target.value.length;

    if (!evt.target.value.match(numbers)) {
      evt.target.setCustomValidity('Только числовые значения');
    } else if (evt.target.validity.patternMismatch) {
      evt.target.setCustomValidity('Пример ввода:  +7 925 333 22 22');
    } else if (valueLength < 1) {
      evt.target.setCustomValidity('Это поле обязательно для заполнения');
    } else {
      evt.target.setCustomValidity('');
    }
  };

  var onPhoneFocus = function (evt) {
    evt.target.value = '+7';
  };


  var onNameInput = function (evt) {
    var valueLength = evt.target.value.length;
    if (valueLength < 1) {
      evt.target.setCustomValidity('Это поле обязательно для заполнения');
    } else if (valueLength < MIN_NAME_LENGTH) {
      evt.target.setCustomValidity('Минимальная длина ввода: 4 символов. Введите ещё ' + (MIN_NAME_LENGTH - valueLength) + ' симв.');
    } else if (valueLength > MAX_NAME_LENGTH) {
      evt.target.setCustomValidity('Максимальная длина ввода: 30 символов. Удалите лишние ' + (valueLength - MAX_NAME_LENGTH) + ' симв.');
    } else {
      evt.target.setCustomValidity('');
    }
  };

  cbPhone.addEventListener('focus', onPhoneFocus);
  cbPhone.addEventListener('input', onPhoneInput);
  cbName.addEventListener('input', onNameInput);

})();
