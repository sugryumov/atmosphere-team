const buttons = document.querySelectorAll('.button__anker');

if (buttons) {
  buttons.forEach(button => {
    button.addEventListener('click', scrollToAnker);
  });
}

function scrollToAnker(event) {
  const anker = event.target.dataset.anker;
  document.getElementById(anker).scrollIntoView({
    behavior: 'smooth',
  });
}
