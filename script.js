const formElements = document.querySelectorAll("form button");

formElements.forEach(button => {
  button.addEventListener("click", (event) => {
    // Prevent the default behavior of the button.
    event.preventDefault();
  });
});

// tab BTB scroll in harizontally
const scrollSection = document.querySelector('.scroll-section');

  scrollSection.addEventListener('wheel', (event) => {
      scrollSection.scrollLeft += event.deltaY;
      event.preventDefault();
  });