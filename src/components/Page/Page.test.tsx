import { render, screen, cleanup } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Page } from "./Page";

const DATA = {
  title: "Johan Vargas",
  job: "Frontend Developer",
  phone: "3044704118",
  country: "Colombia",
  city: "Madrid",
  links: [
    {
      site: "email",
      url: "johanvargasdev@gmail.com",
    },
  ],
  languages: [
    { name: "English", level: "B2" },
    { name: "Spanish", level: "Native" },
  ],
  skills: [
    {
      name: "Javascript",
      level: "Advanced",
    },
  ],
  experiences: [
    {
      company: "Avionos",
      location: "USA / Chicago - Bogota",
      isRemote: true,
      startDate: "jun/1/2022",
      endDate: "nov/30/2022",
      industryClients: ["Boats Sellers", "Financial Apps"],
      accomplishments: [
        "Manage sites in Adobe Experience Managers implementing HTML, CSS, JS, and differents JS libraries like jQuery and React",
      ],
    },
    {
      company: "Ditech",
      location: "Spain",
      isRemote: true,
      startDate: "jun/1/2022",
      endDate: "nov/30/2022",
      industryClients: ["Boats Sellers", "Financial Apps"],
      accomplishments: [
        "Manage sites in Adobe Experience Managers implementing HTML, CSS, JS, and differents JS libraries like jQuery and React",
      ],
    },
    {
      company: "Huge",
      location: "USA / Brooklyn - Bogota",
      isRemote: true,
      startDate: "jun/1/2022",
      endDate: "nov/30/2022",
      industryClients: ["Boats Sellers", "Financial Apps"],
      accomplishments: [
        "Manage sites in Adobe Experience Managers implementing HTML, CSS, JS, and differents JS libraries like jQuery and React",
      ],
    },
    {
      company: "Globant",
      location: "Argentina / Bogota",
      isRemote: true,
      startDate: "jun/1/2022",
      endDate: "nov/30/2022",
      industryClients: ["Boats Sellers", "Financial Apps"],
      accomplishments: [
        "Manage sites in Adobe Experience Managers implementing HTML, CSS, JS, and differents JS libraries like jQuery and React",
      ],
    },
  ],
  about: "Lorem Ipsum",
};
describe("screen", (): void => {
  beforeEach(() => {
    render(<Page />);
  });
  afterEach(cleanup);
  it("Should render", (): void => {});
  it("Should render title correctly", (): void => {
    screen.getByText(DATA.title);
  });
  it("Should render job correctly", (): void => {
    screen.getByText(DATA.job);
  });
  it("Should render experience", (): void => {
    DATA.experiences.forEach((experience) => {
      screen.getByText(experience.company);
      screen.getByText(experience.location);
      screen.findAllByText("Remote");
      screen.findAllByText(experience.startDate);
      screen.findAllByText(experience.endDate);
    });
  });
});
