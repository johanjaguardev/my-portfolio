import "./Page.scss";

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

const Page = (): any => {
  return (
    <div className="Page">
      <h1>{DATA.title}</h1>
      <h2>{DATA.job}</h2>
      <div className="experiences">
        <h2>Experience</h2>
        {DATA.experiences.map((e) => (
          <div key={e.company} className="experience">
            <h3>{e.company}</h3>
            <p>{e.location}</p>
            <p>{e.isRemote ? "Remote" : "Not Remote"}</p>
            <p>{e.startDate}</p>
            <p>{e.endDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Page };
