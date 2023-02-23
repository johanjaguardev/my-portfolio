import React, { useContext, useState } from "react";
import logo from "./assets/logo-2x.png";
import { Admin } from "./components/Admin/Admin";
import "bulma/css/bulma.min.css";
import { Project } from "./components/Project/Project";
import { ProjectProps, IProject } from "./types/ProjectProps";
import "./App.scss";
import { mockProjects } from "./data/mockProjects";
import { ThemeToggler } from "./components/ThemeToggler/ThemeToggler";
import { ThemeContext } from "./contexts/ThemeContext";

function App() {
  const [count, setCount] = useState(0);
  const [isAdminAvailable, setIsAdminAvailable] = useState(false);
  const [projects, setProjects] = useState([...mockProjects]);
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`App theme-${theme}`}>
      <header className="header container">
        {!logo && <h1>Portfolio - Johan Vargas</h1>}
        <img src={logo} className="logo" />
        <ThemeToggler></ThemeToggler>
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
            <div className={`projects theme-${theme}`}>
              {projects.map((project) => (
                <Project project={project} />
              ))}
            </div>
          </React.Fragment>
        )}
      </div>
      <footer className={`footer container theme-${theme}`}>
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
