// --- function for register ---
const registerBtn = document.querySelectorAll(".register-btn");
const registerSection = document.querySelector(".register-section");
const crossBtn = document.querySelector(".cross-icon");
const formSubmitted = document.querySelector(".form-submitted");

// add pop-up
registerBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    registerSection.classList.add("register-pop-up");
  });
});

// when clicked outside form, remove the form popup
registerSection.addEventListener("click", function (e) {
  if (e.target.classList.value == "regi-container") {
    registerSection.classList.remove("register-pop-up");
  }
});

// cross button to remove popup
crossBtn.addEventListener("click", () =>
  registerSection.classList.remove("register-pop-up")
);

// --- function for interaction in form ---
const submitBtn = document.querySelector(".submit-btn");
const labels = document.querySelectorAll(".input-container label");

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
    )
    .join("");
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(e);
  formSubmitted.style.display = `block`;
  registerSection.classList.remove("register-pop-up");

  setTimeout(() => {
    formSubmitted.style.display = `none`;
  }, 1500);
});

// --- For slide in on scroll (events-section) ---
var scroll =
  window.requestAnimationFrame ||
  function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };

var elementsToShowLeft = document.querySelectorAll(".show-on-scroll");

function loop() {
  elementsToShowLeft.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.contains("left")
        ? element.classList.add("is-visible-left")
        : element.classList.add("is-visible-right");
    } else {
      element.classList.contains("left")
        ? element.classList.remove("is-visible-left")
        : element.classList.remove("is-visible-right");
    }
  });
  scroll(loop);
}
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0 && rect.bottom >= 0) ||
    (rect.bottom >=
      (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight)) ||
    (rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight))
  );
}

// --- navbar burger ---
const toggle = document.getElementById("toggle");
const nav = document.getElementById("nav");

toggle.addEventListener("click", () => nav.classList.toggle("active"));
