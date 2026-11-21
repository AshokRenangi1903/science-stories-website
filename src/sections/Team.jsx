import SectionHeading from "../components/SectionHeading";

const groups = [
  {
    title: "Founders",
    subtitle: "The people bringing the vision to life.",
    founder: true,
    people: [
      {
        initials: "N",
        name: "Dr. Naveen Kumar Veldurthi",
        role: "Founder, Science Stories™",
        bio: [
          "Assistant Professor",
          "Department of Chemistry",
          "National Institute of Technology (NIT) Jamshedpur",
        ],
        image: "/images/team/naveen.jpeg",
      },
      {
        initials: "+",
        name: "Shivamalleshwari Macha",
        role: "Co-Founder, Science Stories™",
        bio: ["Designated Partner", "Science Voyage Studios LLP"],
        image: "/images/team/malleswari.jpeg",
      },
    ],
  },
  {
    title: "Scientific Advisory Board (SAB)",
    subtitle: "Scientific perspectives that help guide our work.",
    people: [
      {
        initials: "P1",
        name: "Dr. Raj Nandkeolyar",
        role: "",
        bio: [
          "Associate Professor",
          "Department of Mathematics",
          "National Institute of Technology (NIT) Jamshedpur",
        ],
        image: "/images/team/raj.jpeg",
      },
      {
        initials: "P2",
        name: "Dr. Neha Agnihotri",
        role: "",
        bio: [
          "Assistant Professor",
          "Department of Physics",
          "National Institute of Technology (NIT) Jamshedpur",
        ],
        image: "/images/team/neha.jpeg",
      },
      {
        initials: "P3",
        name: "Dr. Prabhat Kumar",
        role: "",
        bio: [
          "Assistant Professor",
          "Department of Chemistry",
          "National Institute of Technology (NIT) Jamshedpur",
        ],
        image: "/images/team/prabhat.jpeg",
      },
      {
        initials: "P4",
        name: "Dr. Sudhanshu Shekhar Pati",
        role: "",
        bio: [
          "Assistant Professor",
          "Department of Chemistry",
          "National Institute of Technology (NIT) Jamshedpur",
        ],
        image: "/images/team/pati.jpeg",
      },
      {
        initials: "P4",
        name: "Dr.S.Sakthivel",
        role: "",
        bio: [
          "Assistant Professor",
          "Department of Chemistry",
          "National Institute of Technology (NIT) Jamshedpur",
        ],
        image: "/images/team/sakthivel.jpeg",
      },
    ],
  },
  {
    title: "Technical Advisory Board (TAB)",
    subtitle: "Guiding the Product and Design.",
    people: [
      {
        initials: "T1",
        name: "Dr. Alekha Kumar Mishra",
        role: "",
        bio: [
          "Assistant Professor",
          "Department of Computer Science & Engineering (CSE)",
          "National Institute of Technology (NIT) Jamshedpur",
        ],
        image: "/images/team/alekha.jpeg",
      },
    ],
  },
  {
    title: "Lead App Developer",
    subtitle: "Developing the application end to end ",
    people: [
      {
        initials: "T1",
        name: "Ashok Renangi",
        role: "",
        bio: [
          "Pursuing Masters of Technology",
          "Department of Computer Science & Engineering (CSE)",
          "National Institute of Technology (NIT) Jamshedpur",
        ],
        image: "/images/team/ashok.jpeg",
      },
    ],
  },
];

export default function Team() {
  return (
    <section className="section dark-section team-section" id="team">
      <div className="container">
        <SectionHeading
          light
          eyebrow="THE PEOPLE BEHIND THE SCIENCE STORIES™"
          title={
            <>
              Our<em> Team </em> & <em> Advisors </em>
            </>
          }
          text="Science Stories™ is built by Science Voyage Studios LLP — a DPIIT (Startup India)-recognised startup incubated at Centre for Innovation & Incubation Council (CIIC), NIT Jamshedpur — and guided by academicians, scientists and technologists who love and are passionate about science and technology."
        />

        {groups.map((group) => (
          <div className="team-group reveal" key={group.title}>
            <div className="team-group-heading">
              <h3>{group.title}</h3>
              <p>{group.subtitle}</p>
            </div>

            <div
              className={`people-grid ${group.founder ? "people-founders" : ""}`}
            >
              {group.people.map((person) => (
                <article className="person-card" key={person.name}>
                  <div className="person-photo">
                    <img
                      src={person.image}
                      alt={person.name}
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        e.currentTarget.nextElementSibling.style.display =
                          "flex";
                      }}
                    />
                    <div className="person-avatar">{person.initials}</div>
                  </div>

                  <h4>{person.name}</h4>
                  <span>{person.role}</span>
                  <p className="person-bio">
                    {Array.isArray(person.bio)
                      ? person.bio.map((line, index) => (
                          <span key={index}>
                            {line}
                            {index !== person.bio.length - 1 && <br />}
                          </span>
                        ))
                      : person.bio}
                  </p>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
