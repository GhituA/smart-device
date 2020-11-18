'use strict';

(function () {

  var footer = document.querySelector('.page-footer');
  var footerNav = footer.querySelector('.footer-nav');
  var footerNavBar = footer.querySelector('.footer-nav__bar');
  var footerNavLinks = footerNav.querySelector('.footer-nav__links');
  var footerNavBtn = footerNav.querySelector('.footer-nav__toggle');
  var footerContacts = footer.querySelector('.footer-contacts');
  var footerContactsBar = footer.querySelector('.footer-contacts__bar');
  var footerContactsInfo = footerContacts.querySelector('.footer-contacts__info');
  var footerContactsBtn = footerContacts.querySelector('.footer-contacts__toggle');


  if (footerNavBar && footerNav && footerNavBtn) {
    footerNavLinks.classList.add('footer-nav__links--closed');
    footerNavBtn.classList.remove('footer-nav__toggle--hidden');

    footerNavBtn.addEventListener('click', function (evt) {
      evt.preventDefault();
      footerNavBtn.classList.toggle('footer-nav__toggle--open');
      footerNavLinks.classList.toggle('footer-nav__links--closed');
    });
  }

  if (footerContactsBar && footerContactsInfo && footerContactsBtn) {
    footerContactsInfo.classList.add('footer-contacts__info--closed');
    footerContactsBtn.classList.remove('footer-contacts__toggle--hidden');

    footerContactsBtn.addEventListener('click', function (evt) {
      evt.preventDefault();
      footerContactsBtn.classList.toggle('footer-contacts__toggle--open');
      footerContactsInfo.classList.toggle('footer-contacts__info--closed');
    });
  }
})();
