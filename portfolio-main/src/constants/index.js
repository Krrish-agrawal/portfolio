import {
  creator,
  bachelors,
  school,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  nodejs,
  mongodb,
  oracleSQL,
  express,
  git,
  threejs,
  study,
  real,
  snake,
  devops,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "resume",
    title: "Resume",
  },
];

const services = [
  {
    title: "Problem Solving",
    icon: creator,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Devops",
    icon: devops,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Oracle SQL",
    icon: oracleSQL,
  },
];

const experiences = [
  {
    title: "B.E.",
    company_name: "MSRIT",
    icon: bachelors,
    iconBg: "#ffffff",
    date: "November 2022 - Present",
    points: [
      "I am currently pursuing my bachelors in Information Science and Engineering",
      "My Present CGPA(Till VI Semester) is 8.6/10.",
      "My Relevant Coursework include DSA,CN,OS,DBMS."
    ],
  },
  {
    title: "Senior Secondary",
    company_name: "RPS Public School",
    icon: school,
    iconBg: "#ffffff",
    date: "April 2020 - March 2022",
    points: [
      "I had studied here from my XI to XII Standard.",
      "I had secured 91.2% in XII Boards.",
      "Got the First exposure to Coding here only."
    ],
  },
];

const projects = [
  {
    name: "Study Notion"
    ,
    description:
      "Built a full-stack e-learning platform using React, Express, and MongoDB, featuring user authentication, course management, and a responsive interface.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "blue-text-gradient",
      },
    ],
    image: study,
    source_code_link: "https://github.com/Krrish-agrawal/Study-Notion",
  },
  {
    name: "Real Estate Price Prediction",
    description:
      "Created machine learning models in Python (scikit-learn) to estimate property values.",
    tags: [
      {
        name: "machine-learning",
        color: "blue-text-gradient",
      },
      {
        name: "flask",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: real,
    source_code_link: "https://github.com/Krrish-agrawal/Real_Estate_Price_Prediction",
  },
  {
    name: "Snake Game"
    ,
    description:
      "Built a browser-based arcade game using JavaScript, HTML5, and CSS; implemented smooth rendering and persistent high-score tracking.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: snake,
    source_code_link: "https://github.com/Krrish-agrawal/Snake_game1",
  },
];

export { services, technologies, experiences, projects };
