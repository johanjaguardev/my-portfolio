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
      charge: "Test Charge",
      challenge: "Test Challenge",
      solution: "Test Solution",
      result: "Test Result",
      achievement: [{ number: 1, description: "Test Achievement" }],
      observations: "Test Observations",
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
    expect(typeof project.charge).toBe("string");
  });

  test("should have a challenge property as string and optional", () => {
    expect(typeof project.challenge).toBe("string");
  });

  test("should have a solution property as string and optional", () => {
    expect(typeof project.solution).toBe("string");
  });

  test("should have a result property as string and optional", () => {
    expect(typeof project.result).toBe("string");
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
