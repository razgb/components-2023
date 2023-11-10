const sectionButton = document.querySelector(".section-button");

const toggleTag = function (e) {
  const tag = e.target.closest(".custom-btn")?.querySelector(".tag");
  if (!tag) return;
  console.log(tag);

  tag.classList.toggle("active");
};

sectionButton.addEventListener("mouseover", toggleTag);
sectionButton.addEventListener("mouseout", toggleTag);
