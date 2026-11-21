import {
  ArrowUpRight,
  BookOpen,
  CheckCheck,
  FlaskConical,
  GraduationCap,
  RefreshCw,
  SearchCheck,
  SquareStar,
} from "lucide-react";
import SectionHeading from "../components/SectionHeading";

const process = [
  [
    SearchCheck,
    "Research",
    "Grounded in credible scientific literature, primary sources and historical records.",
  ],
  [
    BookOpen,
    "Story development",
    "Developed into clear, engaging narratives while preserving scientific accuracy.",
  ],
  [
    CheckCheck,
    "Internal scientific & editorial review",
    "Checked for factual accuracy, scientific consistency, clarity and narrative quality.",
  ],
  [
    GraduationCap,
    "External Review Council (ERC)",
    "External expert review, where appropriate, to strengthen scientific accuracy and depth.",
  ],
  [
    RefreshCw,
    "Continuous improvement",
    "Updated through expert feedback, source verification and reader suggestions.",
  ],
];

export default function Quality() {
  return (
    <section className="section section-paper" id="quality">
      <div className="container">
        <SectionHeading
          eyebrow="OUR COMMITMENT TO SCIENTIFIC QUALITY"
          title={
            <>
              Getting the science <em>right.</em>
            </>
          }
          text="Every story is developed with an emphasis on scientific accuracy, reliable sources and educational clarity, supported by a structured scientific and editorial review process."
        />
        <div className="quality-timeline">
          {process.map(([Icon, title, text], index) => (
            <article
              className="quality-step reveal"
              style={{ "--reveal-delay": `${index * 85}ms` }}
              key={title}
            >
              <div className="quality-step-icon">
                <Icon size={21} />
              </div>
              <span className="quality-step-number">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <div className="quality-note reveal">
          <div className="quality-note-icon">
            <SquareStar size={25} />
          </div>
          <div>
            <span className="eyebrow">ALWAYS LEARNING</span>
            <h3>Science is an evolving journey — and so is our learning</h3>
            <p>
              Despite our best efforts, errors or inadvertent inaccuracies may
              occasionally occur. We welcome feedback, corrections and
              suggestions from our readers. If you notice a factual error or
              have a suggestion, please write to us at{" "}
              <a href="mailto:support@sciencestories.in">
                support@sciencestories.in
              </a>
              , preferably with relevant references or credible sources. Your
              contribution helps us continually improve the accuracy and quality
              of our stories.
            </p>
          </div>
          <a
            className="round-arrow"
            href="mailto:support@sciencestories.in"
            aria-label="Email Science Stories"
          >
            <ArrowUpRight />
          </a>
        </div>
      </div>
    </section>
  );
}
