'use strict';

(function () {
  var EVT_KEY_ESCAPE = 'Escape';
  var navCbBtn = document.querySelector('.head-contacts__button');
  var popup = document.querySelector('.popup');
  var closeBtn = popup.querySelector('.popup__esc');

  var onPopupClose = function () {
    popup.classList.add('popup--hidden');
    closeBtn.removeEventListener('click', onPopupClose);
    document.removeEventListener('keydown', oneEscPress);
    popup.removeEventListener('click', onPopupClose);
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

  if (navCbBtn) {
    navCbBtn.addEventListener('click', function (evt) {
      evt.preventDefault();
      popup.classList.remove('popup--hidden');
      closeBtn.addEventListener('click', onPopupClose);
      document.addEventListener('keydown', oneEscPress);
      popup.addEventListener('click', onOverlayClick);
    });
  }


})();
