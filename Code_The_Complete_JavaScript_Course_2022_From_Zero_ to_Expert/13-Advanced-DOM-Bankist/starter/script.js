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
