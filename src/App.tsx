import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Admin } from "./components/Admin/Admin";
import "bulma/css/bulma.min.css";
import { Project } from "./components/Project/Project";
import { ProjectProps, IProject } from "./types/ProjectProps";

const mockProjects: IProject[] = [
  {
    client: "Google",
    url: "https://www.google.com",
    stack: ["React", "Node.js", "Typescript"],
    thumbnail: ["thumbnail1.jpg", "thumbnail2.jpg", "thumbnail3.jpg"],
    videoUrl: "https://www.youtube.com/watch?v=a1b2c3",
    caseOfUse: {
      charge: "Create a new search engine",
      challenge: "The search engine should be fast and efficient",
      solution: "Create a new algorithm for the search engine",
      result: "Google Search was created",
    },
    achievement: [
      {
        number: 1,
        description: "Most used search engine in the world",
      },
    ],
    observations:
      "Google Search is one of the most used search engines in the world",
  },
  {
    client: "Facebook",
    url: "https://www.facebook.com",
    stack: ["React", "Node.js", "Typescript"],
    thumbnail: ["thumbnail1.jpg", "thumbnail2.jpg", "thumbnail3.jpg"],
    videoUrl: "https://www.youtube.com/watch?v=d4e5f6",
    caseOfUse: {
      charge: "Create a new social network",
      challenge: "The social network should be user friendly",
      solution: "Create a simple and intuitive interface",
      result: "Facebook was created",
    },
    achievement: [
      {
        number: 1,
        description: "Most used social network in the world",
      },
    ],
    observations:
      "Facebook is one of the most used social networks in the world",
  },
  {
    client: "Spotify",
    url: "https://www.spotify.com",
    stack: ["React", "Node.js", "Typescript"],
    thumbnail: ["thumbnail1.jpg", "thumbnail2.jpg", "thumbnail3.jpg"],
    videoUrl: "https://www.youtube.com/watch?v=g7h8i9",
    caseOfUse: {
      charge: "Create a new music streaming platform",
      challenge: "The music streaming platform should be easy to use",
      solution: "Create a simple and intuitive interface",
      result: "Spotify was created",
    },
    achievement: [
      {
        number: 1,
        description: "Most used music streaming platform in the world",
      },
    ],
    observations:
      "Spotify is one of the most used music streaming platforms in the world",
  },
  {
    client: "Airbnb",
    url: "https://www.airbnb.com",
    stack: ["React", "Node.js", "Typescript"],
    thumbnail: ["thumbnail1.jpg", "thumbnail2.jpg", "thumbnail3.jpg"],
    videoUrl: "https://www.youtube.com/watch?v=j0k1l2",
    caseOfUse: {
      charge: "Create a new accommodation platform",
      challenge: "The accommodation platform should be easy to use",
      solution: "Create a simple and intuitive interface",
      result: "Airbnb was created",
    },
    achievement: [
      {
        number: 1,
        description: "Most used accommodation platform in the world",
      },
    ],
    observations:
      "Airbnb is one of the most used accommodation platforms in the world",
  },
];
function App() {
  const [count, setCount] = useState(0);
  const [isAdminAvailable, setIsAdminAvailable] = useState(false);
  const [projects, setProjects] = useState([...mockProjects]);

  return (
    <div className="App">
      <h1>Portfolio - Johan Vargas</h1>

      {isAdminAvailable && <Admin projectValue={""} />}

      {projects.map((project) => (
        <Project project={project} />
      ))}
    </div>
  );
}

export default App;
