import {
  faHtml5,
  faCss3,
  faSquareJs,
  faNode,
  faReact,
  faBootstrap,
  faGit,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faServer, faDatabase } from "@fortawesome/free-solid-svg-icons";
import Bookfliy from "../assets/projects/Bookfliy.jpg";
import BlogWebsite from "../assets/projects/BlogWebsite.jpg";
import country from "../assets/projects/country.jpg";
import memorycard from "../assets/projects/memorycard.jpg";
import prayer_time from "../assets/projects/prayer_time.jpg";
import tic_tac_toe from "../assets/projects/tic_tac_toe.jpg";
import weather from "../assets/projects/weather.jpg";
import youtube from "../assets/projects/youtube.jpg";

const iconSkills = [
  { id: 1, src: faHtml5, name: "HTML" },
  { id: 2, src: faCss3, name: "CSS" },
  { id: 3, src: faSquareJs, name: "JavaScript" },
  { id: 4, src: faBootstrap, name: "Bootstrap 5" },
  { id: 5, src: faNode, name: "Node.js" },
  { id: 6, src: faServer, name: "Express.js" },
  { id: 7, src: faReact, name: "React.js" },
  { id: 8, src: faDatabase, name: "PostgreSQL" },
  { id: 9, src: faGit, name: "Git" },
  { id: 10, src: faGithub, name: "GitHub" },
];

const projects = [
  {
    id: 1,
    name: "Bookfliy",
    src: Bookfliy,
    tec: [
      { id: 1, src: faHtml5, name: "HTML" },
      { id: 2, src: faCss3, name: "CSS" },
      { id: 3, src: faSquareJs, name: "JavaScript" },
      { id: 4, src: faBootstrap, name: "Bootstrap 5" },
      { id: 5, src: faNode, name: "Node.js" },
      { id: 6, src: faServer, name: "Express.js" },
      { id: 7, src: faDatabase, name: "PostgreSQL" },
    ],
    description:
      "Bookfliy is a website that allows users to register accounts, share the books they’ve read, store notes for each book, and add friends to view their book collections. The website is built using Node.js and Express.js on the server-side, with Vanilla JavaScript, HTML, CSS, Bootstrap, and EJS on the client-side, utilizing PostgreSQL for database management.",
    github_url: "https://github.com/MouazMsh/Bookfliy",
    website_url: "https://bookfliy.onrender.com/",
  },
  {
    id: 2,
    name: "Blog Website",
    src: BlogWebsite,
    tec: [
      { id: 1, src: faHtml5, name: "HTML" },
      { id: 2, src: faCss3, name: "CSS" },
      { id: 3, src: faSquareJs, name: "JavaScript" },
      { id: 4, src: faBootstrap, name: "Bootstrap 5" },
      { id: 5, src: faNode, name: "Node.js" },
      { id: 6, src: faServer, name: "Express.js" },
    ],
    description:
      "A blog website that allows users to post, delete, and edit articles, with data being stored and retrieved from a JSON file.",
    github_url: "https://github.com/MouazMsh/blogwebsite",
    website_url: "https://blogwebsite-y52h.onrender.com/",
  },
  {
    id: 3,
    name: "Country Explorer",
    src: country,
    tec: [
      { id: 1, src: faHtml5, name: "HTML" },
      { id: 2, src: faCss3, name: "CSS" },
      { id: 3, src: faSquareJs, name: "JavaScript" },
      { id: 4, src: faBootstrap, name: "Bootstrap 5" },
      { id: 5, src: faReact, name: "React.js" },
    ],
    description:
      "A website providing general information about countries worldwide, built with React as the front-end framework and React-Router for navigation, with data fetched from a JSON file.",
    github_url: "https://github.com/MouazMsh/Country_Explorer",
    website_url: "https://mouazmsh.github.io/Country_Explorer/",
  },
  {
    id: 4,
    name: "Tic-Tac-Toe Game",
    src: tic_tac_toe,
    tec: [
      { id: 1, src: faHtml5, name: "HTML" },
      { id: 2, src: faCss3, name: "CSS" },
      { id: 3, src: faSquareJs, name: "JavaScript" },
      { id: 4, src: faBootstrap, name: "Bootstrap 5" },
      { id: 5, src: faReact, name: "React.js" },
    ],
    description:
      "A simple Tic-Tac-Toe game, created as my first React project with the help of the React documentation.",
    github_url: "https://github.com/MouazMsh/Tic-Tac-Toe",
    website_url: "https://mouazmsh.github.io/Tic-Tac-Toe/",
  },
  {
    id: 5,
    name: "Prayer Times",
    src: prayer_time,
    tec: [
      { id: 1, src: faHtml5, name: "HTML" },
      { id: 2, src: faCss3, name: "CSS" },
      { id: 3, src: faSquareJs, name: "JavaScript" },
      { id: 4, src: faBootstrap, name: "Bootstrap 5" },
      { id: 5, src: faNode, name: "Node.js" },
      { id: 6, src: faServer, name: "Express.js" },
    ],
    description:
      "A website that displays the five prayer times based on the user's selected city and country, along with the time remaining until the next prayer, fetching data from a public API.",
    github_url: "https://github.com/MouazMsh/Prayer_Time",
    website_url: "https://prayer-time-0yia.onrender.com",
  },
  {
    id: 6,
    name: "YouTube Clone",
    src: youtube,
    tec: [
      { id: 1, src: faHtml5, name: "HTML" },
      { id: 2, src: faCss3, name: "CSS" },
      { id: 3, src: faSquareJs, name: "JavaScript" },
      { id: 4, src: faReact, name: "React.js" },
    ],
    description:
      "A simple YouTube clone built with React and React-Router, fetching data from a public API.",
    github_url: "https://github.com/MouazMsh/Youtube_Clone",
    website_url: "https://mouazmsh.github.io/Youtube_Clone/",
  },
  {
    id: 7,
    name: "Weather App",
    src: weather,
    tec: [
      { id: 1, src: faHtml5, name: "HTML" },
      { id: 2, src: faCss3, name: "CSS" },
      { id: 3, src: faSquareJs, name: "JavaScript" },
      { id: 4, src: faBootstrap, name: "Bootstrap 5" },
      { id: 5, src: faNode, name: "Node.js" },
      { id: 6, src: faServer, name: "Express.js" },
    ],
    description:
      "A website that retrieves temperature data for a user-specified city by fetching information from a public API.",
    github_url: "https://github.com/MouazMsh/weatherApi",
    website_url: "https://weatherapi-kp8v.onrender.com",
  },
  {
    id: 8,
    name: "Memory Card Game",
    src: memorycard,
    tec: [
      { id: 1, src: faHtml5, name: "HTML" },
      { id: 2, src: faCss3, name: "CSS" },
      { id: 3, src: faSquareJs, name: "JavaScript" },
      { id: 4, src: faReact, name: "React.js" },
    ],
    description:
      "A basic memory card game implemented to solidify my foundational React knowledge.",
    github_url: "https://github.com/MouazMsh/Memory_Card_Game",
    website_url: "https://mouazmsh.github.io/Memory_Card_Game/",
  },
];

export { iconSkills, projects };
