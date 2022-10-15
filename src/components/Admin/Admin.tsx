import React, { useState, useEffect } from "react";

type AdminProps = {
  projectValue?: string;
};

const Admin = ({ projectValue }: AdminProps) => {
  const handleSendClick = (e: React.MouseEvent<HTMLElement>): void => {
    e.preventDefault();
    setScreenValue(value);
  };

  const [value, setValue] = useState("");
  const [screenValue, setScreenValue] = useState("");

  useEffect(() => {
    localStorage.setItem("screenValue", JSON.stringify(screenValue));
  }, [screenValue]);
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
export { Admin };
