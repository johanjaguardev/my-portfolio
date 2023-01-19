import { describe, expect, it } from "vitest";
import App from "./App";
import { render, screen, userEvent } from "./utils/test-utils";
import { ProjectProps, IProject } from "./types/ProjectProps";

test("renders Projects component when projects is set to an array of projects", () => {
  const projects: IProject[] = [
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
        { number: 1, description: "Most used search engine in the world" },
      ],
      observations:
        "Google Search is one of the most used search engines in the world",
    },
  ];
  const { getByText } = render(<App />);
  const projectElement = getByText(/Projects/i);
  expect(projectElement).toBeInTheDocument();
});
