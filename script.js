console.log("Hello World");

//responsive design for nav

const hamburg = document.querySelector(".hamburg");
const linksContainer = document.querySelector(".nav_items");
const links = document.querySelectorAll(".nav_menu_item");

hamburg.addEventListener("click", () => {
  linksContainer.classList.toggle("active");
  hamburg.classList.toggle("active");
});

window.addEventListener("resize", () => {
  if (window.matchMedia("(max-width: 550px)").matches) {
    closeMenu();
  }
});

if (window.matchMedia("(max-width: 550px)").matches) {
  closeMenu();
}

function closeMenu() {
  links.forEach((link) => {
    links.addEventListener("click", () => {
      linksContainer.classList.remove("active");
      hamburg.classList.remove("active");
    });
  });
}

//end of nav respovie code

//used for successful submission

const form = document.querySelector("#form");
const submitButton = document.querySelector("#submit");

form.addEventListener("submit", (e) => {
  submitButton.disabled = true;
  e.preventDefault();
  window.location.href = window.location.origin + "/success.html";
});

// submit button did not work with when window was resized this fizxed that
window.addEventListener("resize", () => {
  if (window.matchMedia("(max-width: 550px)").matches) {
    form.addEventListener("submit", (e) => {
      submitButton.disabled = true;
      e.preventDefault();
      window.location.href = window.location.origin + "/success.html";
    });
  }
});
