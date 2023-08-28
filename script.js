function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const skillsButton = document.getElementById("skillsButton");
const experienceButton = document.getElementById("experienceButton");
const skillsContent = document.getElementById("skillsContent");
const experienceContent = document.getElementById("experienceContent");

skillsButton.addEventListener("click", () => {
  skillsContent.style.display = "block";
  experienceContent.style.display = "none";
  document.getElementById("content").style.display = "block";
  experienceButton.classList.remove("active"); // Remove active class from Experience button
  skillsButton.classList.add("active"); // Add active class to Skills button
});

experienceButton.addEventListener("click", () => {
  skillsContent.style.display = "none";
  experienceContent.style.display = "block";
  document.getElementById("content").style.display = "block";
  skillsButton.classList.remove("active"); // Remove active class from Skills button
  experienceButton.classList.add("active"); // Add active class to Experience button
});

