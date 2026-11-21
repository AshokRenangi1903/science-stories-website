import SectionHeading from "../components/SectionHeading";

const eras = [
  [
    "I",
    "Ancient & Early Science",
    "Up to ~1100 AD",
    "Ancient civilizations lay the foundations of science through observation, philosophy, and curiosity.",
  ],
  [
    "II",
    "The Scientific Revolution",
    "1100 – 1700",
    "Bold questions and new instruments transformed how we understand the universe.",
  ],
  [
    "III",
    "Scientific Enlightenment",
    "1700 – 1800",
    "Science turns experimental and systematic, uncovering the laws that govern nature.",
  ],
  [
    "IV",
    "Age of Scientific Progress",
    "1800 – 1900",
    "Discoveries become technologies that reshape industry and everyday life.",
  ],
  [
    "V",
    "Age of New Frontiers",
    "1900 – 1950",
    "Bold leaps across matter, life, and the cosmos.",
  ],
  [
    "VI",
    "Modern Scientific Era",
    "1950 – PRESENT",
    "From space and computing to the molecule of life, science shapes what comes next.",
  ],
];

export default function Eras() {
  return (
    <section className="section dark-section eras-section" id="eras">
      <div className="eras-stars" />
      <div className="container">
        <SectionHeading
          light
          eyebrow="THE JOURNEY"
          title={
            <>
              Six Scientific <em>Eras</em>
            </>
          }
          text="A guided roadmap from the first careful observations of the ancient world to the frontiers of modern science."
        />
        <div className="era-grid">
          {eras.map(([number, title, years, description], index) => (
            <article
              className="era-card reveal"
              style={{ "--reveal-delay": `${(index % 3) * 90}ms` }}
              key={number}
            >
              <div className="era-card-top">
                <span className="era-number">{number}</span>
                <span className="era-index">ERA 0{index + 1}</span>
              </div>
              <h3>{title}</h3>
              <span className="era-years">{years}</span>
              <p>{description}</p>
              <span className="era-rule" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
