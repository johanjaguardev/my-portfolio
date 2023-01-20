import React, { useState } from "react";
import logo from "./assets/logo-2x.png";
import { Admin } from "./components/Admin/Admin";
import "bulma/css/bulma.min.css";
import { Project } from "./components/Project/Project";
import { ProjectProps, IProject } from "./types/ProjectProps";
import "./App.scss";

const mockProjects: IProject[] = [
  {
    client: "Xenía, Classical Studies Portal",
    url: "http://xenia.bogota.unal.edu.co/",
    stack: ["Angular", "Wordpress", "Wordpress REST API", "SASS"],
    thumbnail: ["xenia1.png", "xenia2.png"],
    caseOfUse: {
      charge:
        "Create a library for a series of specialized documents on classical studies for the National Online University, organized and available to each of the students through its website, in a manageable and responsive way.",
      challenge:
        "Organize the existing .pdf files and easily index them in a user-friendly development for making them editable and with the possibility of adding new books, and to view this catalog of books in a progressive web application in a simple and orderly way.",
      solution:
        "I created a script to index existing documents and generated a custom post type for WordPress with it, and through this allowed to add books through the WordPress site, while in another directory an Angular application was created to view the generated library and generate its search within the catalog.",
      result:
        "A digital book manager was achieved in the WordPress interface, which is one of the most common for blogging and website creation, uploading the different books from there onwards, and updated in real time to be consulted by the client in Angular, both from mobile and from a PC through the website http://xenia.bogota.unal.edu.co/.",
    },
    // achievement: [
    //   {
    //     number: 1,
    //     description: "Most used search engine in the world",
    //   },
    // ],
    // observations:
    //   "Google Search is one of the most used search engines in the world",
  },
  {
    client: "RentingCarz",
    url: "https://rentingcarz.com/",
    stack: ["Yii Framework", "Stylus", "Javascript"],
    thumbnail: ["rentingcarz1.png", "rentingcarz2.png"],
    // videoUrl: "https://www.youtube.com/watch?v=d4e5f6",
    // caseOfUse: {
    //   charge: "Create a new social network",
    //   challenge: "The social network should be user friendly",
    //   solution: "Create a simple and intuitive interface",
    //   result: "Facebook was created",
    // },
    // achievement: [
    //   {
    //     number: 1,
    //     description: "Most used social network in the world",
    //   },
    // ],
    // observations:
    //   "Facebook is one of the most used social networks in the world",
  },
  {
    client: "El Tiempo - 2018 World Cup Specials",
    url: "https://www.eltiempo.com/deportes/futbol-internacional/simulador-de-los-grupos-del-mundial-de-rusia-2018-151692",
    stack: [
      "Javascript",
      "Gulp",
      "Handlebars",
      "SASS",
      "Adaptative Desing",
      "CSS Animations",
    ],
    thumbnail: ["rusia1.png"],
    // videoUrl: "https://www.youtube.com/watch?v=j0k1l2",
    // caseOfUse: {
    //   charge: "Create a new accommodation platform",
    //   challenge: "The accommodation platform should be easy to use",
    //   solution: "Create a simple and intuitive interface",
    //   result: "Airbnb was created",
    // },
    // achievement: [
    //   {
    //     number: 1,
    //     description: "Most used accommodation platform in the world",
    //   },
    // ],
    // observations:
    //   "Airbnb is one of the most used accommodation platforms in the world",
  },
  {
    client: "AgentCars",
    url: "https://www.agentcars.com/",
    stack: ["Yii Framework", "Stylus", "Javascript"],
    thumbnail: ["agentcars1.png", "agentcars2.png"],
    // videoUrl: "https://www.youtube.com/watch?v=g7h8i9",
    // caseOfUse: {
    //   charge: "Create a new music streaming platform",
    //   challenge: "The music streaming platform should be easy to use",
    //   solution: "Create a simple and intuitive interface",
    //   result: "Spotify was created",
    // },
    // achievement: [
    //   {
    //     number: 1,
    //     description: "Most used music streaming platform in the world",
    //   },
    // ],
    // observations:
    //   "Spotify is one of the most used music streaming platforms in the world",
  },
  {
    client: "Halal America",
    url: "https://halalamericalatina.com/",
    stack: ["Wordpress", "SASS", "Responsive Desing", "Guttenberg"],
    thumbnail: ["halal1.png"],
    // videoUrl: "https://www.youtube.com/watch?v=g7h8i9",
    // caseOfUse: {
    //   charge: "Create a new music streaming platform",
    //   challenge: "The music streaming platform should be easy to use",
    //   solution: "Create a simple and intuitive interface",
    //   result: "Spotify was created",
    // },
    // achievement: [
    //   {
    //     number: 1,
    //     description: "Most used music streaming platform in the world",
    //   },
    // ],
    // observations:
    //   "Spotify is one of the most used music streaming platforms in the world",
  },
];
function App() {
  const [count, setCount] = useState(0);
  const [isAdminAvailable, setIsAdminAvailable] = useState(false);
  const [projects, setProjects] = useState([...mockProjects]);

  return (
    <div className="App">
      <header className="header container">
        {!logo && <h1>Portfolio - Johan Vargas</h1>}
        <img src={logo} className="logo" />
      </header>
      <div className="container">
        <div className="description">
          <p>
            I'm a Frontend developer with 8 years of experience in the area. I
            have 3 years of experience with React and Angular and 1 year with
            VueJs.
          </p>
          <p className="only-desktop">
            I have a strong understanding of the latest technologies and
            industry best practices.{" "}
          </p>
          <p className="only-desktop">
            I am open to learning new technologies to keep up with the
            constantly evolving field of web.
          </p>
          <p className="only-desktop">
            I am motivated and contribute to a positive work environment. If you
            are interested in my profile, please contact me by email at
            johanvargasdev@gmail.com, or by phone at (57)3044704118.
          </p>
        </div>

        {isAdminAvailable && <Admin projectValue={""} />}

        {projects.length > 0 && (
          <React.Fragment>
            <h2 className="projects__h2">Projects</h2>
            <div className="projects">
              {projects.map((project) => (
                <Project project={project} />
              ))}
            </div>
          </React.Fragment>
        )}
      </div>
      <footer className="footer container">
        <p>
          Bogota, Colombia (UTC-5) <br />
          (+57) 3044704118 <br />
          johanvargasdev@gmail.com
          <br />
          https://www.linkedin.com/in/johanvargas <br />
          https://johan.wtf/
        </p>
      </footer>
    </div>
  );
}

export default App;
