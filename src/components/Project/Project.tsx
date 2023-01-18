import React, { useState, useEffect } from "react";
import { ProjectProps } from "../../types/ProjectProps";
import "./Project.scss";

const Project = ({ project }: ProjectProps) => {
  return (
    <div className={`project project__${project.client}`}>
      <h2>
        <a href={project.url}>{project.client}</a>
      </h2>

      {project.thumbnail.length > 0 && (
        <div className="project__images">
          {project.thumbnail.map((image) => (
            <img className="project__thumbnail" src={`${image}`} />
          ))}
        </div>
      )}
      {project.stack.length > 0 && (
        <div className="project__stack">
          {project.stack.map((skill) => (
            <p className="project__skill" key={skill}>
              {skill}
            </p>
          ))}
        </div>
      )}
      {"caseOfUse" in project && (
        <div className="project__case-of-use">
          <p className="project__charge">
            <b>Charge: </b>
            {project.caseOfUse?.charge}
          </p>
          <p className="project__challenge">
            <b>Challenge: </b>
            {project.caseOfUse?.challenge}
          </p>
          <p className="project__solution">
            <b>Solution: </b>
            {project.caseOfUse?.solution}
          </p>
          <p className="project__result">
            <b>Result: </b>
            {project.caseOfUse?.result}
          </p>
        </div>
      )}
      {/* {project.videoUrl && (
        <div className="project__video">
          <video src={project.videoUrl}></video>
        </div>
      )} */}
    </div>
  );
};
export { Project };
