'use strict'


$(document).ready(function () {
  $('.column-popular').slick({
    variableWidth: true,
    slidesToScroll: 1,
    touchThreshold: 20,
    speed: 400,
    infinite: true,
    adaptiveHeight: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          dots: false,
          autoplay: false,
          pauseOnHover: false,
          waitForAnimate: false,
        }
      }]
  });
});



// ============ ============ ============ ============ ============ ============ ============ 


let mainBlock = document.querySelector('.main')
let footerBlock = document.querySelector('.footer')
let bodyEl = document.body;
let mainHeader = document.querySelector('.header')
let burger = document.querySelector('.hamburger');
let menuElement = document.querySelector('.menu');
let headerContainer = document.querySelector('.header__container')
let headerContainerWidth = headerContainer.clientWidth;
let headerCartIcon = document.querySelector('.header__cart');
let headerAvatarIcon = document.querySelector('.header__avatar');
let menuList = document.querySelector('.menu__list');
let headerActionsIcons = document.querySelector('.header__actions')
let formSearch = document.querySelector('.header__search');
let searchIcon = document.querySelector('.header__search-icon');
let headerForm = document.querySelector('.header__form')
let mainSection = document.querySelector('.main__page');
let wrapper = document.querySelector('.wrapper')
let searchPopWrapper = document.querySelector('.search-pop-up-wrapper');
let headerContant = document.querySelector('.header__contant');
// ====================================================================================
let mainContainer = document.querySelector('.main__container');
let hamburgerChildren = document.querySelectorAll('.hamburger__bar');


function toggleClass(element, className) {
  element.classList.toggle(className);
}

window.addEventListener('DOMContentLoaded', () => {
  searchIcon.addEventListener('click', inputAppear);
  function inputAppear() {
    if (window.innerWidth > 767) {
      if (formSearch.classList.contains('active')) {
        setTimeout(function () {
          formSearch.classList.remove('active');
        }, 800);
        formSearch.classList.add('animation-back');
      } else {
        formSearch.classList.add('active')
        formSearch.classList.remove('animation-back');
      }
    }
  }

  //?Використання классу замість прописування стилів на пряму.

  window.addEventListener('resize', formDelete);
  function formDelete() {
    if (window.innerWidth <= 767) {
      formSearch.classList.add('hidden');
    } else if (window.innerWidth >= 767) {
      formSearch.classList.remove('hidden');
    }
  };
});



burger.addEventListener('click', burgerClick)
function burgerClick(e) {
  if (e.type === 'click') {
    if (menuElement.classList.contains('active')) {
      menuElement.classList.remove('active');
      mainHeader.style.cssText = `
            height: none;
            `;
      bodyEl.style.cssText = `
            overflow: auto;
            `;
    } else {
      menuElement.classList.add('active');
      // mainHeader.style.cssText = `height: 100vh;`;
      bodyEl.style.cssText = `
            overflow: hidden;
            `;
      closeSearchPop()
    }
  }
}

function resetMenu() {
  if (window.innerWidth > 767 && menuElement.classList.contains('active')) {
    menuElement.classList.remove('active');
    hamburgerChildren.forEach(hamburgerEl => {
      hamburgerEl.classList.remove('active');
    })
  }
}

function closeSearchPop() {
  searchPop.classList.remove('show-pop-up');
  searchPopWrapper.classList.remove('active');
  searchPop.style.display = 'none';
}

burger.addEventListener('click', burgerClick);
window.addEventListener('resize', resetMenu);

// ? Розбив по ф-ціям

//Анімація паличок бургера.
burger.addEventListener('click', burgerAnimation);
function burgerAnimation() {
  let burgerChildren = burger.children;
  Array.from(burgerChildren).forEach((child) => {
    child.classList.toggle('active');
  });
}

//Добалвення екнишс тільки на сторінки які більше за розміром аніж 767
function addRemoveActions() {
  if (window.innerWidth > 767) {
    headerActionsIcons.style.cssText = 'display: flex';
  } else {
    headerActionsIcons.style.cssText = '';
  }
}

window.addEventListener('load', addRemoveActions);
window.addEventListener('resize', addRemoveActions);

// ==============================

// Получаем ссылки на элементы
const mainImage = document.querySelector('.main__image');
const bodyMain = document.querySelector('.body-main');

// Функция для перемещения элемента
document.addEventListener('DOMContentLoaded', function () {
  if (window.innerWidth < 992) {
    bodyMain.appendChild(mainImage);
  } else {
    mainContainer.appendChild(mainImage);
  }
});

window.addEventListener('resize', function () {
  if (window.innerWidth < 992) {
    bodyMain.appendChild(mainImage);
  } else {
    mainContainer.appendChild(mainImage);
  }
});


//бекграунд для хедера при кліку на бургер.



let manuTab = document.querySelector('.footer-menu-list');
let menuCategory = document.querySelector('.footer-categories-list');
let menuCompany = document.querySelector('.footer-company-list');

let footerMenuTitle = document.querySelector('.list-block__title_menu');
let footerCategTitle = document.querySelector('.list-block__title_categ');
let footerCompanyTitle = document.querySelector('.list-block__title_company');

window.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth > 600 && window.innerWidth < 992) {
    footerCategTitle.addEventListener('click', categTitle);
    footerCompanyTitle.addEventListener('click', companyTitle);
    footerMenuTitle.addEventListener('click', menuTitle);
  }
});


function categTitle() {
  menuCategory.classList.toggle('open-list');
}

function companyTitle() {
  menuCompany.classList.toggle('open-list');
}

function menuTitle() {
  manuTab.classList.toggle('open-list');
}


window.addEventListener('resize', () => {
  if (window.innerWidth > 600 && window.innerWidth < 992) {
    footerCategTitle.addEventListener('click', categTitle);
    footerCompanyTitle.addEventListener('click', companyTitle);
    footerMenuTitle.addEventListener('click', menuTitle);
  } else {
  }
});






// ================================================================================================================
let searchPop = document.querySelector('.search-pop-up');

function removeClasses() {
  searchPop.classList.remove('show-pop-up');
  searchPopWrapper.classList.remove('active')
  setTimeout(function () {
    searchPop.style.display = 'none';
  }, 500);
}

function hideSearchPop() {
  setTimeout(function () {
    searchPop.style.display = 'none';
  }, 500);
}

function showSearchPop() {
  searchPop.classList.add('show-pop-up');
  searchPop.style.display = 'block';
  searchPopWrapper.classList.add('active');
}

searchIcon.addEventListener('click', (e) => {
  if (searchPop.classList.contains('show-pop-up')) {
    removeClasses();
    hideSearchPop();
  } else if (window.innerWidth <= 767 && e.type === 'click') {
    searchPop.classList.add('show-pop-up');
    searchPop.style.display = 'block';
    if (searchPop.classList.contains('show-pop-up')) {
      searchPopWrapper.classList.add('active');
      if (searchPopWrapper.classList.contains('active')) {
        menuElement.classList.remove('active');
        hamburgerChildren.forEach(hamburgerEl => {
          hamburgerEl.classList.remove('active');
        })
      }
    }
  } else {
    removeClasses();
    hideSearchPop();
  }
});

window.addEventListener('resize', (e) => {
  if (window.innerWidth > 767) {
    removeClasses();
    hideSearchPop();
  }
});

window.addEventListener('click', (e) => {
  if (
    e.target === searchPopWrapper ||
    e.target === searchIcon ||
    e.target === headerContant
  ) {
    removeClasses();
    hideSearchPop();
  }
})


// ======================================MAIL SUCCESS POP-UP==============================================================

let inputMail = document.querySelector('.input-mail');
let emailIcon = document.querySelector('.email-icon');
let btnForm = document.querySelector('.btn-form');

inputMail.addEventListener('keyup', () => {
  let pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (inputMail.value === '') {
    console.log('input is empty');
  }
  if (inputMail.value.match(pattern)) {
    emailIcon.classList.replace('fa-circle-xmark', 'fa-circle-check')
  } else if (!inputMail.value.match(pattern)) {
    emailIcon.classList.replace('fa-circle-check', 'fa-circle-xmark')
  }
});


// }
btnForm.addEventListener('click', (e) => {
  if (emailIcon.classList.contains('fa-circle-xmark')) {
    e.preventDefault();
  }
});


inputMail.addEventListener('keyup', () => {
  if (emailIcon.classList.contains('fa-circle-xmark')) {
    inputMail.style.cssText = `
      border: 2px;
      border-right: 0px;
      border-color: rgb(229, 0, 0);
      border-style: solid;`;
  };
});

inputMail.addEventListener('keyup', () => {
  if (emailIcon.classList.contains('fa-circle-check')) {
    inputMail.style.cssText = `
      border: 2px;
      border-right: 0px;
      border-color: rgb(0, 161, 0);
      border-style: solid;`;
  };
});

// ===================================Mailing-List===================================

let inputFooter = document.querySelector('.input-mail-footer');
let iconInputFooter = document.querySelector('.email-icon-footer');
let btnFooterInput = document.querySelector('.subsc-footer__btn');

function handleInputKeyUp(inputElement, emailIconElement) {
  let pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (inputElement.value === '') {
    console.log('input is empty');
  }
  if (inputElement.value.match(pattern)) {
    emailIconElement.classList.replace('fa-circle-xmark', 'fa-circle-check');
    inputElement.style.cssText = `
      border: 2px;
      border-right: 0px;
      border-color: rgb(0, 161, 0);
      border-style: solid;`;
  } else if (!inputElement.value.match(pattern)) {
    emailIconElement.classList.replace('fa-circle-check', 'fa-circle-xmark');
    inputElement.style.cssText = `
      border: 2px;
      border-right: 0px;
      border-color: rgb(229, 0, 0);
      border-style: solid;`;
  }
}

inputMail.addEventListener('keyup', () => {
  handleInputKeyUp(inputMail, emailIcon);
});

inputFooter.addEventListener('keyup', () => {
  handleInputKeyUp(inputFooter, iconInputFooter);
});
