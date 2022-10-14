import React, { useState } from "react";

type AdminDashboardProps = {
  projectValue: string;
};

const AdminDashboard = ({ projectValue }: AdminDashboardProps) => {
  const handleSendClick = (e: React.MouseEvent<HTMLElement>): void => {
    e.preventDefault();
    setScreenValue(value);
  };

  const [value, setValue] = useState("");
  const [screenValue, setScreenValue] = useState("");
  return (
    <React.Fragment>
      <form action="" className="main">
        <label htmlFor="proyect-name">Project Name</label>
        <input
          type="text"
          name="proyect-name"
          id="proyect-name"
          placeholder="Please type the project name"
          data-testid="inputProject"
          value={value}
          onChange={(e): void => setValue(e.target.value)}
        />
        <button
          className="button is-primary"
          onClick={(event): void => handleSendClick(event)}
          name="sendButton"
          data-testid="sendButton"
        >
          Send
        </button>
        <div className="screenText" data-testid="screenText">
          {screenValue}
        </div>
      </form>
    </React.Fragment>
  );
};
export { AdminDashboard };
