import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Admin } from "./components/Admin/Admin";
import { Page } from "./components/Page/Page";

import "bulma/css/bulma.min.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Portfolio - Johan Vargas</h1>

      <Admin projectValue={""} />
      <Page></Page>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <h2 className="job-title">Sr. Frontend Developer</h2>
        <p className="job-description">
          Features and bugfix in pags build with AEM, fully integrated with
          Adobe Experience Manager and using some features likes SASS, LESS,
          Vanilla JS, React and all the frontend part together AEM support
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </div>
  );
}

export default App;
