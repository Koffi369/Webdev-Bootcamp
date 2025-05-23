'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(function (elm, i, arr) {
  elm.addEventListener('click', openModal);
});

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

////////////// Video 005 Selecting ,Creating and Deleting elements

console.log(document.documentElement);

/////////// Creating
const Message = document.createElement('div');
Message.classList.add('cookie-message');

Message.innerHTML =
  'This website uses  some cookies <button class="btn btn--close-cookie" >Got it</button>';

/////////// Adding the created element to the DOM (here the heaader)

const headerel = document.querySelector('.header');

headerel.prepend(Message);

// // headerel.append(Message);
headerel.append(Message.cloneNode(true));

// headerel.before(Message);
// headerel.after(Message);

////////////// Video 006 Styles, Attributes and Classes

Message.style.backgroundColor = 'green';

console.log(getComputedStyle(Message));

console.log(getComputedStyle(Message).color);
// headerel.setAttribute('attributeName')
// headerel.getAttribute('attributeName')

console.log(Message.classList);
Message.classList.add('newclass');
Message.classList.remove('newclass');
console.log(Message.classList);

Message.classList.toggle('newclass');
console.log(Message.classList.contains('newclass'));
console.log(Message.classList);

////////////// Video 007 Implementing Smooth scroll

const scrollBtn = document.querySelector('.btn--scroll-to');
const scrollToSection = document.querySelector('#section--1');

scrollBtn.addEventListener('click', function (e) {
  scrollToSection.scrollIntoView({ behavior: 'smooth' });
});

////////////// Video 008 Types of Events and Events Handlers

const h1Elm = document.querySelector('h1');

const alertFunc = function (e) {
  alert('Video 008 Types of Events and Events Handlers ');

  h1Elm.removeEventListener('mouseenter', alertFunc);
};

h1Elm.addEventListener('mouseenter', alertFunc);

////////////// Video 011 Event delegation
const navElm = document.querySelector('.nav__links');

navElm.addEventListener('click', function (e) {
  e.preventDefault();
  // console.log(e.target);
  // console.log(e.target.href);
  if (e.target.classList.contains('nav__link')) {
    console.log(e.target);
    // const section = document.querySelector(e.target.href)
    // e.target.scrollIntoView({ behavior: 'smooth' });  //////wrong
    const toScrollToAttribute = e.target.getAttribute('href');
    console.log(toScrollToAttribute);
    const toScrollTo = document.querySelector(toScrollToAttribute);
    toScrollTo.scrollIntoView({ behavior: 'smooth' });
  }
});

////////////// Video 013 Building a Tabbed Component
const tabContainer = document.querySelector('.operations__tab-container');

const allContentToDisplay = document.querySelectorAll('.operations__content');

tabContainer.addEventListener('click', function (e) {
  console.log(e.target);

  const clicked = e.target.closest('.operations__tab');

  console.log(clicked);

  if (!clicked) return;

  const clickedNum = clicked.dataset.tab;

  console.log(clickedNum);

  const contentToDisplay = document.querySelector(
    `.operations__content--${clickedNum}`
  );

  console.log(contentToDisplay);

  allContentToDisplay.forEach(elm =>
    elm.classList.remove('operations__content--active')
  );

  if (!contentToDisplay.classList.contains('operations__content--active')) {
    contentToDisplay.classList.add('operations__content--active');
    console.log('@@@@@@@@@@@@@@@@@@@@@@@@');
  }
});

////////////// Video 014  Passing arguments to event handlers

const navbar = document.querySelector('.nav');

const opacityControlFunc = function (e, theOpacity) {
  // const clickedEl = e.target;
  // const clickedEl = e.target.closest('.nav__link');

  // console.log('clickedEl', clickedEl);

  // const clickedElSiblings = clickedEl
  //   .closest('.nav')
  //   .querySelectorAll('.nav__link');

  // console.log(clickedElSiblings);

  // clickedElSiblings.forEach(elm => {
  //   if (elm !== clickedEl) {
  //     console.log('@@@@@@@@@@@@@@@@@@@@@@@@');
  //     elm.style.opacity = 0.5;
  //   }
  // });

  if (e.target.classList.contains('nav__link')) {
    const clickedEl = e.target;
    console.log('clickedEl', clickedEl);

    const clickedElSiblings = clickedEl
      .closest('.nav')
      .querySelectorAll('.nav__link');

    console.log(clickedElSiblings);

    clickedElSiblings.forEach(elm => {
      if (elm !== clickedEl) {
        console.log('###### DEBUGGG', theOpacity);
        elm.style.opacity = theOpacity;
      }
    });
  }
};

// navbar.addEventListener('mouseover', opacityControlFunc.bind(0.5));
// navbar.addEventListener('mouseout', opacityControlFunc.bind(1));
navbar.addEventListener('mouseover', e => opacityControlFunc(e, 0.5));
navbar.addEventListener('mouseout', e => opacityControlFunc(e, 1));

////////////// Video 015 Implementing a Sticky navigation & The ScrollEvent

const Section1Coords = scrollToSection.getBoundingClientRect();

// console.log('navbarCoords.top', navbarCoords.top);

window.addEventListener('scroll', function () {
  console.log(window.scrollY);
  if (window.scrollY > Section1Coords.top) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
});
