'use strict';

(function () {
  var MIN_NAME_LENGTH = 4;
  var MAX_NAME_LENGTH = 30;
  var phoneFocusMask = '+7 (';
  var cbPhoneMask = {
    mask: '+{7} (000) 000-00-00'
  };

  var phoneErrorMessage = 'Пример ввода:  +7 (000) 000-00-00';
  var requiredMessage = 'Это поле обязательно для заполнения';
  var minLengthMessage = 'Минимальная длина ввода: 4 символа. Введите ещё ';
  var maxLengthMessage = 'Максимальная длина ввода: 30 символов. Удалите лишние ';

  var cbForm = document.querySelector('form');
  var cbPhone = cbForm.querySelector('#phone');
  var cbName = cbForm.querySelector('#username');

  var onPhoneFocus = function (evt) {
    if (evt.target.value === '') {
      evt.target.value = phoneFocusMask;
    }
  };

  var onPhoneInput = function (evt) {
    var newMask = new window.IMask(evt.target, cbPhoneMask);

    if (evt.target.validity.patternMismatch) {
      evt.target.setCustomValidity(phoneErrorMessage);
    } else {
      evt.target.setCustomValidity('');
    }
    return newMask;
  };

  var onNameInput = function (evt) {
    var valueLength = evt.target.value.length;
    if (valueLength < 1) {
      evt.target.setCustomValidity(requiredMessage);
    } else if (valueLength < MIN_NAME_LENGTH) {
      evt.target.setCustomValidity(minLengthMessage + (MIN_NAME_LENGTH - valueLength) + ' симв.');
    } else if (valueLength > MAX_NAME_LENGTH) {
      evt.target.setCustomValidity(maxLengthMessage + (valueLength - MAX_NAME_LENGTH) + ' симв.');
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
