// Define portfolio details in an object
const portfolioDetails = {
  metadata: [{ title: "Ashwini Portfolio" }],
  initialDetails: [
    {
      Name: "Ashwini ",
      Role: "Web Developer",
      subtitle: ``,
      blobimageFullpath: "assets/img/ashwini.png",
      resumeLink:
        "assets/files/ASHWINI RESUME 2025.pdf",
    },
  ],

  SocialLinks: [
    {
      github: "https://github.com/ASHWINIRAJAMANICKAM",
      Gmail: "#",
      linkedin: "https://www.linkedin.com/in/ashwini-r-9189102b2/",
      facebook: "#",
      instagram: "https://www.instagram.com/ashaug_12/",
      twitter: "#",
    },
  ],
  AboutMe: [
    {
      picsrc: "about",

      alt: "Profile image",
      Name: "Ashwini",
      AboutMe: `I'm a passionate web developer with an artistic flair for design. I create visually engaging and user-friendly websites that stand out in the digital world. My strong communication skills in both writing and verbal communication allow me to collaborate effectively and deliver high-quality projects.
Whether it's coding or brainstorming ideas, I'm always striving to enhance my skills and bring fresh ideas to life. I believe in continuous learning and keeping up-to-date with the latest trends in the tech world.`,
    },
  ],
  education: [
    {
      title: "Msc in Information technology",
      date: "2023 - 2025",
      institution: "University of madras ",
      description:
        "I'm completed my Master's in Information Technology, focusing on web development, advanced algorithms, and modern computing technologies.",
    },
    {
      title: " Bachelor's in Computer Science",
      date: "2020 - 2023",
      institution: "St. Josephs College of Arts and Science",
      description:
        "Completed my undergraduate degree in Computer Science, with a focus on web development, data structures, and problem-solving through academic and extracurricular projects.",
    },
    {
      title: " 12th Grade",
      date: "2019 - 2020",
      institution:
        "St. Mary's Matriculation Higher Secondary School, Cuddalore",
      description:
        "I completed my high school education with a focus on Science and Mathematics, excelling in subjects like Physics and Computer Science. My high school years sparked my interest in technology and coding, which led me to pursue further studies in this field.",
    },
    // {
    //   title: "Certificate in Web Development",
    //   date: "2023",
    //   institution: "Online Course (Udemy)",
    //   description:
    //     "I completed a specialized online course in Web Development, which included learning HTML, CSS, JavaScript, and other modern frameworks. This certification further strengthened my web development skills and prepared me for building modern web applications.",
    // },
  ],
  skills: [
    {
      Professional_Skills: [
        " With a deep understanding of both design and development, I’m able to bring my creative ideas to life while ensuring the end product  is both functional and aesthetically pleasing.",
      ],
    },
    {
      Techskills: [
        { name: "HTML5", percentage: "95%", icon: "bx bxl-html5" },
        { name: "CSS3", percentage: "85%", icon: "bx bxl-css3" },
        { name: "JavaScript", percentage: "80%", icon: "bx bxl-javascript" },
        { name: "UX/UI", percentage: "90%", icon: "bx bxs-paint" },
        { name: "Wordpress", percentage: "80%", icon: "bx bxs-paint" },
      ],
    },
  ],
  work: [
    "assets/img/work1.jpg",
    "assets/img/work2.jpg",
    "assets/img/work3.jpg",
    "assets/img/work4.jpg",
    "assets/img/work5.jpg",
    "assets/img/work6.jpg",
  ],
  projects: [
    {
      title: "Portfolio Website",

      description:
        "A responsive personal portfolio website to showcase my skills and projects.",
      link: "https://github.com/ASHWINIRAJAMANICKAM/Portfolio",
      techStack: "HTML,CSS,JAVASCRIPT",
    },
    {
      title: "RTO Trouver",

      description:
        "Developed a user-friendly e-commerce platform with secure payment integration.",
      link: "https://github.com/ASHWINIRAJAMANICKAM/Anime-recommendation-Engine-using-ML",
      techStack: "HTML,CSS,JAVASCRIPT",
    },
    {
      title: "Smart Wall Painter",

      description:
        "Created a full-stack blog application with real-time data management.",
      link: "https://github.com/ASHWINIRAJAMANICKAM/wall-painter",
      techStack: "HTML,CSS,JAVASCRIPT,Bootstrap,Python,Flask",
    },
  ],
};
// portfolioDetails.skills[1].Techskills.map((skill) => console.log(skill.name));

document.getElementById("resume").href =
  portfolioDetails.initialDetails[0].resumeLink;

// DocumentTitle
document.title = portfolioDetails.metadata[0].title;
// Dynamically update Name and Role

const homeTitle = document.querySelector(".home__title_name");
const Role = document.querySelector(".Role");
const homesubtitle = document.querySelector(".home__subtitle");
// const homeBlobImg = document.querySelector(".home__blob-img");
// homeBlobImg.href = portfolioDetails.initialDetails[0].blobimageFullpath;
homeTitle.innerHTML = portfolioDetails.initialDetails[0].Name;
homesubtitle.innerHTML = portfolioDetails.initialDetails[0].subtitle;
Role.innerHTML = portfolioDetails.initialDetails[0].Role;

// Dynamically update Social LInks
const homesocial = document.querySelector(".home__social");
homesocial.innerHTML = ` <a href="${portfolioDetails.SocialLinks[0].linkedin}" class="home__social-icon"
            ><i class="bx bxl-linkedin"></i
          ></a>
          <a href="${portfolioDetails.SocialLinks[0].github}" class="home__social-icon"><i class="bx bxl-github"></i></a>
          
          <a href="${portfolioDetails.SocialLinks[0].instagram}" class="home__social-icon"
            ><i class="bx bxl-instagram"></i
          ></a>`;

const footersocial = document.querySelector(".footer");
footersocial.innerHTML = `<p class="footer__title">${portfolioDetails.initialDetails[0].Name}</p>
      <div class="footer__social">
      
        <a href="${portfolioDetails.SocialLinks[0].instagram}"  target="_blank" class="footer__icon"><i class="bx bxl-instagram"></i></a>
       
        <a href="${portfolioDetails.SocialLinks[0].github}"  target="_blank" class="footer__icon"><i class="bx bxl-github"></i></a>
        <a href="${portfolioDetails.SocialLinks[0].linkedin}"  target="_blank" class="footer__icon"><i class="bx bxl-linkedin"></i></a>
      </div>
      <p class="footer__copy">&#169; 2024 ${portfolioDetails.initialDetails[0].Name}R. All rights reserved</p>`;

// Dynamically update Abouts

const About = document.querySelector("#about");

About.innerHTML = `
 <h2 class="section-title">About Me</h2>

        <div class="about__container bd-grid">
          <div class="about__img">
            <img src="assets/img/${portfolioDetails.AboutMe[0].picsrc}.png" alt="about"/>
          </div>

          <div>
            <h2 class="about__subtitle">I'm ${portfolioDetails.AboutMe[0].Name}</h2>
            <p class="about__text">
            ${portfolioDetails.AboutMe[0].AboutMe}
            </p>
           
          </div>
        </div>`;

// Dynamically update Education Section
const educationContainer = document.querySelector(".education__container");
educationContainer.innerHTML = portfolioDetails.education
  .map(
    (edu) => `
      <div class="education__card">
        <div class="education__header">
          <h3 class="education__title">${edu.title}</h3>
          <span class="education__date">${edu.date}</span>
        </div>
        <p class="education__institution">${edu.institution}</p>
        <p class="education__description">${edu.description}</p>
      </div>
    `
  )
  .join("");

// Dynamically update Skills Section
const skillsContainer = document.querySelector(".skills__container > div");
skillsContainer.innerHTML = `<h2 class="skills__subtitle">Professional Skills</h2>
<p class="skills__text">
  ${portfolioDetails.skills[0].Professional_Skills}
</p>`;
skillsContainer.innerHTML += portfolioDetails.skills[1].Techskills.map(
  (skill) => `
    
      <div class="skills__data">
        <div class="skills__names">
          <i class="${skill.icon} skills__icon"></i>
          <span class="skills__name">${skill.name}</span>
        </div>
        <div class="skills__bar" style="width:${skill.percentage}"></div>
        <div>
          <span class="skills__percentage">${skill.percentage}</span>
        </div>
      </div>
    `
).join("");

// Dynamically update Work Section
const workContainer = document.querySelector(".work__container");
workContainer.innerHTML = portfolioDetails.projects
  .map(
    (proj) => `
      <div class="work__card">
  <div><img src="${portfolioDetails.work[0]}" alt="Project Image" class="work__image"></div>
  <div class="work__header">
    <h3 class="work__title">${proj.title}</h3>
  </div>
  <p class="work__description">${proj.description}</p>
  <p class="work__tech-stack">Tech Stack: ${proj.techStack}</p>
  <a href="${proj.link}"  target="_blank" class="work__button">View More</a>
      </div>
    `
  )
  .join("");

function sendEmail() {
  // Get form field values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Validate if all fields are filled out
  if (!name || !email || !message) {
    alert("Please fill out all fields.");
    return;
  }

  // Construct the mailto URL
  const subject = encodeURIComponent("Message from " + name);
  const body = encodeURIComponent(
    "Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message
  );

  // Create a mailto link
  const mailtoLink = `mailto:recipient@example.com?subject=${subject}&body=${body}`;

  // Open the default email client with pre-filled details
  window.location.href = mailtoLink;
}
