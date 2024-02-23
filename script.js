const nav = document.querySelector(".nav"),
  searchIcon = document.querySelector("#searchIcon"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn");

searchIcon.addEventListener("click", () => {
  nav.classList.toggle("openSearch");
  nav.classList.remove("openNav");
  if (nav.classList.contains("openSearch")) {
    return searchIcon.classList.replace("uil-search", "uil-times");
  }
  searchIcon.classList.replace("uil-times", "uil-search");
});

navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
  nav.classList.remove("openSearch");
  searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});
document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll('.btn');
  const contents = document.querySelectorAll('.content');

  buttons.forEach(button => {
      button.addEventListener('click', () => {
          const target = button.dataset.target;
          contents.forEach(content => {
              if (content.id === target) {
                  content.style.display = 'block';
              } else {
                  content.style.display = 'none';
              }
          });
      });
  });
});