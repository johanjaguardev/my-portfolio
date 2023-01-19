import { describe, expect, it } from "vitest";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { Project } from "./Project";
import { localStorageMock } from "../../utils/localStorageMock ";
import { ProjectProps, IProject } from "../../types/ProjectProps";

const window = {
  localStorage: localStorageMock(),
};

let project: IProject;
describe("Project Component", (): void => {
  beforeEach(() => {
    project = {
      client: "Test Client",
      url: "www.test.com",
      stack: ["React", "Node"],
      thumbnail: ["www.test.jpg"],
      videoUrl: "www.test.mp4",
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
      achievement: [
        {
          number: 1,
          description: "Most used search engine in the world",
        },
      ],
      observations:
        "Google Search is one of the most used search engines in the world",
    };
  });
  afterEach(cleanup);
  it("Should Render", (): void => {
    render(<Project project={project} />);
  });

  test("should have a client property as string", () => {
    expect(typeof project.client).toBe("string");
  });

  test("should have a url property as string", () => {
    expect(typeof project.url).toBe("string");
  });

  test("should have a stack property as array of strings", () => {
    expect(Array.isArray(project.stack)).toBe(true);
    expect(typeof project.stack[0]).toBe("string");
  });

  test("should have a thumbnail property as array of strings", () => {
    expect(Array.isArray(project.thumbnail)).toBe(true);
    expect(typeof project.thumbnail[0]).toBe("string");
  });

  test("should have a videoUrl property as string and optional", () => {
    expect(typeof project.videoUrl).toBe("string");
  });

  test("should have a charge property as string and optional", () => {
    expect(typeof project.caseOfUse?.charge).toBe("string");
  });

  test("should have a challenge property as string and optional", () => {
    expect(typeof project.caseOfUse?.challenge).toBe("string");
  });

  test("should have a solution property as string and optional", () => {
    expect(typeof project.caseOfUse?.solution).toBe("string");
  });

  test("should have a result property as string and optional", () => {
    expect(typeof project.caseOfUse?.result).toBe("string");
  });

  // test("should have a achievement property as an array of objects optional each one with number and description as properties", () => {
  //   expect(Array.isArray(projectProps.achievement)).toBe(true);
  //   expect(typeof projectProps.achievement[0].number).toBe("number");
  //   expect(typeof projectProps.achievement[0].description).toBe("string");
  // });

  test("should have a observations property as string and optional", () => {
    expect(typeof project.observations).toBe("string");
  });
});
