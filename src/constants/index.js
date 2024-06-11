import project1 from "../assests/projects/project-1.png";
import project2 from "../assests/projects/project-2.png";
import project3 from "../assests/projects/project-3.png";
import project4 from "../assests/projects/project-4.png";

export const HERO_CONTENT = `I am a front-end developer with a strong passion for creating intuitive and visually appealing web applications. I have honed my skills in HTML, CSS, JavaScript, React.js, TypeScript, and Tailwind CSS, enabling me to deliver high-quality web solutions.I hold a B.Sc. degree from Marwari College, Ranchi, where I developed a solid foundation in computer science and web development principles.I am proficient in using Git for version control, allowing for efficient project management and collaboration. Additionally, I have experience deploying web applications using platforms like Netlify and GitHub Pages.I completed an internship with Codsoft, where I had the opportunity to apply my skills in a professional setting. Under the guidance of experienced mentors, I worked on various projects that enhanced my practical knowledge and technical expertise. Some of the notable projects includes are Landing Page, Portfolio and Calculator.`;


export const PROJECTS = [
  {
    title: "React Weather-App",
    image: project1,
    description:
      "A Real time weather app using React.js and OpenWeatherApp API for current weather data.",
    technologies: ["HTML", "CSS", "React.js", "JavaScript"],
  },
  {
    title: "House Shopping Website",
    image: project2,
    description:
      "A Responsive user-friendly frontend application which is designed to facilitate the buying, listing and carting of residential properties.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "AOS"],
  },
  {
    title: "Twitter Clone",
    image: project3,
    description:
      "A Twitter homepage clone using tailwind, ensuring responsiveness to various device widths.",
    technologies: ["HTML", "CSS", "Tailwind CSS",],
  },
  {
    title: "Portfolio",
    image: project4,
    description:
      "A Complete Responsive Portfolio which describes your educational background, skills, achievements and many more. Made by React.js and Tailwind CSS with Vite.js.",
    technologies: ["React.js", "Vite", "Tailwind CSS", "Framer Motion"],
  },
];

export const CONTACT = {
  address: "P38, Ranchi, Jharkhand, India, 825320",
  phoneNo: "+919661624167, +919137922093",
  email: "sagarkundan444@gmail.com",
};