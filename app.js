//Make sidebar functional
   const sidebar = document.querySelector(".sidebar");
   function togglesidebar() {
     sidebar.classList.toggle("show");
   }
   function hideNav() {
     sidebar.classList.toggle("show");
   }
   
//select all sections from html
const about = document.getElementById("about");
const skills = document.getElementById("skills");
const projects = document.getElementById("projects");
const contact = document.getElementById("contact");
//show sections if link is clicked
//About Section
const aboutLink = document.querySelectorAll(".aboutLink");
aboutLink.forEach((link) => {
  link.addEventListener("click", () => {
    about.style.display = "block";
    skills.style.display = "none";
    projects.style.display = "none";
    contact.style.display = "none";
  });
});

//Skills Section
const skillsLink = document.querySelectorAll(".skillsLink");
skillsLink.forEach((link) => {
  link.addEventListener("click", () => {
    skills.style.display = "block";
    about.style.display = "none";
    projects.style.display = "none";
    contact.style.display = "none";
  });
});

//Projects Section
const projectsLink = document.querySelectorAll(".projectsLink");
projectsLink.forEach((link) => {
  link.addEventListener("click", () => {
    projects.style.display = "block";
    about.style.display = "none";
    skills.style.display = "none";
    contact.style.display = "none";
  });
});

//Contact Section
const contactLink = document.querySelectorAll(".contactLink");
contactLink.forEach((link) => {
  link.addEventListener("click", () => {
    contact.style.display = "block";
    projects.style.display = "none";
    about.style.display = "none";
    skills.style.display = "none";
  });
});
