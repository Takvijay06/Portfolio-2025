import hpscProject from "../images/hpsc.png";
import stashrunProject from "../images/stashrun2.png";
import hpGaiaProject from "../images/HPGAIA.png";

export const accordionData = [
  {
    title: "What services do you offer as a frontend developer?",
    content:
      "I offer custom frontend development including responsive web design, SPA development using React or Vue, performance optimization, UI animations, and integration with APIs and backend services.",
  },
  {
    title: "What technologies do you work with?",
    content:
      "My core stack includes HTML, CSS, JavaScript (ES6+), React, Next.js, Tailwind CSS, Sass, and Git. I'm also familiar with tools like Webpack, Vite, and version control workflows on GitHub.",
  },
  {
    title: "Do you build mobile-friendly websites?",
    content:
      "Yes! Every project I work on is responsive by default. I use mobile-first design principles and test across multiple devices to ensure seamless user experiences.",
  },
  {
    title: "Can you improve the performance of an existing website?",
    content:
      "Absolutely. I perform audits using tools like Lighthouse, identify bottlenecks (e.g., large assets, unnecessary re-renders), and implement improvements such as code splitting, image optimization, and lazy loading.",
  },
];

export const projects = [
  {
    title: "Stashrun",
    description:
      "A mobile based web appilcation for raising funds by playing games through sponsers",
    image: stashrunProject,
  },
  {
    title: "HP GAIA",
    description: "Financial dashboard with analytics and reporting.",
    image: hpGaiaProject,
  },
  {
    title: "HPSC",
    description: "A tool from HP to analyse different sales of HP products",
    image: hpscProject,
  },
  {
    title: "Personal Portfolio 2024",
    description: "My Personal portfolio work for showcasing my works and skills",
    image:
      "https://images.unsplash.com/photo-1580917388462-2e09d69dff51?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
