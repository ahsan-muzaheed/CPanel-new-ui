const formElements = document.querySelectorAll("form button");

formElements.forEach(button => {
  button.addEventListener("click", (event) => {
    // Prevent the default behavior of the button.
    event.preventDefault();
  });
});