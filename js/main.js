// Tag filtering for videos
document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll("#filter-bar button");
  const videoCards = document.querySelectorAll(".video-card");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const tag = btn.getAttribute("data-tag");

      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      videoCards.forEach((card) => {
        if (tag === "all" || card.dataset.tag === tag) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});
