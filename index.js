const buttons = document.querySelectorAll('.js-formToggle');

buttons.forEach(btn => {
  btn.addEventListener('click', toggleForm);
});

var firstClick = true;

function toggleForm(e) {
  if (!firstClick) {
    document.querySelector('.js-imageAnimate').classList.toggle('animate');
    document.querySelector('.js-imageAnimate').classList.toggle('animateOut');

    document.querySelector('.js-panel__content').classList.toggle('animate');
    document.querySelector('.js-panel__content').classList.toggle('animateOut');
  } else {
    firstClick = false;
    document.querySelector('.js-imageAnimate').classList.toggle('animate');
    document.querySelector('.js-panel__content').classList.toggle('animate');
  }
}
