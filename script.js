// function for register
const register = document.querySelector(".register-btn");
const registerSection = document.querySelector(".register-section");
const crossBtn = document.querySelector(".cross-icon");

register.addEventListener("click", () =>
  registerSection.classList.add("register-pop-up")
);

crossBtn.addEventListener("click", () =>
  registerSection.classList.remove("register-pop-up")
);

// function for interaction in form
const email = document.querySelector(".email");
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

email.addEventListener("input", inputEmail);

function inputEmail(e) {
  const input = e.target.value;
  if (input && /(^\w.*@\w+\.\w)/.test(input)) {
    alert("Wrong Email");
  }
}
