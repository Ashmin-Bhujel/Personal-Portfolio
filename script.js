// Navigation
const pageHeading = document.querySelector("#page-heading");
const homeBtn = document.querySelector("#home-btn");
const aboutMeBtn = document.querySelector("#about-me-btn");
const skillsBtn = document.querySelector("#skills-btn");
const photographsBtn = document.querySelector("#photographs-btn");
const contactBtn = document.querySelector("#contact-btn");

// Content
const content = document.querySelector(".content");

// Event listeners
window.addEventListener("DOMContentLoaded", renderHomePage);
pageHeading.addEventListener("click", renderHomePage);
homeBtn.addEventListener("click", renderHomePage);
aboutMeBtn.addEventListener("click", renderAboutMePage);
skillsBtn.addEventListener("click", renderSkillsPage);
photographsBtn.addEventListener("click", renderPhotographsPage);
contactBtn.addEventListener("click", renderContactPage);

// Functions
// Renderer
function Renderer(page) {
  const XHR = new XMLHttpRequest();
  XHR.open("GET", page, true);
  XHR.send();

  XHR.onload = function () {
    if (this.status === 304) {
      return;
    } else if (this.status === 200) {
      content.innerHTML = this.response;
    }
  };
}

function renderHomePage() {
  Renderer("./components/home.txt");
}

function renderAboutMePage() {
  Renderer("./components/about-me.txt");
}

function renderSkillsPage() {
  Renderer("./components/skills.txt");
}

function renderPhotographsPage() {
  Renderer("./components/photographs.txt");
}

function renderContactPage() {
  Renderer("./components/contact.txt");

  setTimeout(() => {
    const form = document.querySelector("form");
    let firstName = document.querySelector("#first-name");

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      alert(
        `Thank you ${firstName.value} for your message will get in touch with you soon.`
      );
    });
  }, 500);
}
