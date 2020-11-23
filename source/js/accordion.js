'use strict';

(function () {

  var footer = document.querySelector('.page-footer');
  var footerNav = footer.querySelector('.footer-nav');
  var footerNavBar = footer.querySelector('.footer-nav__bar');
  var footerNavLinks = footerNav.querySelector('.footer-nav__links');
  var footerContacts = footer.querySelector('.footer-contacts');
  var footerContactsBar = footer.querySelector('.footer-contacts__bar');
  var footerContactsInfo = footerContacts.querySelector('.footer-contacts__info');

  var onNavClick = function () {
    if (footerContactsBar && footerContacts.classList.contains('footer-contacts--open')) {
      footerContacts.classList.remove('footer-contacts--open');
    }
    footerNav.classList.toggle('footer-nav--open');
  };

  var onContactsClick = function () {
    if (footerNavBar && footerNav.classList.contains('footer-nav--open')) {
      footerNav.classList.remove('footer-nav--open');
    }
    footerContacts.classList.toggle('footer-contacts--open');
  };

  if (footerNavBar && footerNavLinks) {
    footerNavBar.classList.add('footer-nav__bar--js');
    footerNav.classList.remove('footer-nav--open');

    footerNavBar.addEventListener('click', function () {
      onNavClick();
    });
  }

  if (footerContactsBar && footerContactsInfo) {
    footerContactsBar.classList.add('footer-contacts__bar--js');

    footerContactsBar.addEventListener('click', function () {
      onContactsClick();
    });
  }
})();
