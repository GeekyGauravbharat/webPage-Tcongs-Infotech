// Basic contact form handling (prevents page reload on submit)
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thanks! Your message has been noted. (Connect this form to a backend or form service to actually send it.)");
    form.reset();
  });
});
