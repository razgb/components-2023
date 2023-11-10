const accordion = document.querySelector(".accordion");

accordion.addEventListener("click", function (e) {
  const content = e.target.closest(".accordion-button").nextElementSibling;
  if (!content) return;

  content.classList.toggle("active");
  console.log(content);
});
