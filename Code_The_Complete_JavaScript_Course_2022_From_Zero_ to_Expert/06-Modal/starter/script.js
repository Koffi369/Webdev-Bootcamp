'use strict';

const modalButtuns = document.querySelectorAll('.show-modal');
console.log(modalButtuns);

const modal = document.querySelector('.modal');

const overlay = document.querySelector('.overlay');

const buttCloseModal = document.querySelector('.close-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < modalButtuns.length; i++) {
  modalButtuns[i].addEventListener('click', openModal);
}

overlay.addEventListener('click', closeModal);

buttCloseModal.addEventListener('click', closeModal);

document.addEventListener('keydown', function (event) {
  //   console.log(event);
  console.log(event.key);

  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
