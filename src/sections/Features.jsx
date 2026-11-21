import SectionHeading from "../components/SectionHeading";
import PhoneMockup from "../components/PhoneMockup";

export default function Features() {
  return (
    <section className="section section-cream" id="features">
      <div className="container">
        <SectionHeading
          eyebrow="EXPERIENCE THE APP"
          title={
            <>
              Everything a<em> curious mind </em> needs
            </>
          }
          text="Designed to feel premium and calm — a place to think, not a feed to scroll."
        />

        <div className="showcase-panel">
          <div className="showcase-copy reveal">
            <span className="eyebrow">MADE FOR CURIOUS MINDS</span>
            <h3>
              Let every discovery <em> inspire </em>you
            </h3>
            <p>
              Science Stories brings you closer to the Heroes of Science, taking
              you through their questions, struggles, experiments and
              breakthroughs.
            </p>
            <div className="showcase-points">
              <span>
                <i />
                Explore great minds
              </span>
              <span>
                <i />
                Experience their journey
              </span>
              <span>
                <i /> Connect the discoveries
              </span>
              <span>
                <i /> Be Curious & Stay Inspired
              </span>
            </div>
          </div>
          <div className="showcase-phones reveal">
            <PhoneMockup variant="home" className="phone-back" />
            <PhoneMockup variant="progress" className="phone-front" />
          </div>
        </div>
      </div>
    </section>
  );
}
