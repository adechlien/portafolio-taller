let darkMode = false;

document.addEventListener("DOMContentLoaded", function() {
  let theme = document.getElementById("change-theme");
  theme.addEventListener("click", changeTheme);
});

function changeTheme() {
  if (darkMode) {
    lightTheme();
  } else {
    darkTheme();
  }
}

function darkTheme() {
  let titles = document.querySelectorAll("h2");
  for (let i = 0; i < titles.length; i++) { 
    titles[i].style.color = '#8aa9f1';
  }

  // Header
  let header = document.querySelector("header");
  let headerLinks = document.querySelectorAll("header a");
  header.style.backgroundColor = '#224086';
  for (let i = 0; i < headerLinks.length; i++) {
    headerLinks[i].style.color = '#dde3f1';
  }

  // Hero
  let hero = document.querySelector(".hero-section");
  let heroDescription = document.querySelector(".hero-section .hero-description");
  hero.style.backgroundColor = '#224086';
  heroDescription.style.color = '#dde3f1';

  // About
  let about = document.querySelector(".about-section");
  let aboutDescription = document.querySelector(".about-section .about-description");
  about.style.backgroundColor = '#224086';
  aboutDescription.style.color = '#dde3f1';

  // Skills
  let skills = document.querySelector(".skills-section");
  let skillsDescription = document.querySelectorAll(".skills-section .skill p");
  skills.style.backgroundColor = '#224086';
  for (let i = 0; i < skillsDescription.length; i++) {
    skillsDescription[i].style.color = '#dde3f1';
  }

  // Projects
  let projects = document.querySelector(".projects-section");
  let projectDescription = document.querySelectorAll(".projects-section .project a p");
  projects.style.backgroundColor = '#224086';
  for (let i = 0; i < projectDescription.length; i++) {
    projectDescription[i].style.color = '#dde3f1';
  }

  // Footer
  let footer = document.querySelector("footer");
  let footerLinks = document.querySelectorAll("footer a");
  footer.style.backgroundColor = '#152753';
  for (let i = 0; i < footerLinks.length; i++) {
    footerLinks[i].style.color = '#dde3f1';
  }

  darkMode = true;
}

function lightTheme() {
  // Header
  let header = document.querySelector("header");
  let headerLinks = document.querySelectorAll("header a");
  header.style.backgroundColor = '#dde3f1';
  for (let i = 0; i < headerLinks.length; i++) {
    headerLinks[i].style.color = '#224086';
  }

  // Hero
  let hero = document.querySelector(".hero-section");
  let heroDescription = document.querySelector(".hero-section .hero-description");
  hero.style.backgroundColor = '#dde3f1';
  heroDescription.style.color = '#224086';

  // About
  let about = document.querySelector(".about-section");
  let aboutDescription = document.querySelector(".about-section .about-description");
  about.style.backgroundColor = '#dde3f1';
  aboutDescription.style.color = '#224086';

  // Skills
  let skills = document.querySelector(".skills-section");
  let skillsDescription = document.querySelectorAll(".skills-section .skill p");
  skills.style.backgroundColor = '#dde3f1';
  for (let i = 0; i < skillsDescription.length; i++) {
    skillsDescription[i].style.color = '#224086';
  }

  // Projects
  let projects = document.querySelector(".projects-section");
  let projectDescription = document.querySelectorAll(".projects-section .project a p");
  projects.style.backgroundColor = '#dde3f1';
  for (let i = 0; i < projectDescription.length; i++) {
    projectDescription[i].style.color = '#224086';
  }

  // Footer
  let footer = document.querySelector("footer");
  let footerLinks = document.querySelectorAll("footer a");
  footer.style.backgroundColor = '#7498ee';
  for (let i = 0; i < footerLinks.length; i++) {
    footerLinks[i].style.color = '#dde3f1';
  }

  darkMode = false;
}