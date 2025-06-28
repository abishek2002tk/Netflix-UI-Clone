const scrollContainer = document.querySelector(".scroll-container");
const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");

// Scroll right
rightBtn.addEventListener("click", () => {
  scrollContainer.scrollBy({ left: 320, behavior: "smooth" });
});

// Scroll left
leftBtn.addEventListener("click", () => {
  scrollContainer.scrollBy({ left: -320, behavior: "smooth" });
});
