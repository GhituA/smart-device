'use strict';

(function () {
  var cbForm = document.querySelector('form');
  var cbPhone = cbForm.querySelector('#phone');
  var cbName = cbForm.querySelector('#username');
  var MIN_NAME_LENGTH = 4;
  var MAX_NAME_LENGTH = 30;
  var cbPhoneMask = {
    mask: '+{7}(000)000-00-00'
  };

  var onPhoneFocus = function (evt) {
    if (evt.target.value === '') {
      evt.target.value = '+7 (';
    }
  };

  var onPhoneInput = function (evt) {
    var newMask = new window.IMask(evt.target, cbPhoneMask);

    if (evt.target.validity.patternMismatch) {
      evt.target.setCustomValidity('Пример ввода:  +7 (000) 000-00-00');
    } else {
      evt.target.setCustomValidity('');
    }
    return newMask;
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

  if (cbForm) {
    cbPhone.addEventListener('focus', onPhoneFocus);
    cbPhone.addEventListener('input', onPhoneInput);
    cbName.addEventListener('input', onNameInput);
  }

  window.form = {
    cbPhoneMask: cbPhoneMask,
    onPhoneFocus: onPhoneFocus,
    onPhoneInput: onPhoneInput,
    onNameInput: onNameInput
  };

})();
