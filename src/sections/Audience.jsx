import {
  GraduationCap,
  BookOpenCheck,
  Lightbulb,
  UsersRound,
} from "lucide-react";
import SectionHeading from "../components/SectionHeading";

const audiences = [
  [
    GraduationCap,
    "School students",
    "Build strong scientific foundations and discover the ideas behind what you learn in school.",
  ],
  [
    BookOpenCheck,
    "Competitive-exam aspirants",
    "Strengthen General Science understanding for UPSC, SSC, RRB, NDA, State PSCs and other examinations.",
  ],
  [
    Lightbulb,
    "Lifelong learners",
    "Explore how we came to understand the world through thoughtful, engaging stories.",
  ],
  [
    UsersRound,
    "Parents & educators",
    "Encourage curiosity and meaningful learning with grounded resources in science.",
  ],
];

export default function Audience() {
  return (
    <section className="section dark-section audience-section" id="audience">
      <div className="container">
        <SectionHeading
          light
          eyebrow="WHO IS SCIENCE STORIES™ FOR?
"
          title={
            <>
              For anyone who asks <em>“why?”</em>
            </>
          }
          text="Created for curious minds of every age — from school students to competitive-exam aspirants and lifelong learners."
        />
        <div className="audience-grid">
          {audiences.map(([Icon, title, text], index) => (
            <article
              className="audience-card reveal"
              style={{ "--reveal-delay": `${index * 90}ms` }}
              key={title}
            >
              <div className="audience-icon">
                <Icon size={27} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <div className="audience-quote reveal">
          <span>“</span>
          <p>
            Curiosity has no age limit. Neither should the joy of discovering
            science.
          </p>
        </div>
      </div>
    </section>
  );
}
