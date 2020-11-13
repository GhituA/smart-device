'use strict';

(function () {

  var footer = document.querySelector('.page-footer');
  var footerNav = footer.querySelector('.footer-nav');
  var footerNavLinks = footerNav.querySelector('.footer-nav__links');
  var footerNavBtn = footerNav.querySelector('.footer-nav__toggle');
  var footerContacts = footer.querySelector('.footer-contacts');
  var footerContactsInfo = footerContacts.querySelector('.footer-contacts__info');
  var footerContactsBtn = footerContacts.querySelector('.footer-contacts__toggle');

  var onAccordionOpen = function (btn, btnclass, info, infoclass) {
    btn.classList.add(btnclass);
    info.classList.remove(infoclass);

  };

  var onAccordionClose = function (btn, btnclass, info, infoclass) {
    btn.classList.remove(btnclass);
    info.classList.add(infoclass);
  };

  var setAccordionActive = function () {
    if (footerNavLinks) {
      footerNavLinks.classList.add('footer-nav__links--closed');
    }

    if (footerContactsInfo) {
      footerContactsInfo.classList.add('footer-contacts__info--closed');
    }

    if (footerNav && footerNavBtn) {
      footerNavBtn.classList.remove('footer-nav__toggle--hidden');
      footerNavBtn.addEventListener('click', function (evt) {
        evt.preventDefault();

        if (footerNavBtn.classList.contains('footer-nav__toggle--open')) {
          onAccordionClose(footerNavBtn, 'footer-nav__toggle--open', footerNavLinks, 'footer-nav__links--closed');
        } else {
          onAccordionOpen(footerNavBtn, 'footer-nav__toggle--open', footerNavLinks, 'footer-nav__links--closed');
        }
      });
    }

    if (footerContactsInfo && footerContactsBtn) {
      footerContactsBtn.classList.remove('footer-contacts__toggle--hidden');
      footerContactsBtn.addEventListener('click', function (evt) {
        evt.preventDefault();

        if (footerContactsBtn.classList.contains('footer-contacts__toggle--open')) {
          onAccordionClose(footerContactsBtn, 'footer-contacts__toggle--open', footerContactsInfo, 'footer-contacts__info--closed');
        } else {
          onAccordionOpen(footerContactsBtn, 'footer-contacts__toggle--open', footerContactsInfo, 'footer-contacts__info--closed');
        }
      });
    }

  };

  setAccordionActive();
})();
