function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}



///EXPERIENCE
document.addEventListener("DOMContentLoaded", function () {
  const experienceData = [
    {
      jobName: "VN Accounting, Tax, & Insurance Services",
      date: "Jan 2023 - Apr 2023",
      description: "<b>Data Entry</b> -  Using QuickBooks, ensure precise recording of deposits and checkwriting. Improved efficiency by 30% through streamlined data management practices, contributing to enhanced financial record accuracy.",
    },
    {
      jobName: "K&G Fashion Superstore",
      date: "Sep 2019 - Present",
      description: [
        "<b>Cashier</b> -  Proficient in customer service, optimizing transaction efficiency through computerized point-of-sale systems. Maintained accurate sales records, resulting in a 20% reduction in processing time. <br><b>Retailer</b> - Experienced in stock organization, and utilizing computer systems to ensure the availability of additional items in the receiving department. <br><b>Receiving</b> - Experienced in receiving, counting, and inspecting new goods deliveries. Sensor the items and prepare them for sale."
      ],
    },
    // Add more experience data as needed
  ];

  const buttonOne = document.getElementById("buttonOne");
  const buttonTwo = document.getElementById("buttonTwo");
  const contentOne = document.getElementById("contentOne");
  const contentTwo = document.getElementById("contentTwo");

  buttonOne.textContent = experienceData[0].jobName;
  buttonTwo.textContent = experienceData[1].jobName;

  buttonOne.addEventListener("click", () => {
    buttonOne.classList.add("active");
    buttonTwo.classList.remove("active");
    displayExperience(0);
  });

  buttonTwo.addEventListener("click", () => {
    buttonOne.classList.remove("active");
    buttonTwo.classList.add("active");
    displayExperience(1);
  });

  function displayExperience(index) {
    const data = experienceData[index];
    contentOne.innerHTML = `
      <h2>${data.jobName}</h2>
      <p>${data.date}</p>
      <br>
      <p>${data.description}</p>
    `;

    contentTwo.innerHTML = ""; // Clear contentTwo
  }

  // Initialize with the first experience data
  displayExperience(0);
});



///PROJECTS
document.addEventListener("DOMContentLoaded", function () {
  const projects = [
    {
      title: "HTML Email Into Gmail",
      imgSrc: "./assets/project-12.png",
      githubUrl: "https://github.com/minhle28/",
    },
    {
      title: "OWO Bot Discord - Auto Play",
      imgSrc: "./assets/project-11.png",
      githubUrl: "https://github.com/minhle28/",
    },
    {
      title: "GSU ReviewHub",
      imgSrc: "./assets/project-10.png",
      githubUrl: "https://github.com/minhle28/GSU_ReviewHub",
    },
    {
      title: "Handwritten Digit Prediction",
      imgSrc: "./assets/project-9.png",
      githubUrl: "https://github.com/minhle28/Handwritten_Digit_Prediction_Web",
    },
    {
      title: "Visualock App",
      imgSrc: "./assets/project-8.png",
      githubUrl: "https://github.com/minhle28/SWE",
    },
    {
      title: "Bad Habits Web",
      imgSrc: "./assets/project-7.png",
      githubUrl: "https://github.com/minhle28/Bad_Habits_Web",
    },
    {
      title: "TrivItUp ",
      imgSrc: "./assets/project-6.png",
      githubUrl: "https://github.com/minhle28/TrivItUp",
    },
    {
      title: "OnlineShop",
      imgSrc: "./assets/project-5.png",
      githubUrl: "https://github.com/minhle28/Online_Shop",
    },
    {
      title: "File Manager",
      imgSrc: "./assets/project-4.png",
      githubUrl: "https://github.com/minhle28/File_Manager_App",
    },
    {
      title: "Conway's Game",
      imgSrc: "./assets/project-3.png",
      githubUrl: "https://github.com/minhle28/Conway-s_Game_Of_Life",
    },
    {
      title: "Jeopardy",
      imgSrc: "./assets/project-2.png",
      githubUrl: "https://github.com/minhle28/Jeopardy_Game",
    },
    {
      title: "Quiz Game",
      imgSrc: "./assets/project-1.png",
      githubUrl: "https://github.com/minhle28/Quiz_Game",
    },
    {
      title: "Leaf Chat",
      imgSrc: "./assets/project-0.png",
      githubUrl: "https://github.com/minhle28/Leaf_Chat_App",
    },
  ];

  const projectContainer = document.getElementById("project-container");

  projects.forEach((project) => {
    const projectHTML = `
      <div class="details-container color-container">
        <div class="article-container">
          <img src="${project.imgSrc}" alt="${project.title}" class="project-img" />
        </div>
        <h2 class="experience-sub-title project-title">${project.title}</h2>
        <div class="btn-container">
          <button class="btn btn-color-2 project-btn" onclick="location.href='${project.githubUrl}'">
            Github
          </button>
        </div>
      </div>
    `;
    projectContainer.innerHTML += projectHTML;
  });
});


const brands = document.querySelector('ul.brands');
total_brand = brands.children.length;
document.documentElement.style.setProperty('--total-brand', total_brand);
for (let i = 0; i < total_brand; i++) {
  brands.appendChild(brands.children[i].cloneNode(true));
}