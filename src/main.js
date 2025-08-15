const faqItem = document.querySelectorAll('.faq-content__wrapper');

faqItem.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('opened');
  });
});
