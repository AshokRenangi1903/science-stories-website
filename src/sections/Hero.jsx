import { ArrowDown, ArrowRight, Play } from "lucide-react";
import PhoneMockup from "../components/PhoneMockup";

export default function Hero() {
  return (
    <section className="hero dark-section" id="home">
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <h1>
            Science, as <em>connected stories,</em>
          </h1>
          <h1>not isolated facts.</h1>
          <p className="hero-subtitle">
            Follow the great discoveries as one unfolding journey, connecting
            minds and ideas across six scientific eras. Read, listen, explore
            and discover how one breakthrough led to another.
          </p>
          <p className="hero-manifesto">
            Every discovery begins with a question.{" "}
            <span>Every breakthrough opens another door.</span>
          </p>
          <div className="hero-actions">
            <a className="button button-gold" href="#get">
              <Play size={16} fill="currentColor" /> Explore the app
            </a>
            <a className="text-link-light" href="#about">
              What is Sciene Stroies?
              <ArrowRight size={16} />
            </a>
          </div>
          <br />
          <div>
            <span>
              {" "}
              <div className="hero-manifesto">
                <span> For every curious mind. </span>
                From classrooms to competitive exams — and beyond. For school
                students, competitive-exam aspirants, educators, parents and
                lifelong learners.
              </div>
            </span>
          </div>
        </div>
        <div className="hero-visual reveal">
          <div className="orbit orbit-a" />
          <div className="orbit orbit-b" />
          <div className="orbit-dot dot-one" />
          <div className="orbit-dot dot-two" />
          <PhoneMockup variant="story" />
        </div>
      </div>
      <a className="scroll-cue" href="#about">
        <span>SCROLL TO EXPLORE</span>
        <ArrowDown size={15} />
      </a>
    </section>
  );
}
