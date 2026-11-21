import {
  AudioLines,
  GitBranch,
  GitCommit,
  GitCompare,
  TrendingUp,
} from "lucide-react";
import SectionHeading from "../components/SectionHeading";

const pillars = [
  {
    icon: GitCompare,
    title: "Connected, not isolated",
    text: "Every discovery is told as part of a larger journey — one idea building on the last — so you understand why things happened, not just what happened.",
  },
  {
    icon: AudioLines,
    title: "Read or listen",
    text: "Explore every story through engaging narratives or listen in a natural narration voice of your choice — whenever and wherever you like.",
  },
  {
    icon: TrendingUp,
    title: "Quizzes & Mastery",
    text: "Reinforce your understanding with quick quizzes and track your progress as your knowledge grows from one discovery to the next.",
  },
];

const thread = [
  ["1 · CURIOSITY", "A Question ", " Where did it all begin?"],
  [
    "2 · THE JOURNEY",
    "A Quest",
    "Courage to challenge, explore and experiment",
  ],
  ["3 · DISCOVERY", "A Breakthrough", "A new window to understanding"],
  ["4 · IMPACT", "A Transformation", "Ideas that change our world"],
  [
    "5 · THE NEXT CHAPTER",
    "A New Question",
    "Every answer opens another door.",
  ],
];

export default function About() {
  return (
    <section className="section section-paper" id="about">
      <div className="container">
        <SectionHeading
          eyebrow="WHAT IS SCIENCE STORIES?"
          title={
            <>
              One long story of
              <br />
              <em>human curiosity.</em>
            </>
          }
          text="Science isn't a list of facts to memorise — it's a story of people who refused to stop asking questions. Science Stories turns the great discoveries into short, narrative journeys that connect scientists, ideas and eras, so every concept finds its place in a larger map."
        />
        <div className="pillar-grid">
          {pillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <article
                className="pillar-card reveal"
                style={{ "--reveal-delay": `${index * 100}ms` }}
                key={item.title}
              >
                <div className="pillar-icon">
                  <Icon size={25} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
        <div className="discovery-thread reveal">
          <div className="thread-heading">
            <span>THE FLOW OF SCIENCE STORIES</span>
          </div>
          <div className="thread-flow">
            {thread.map(([year, title, desc], index) => (
              <div className="thread-step" key={year}>
                <div className="thread-node">
                  <span>{year}</span>
                  <strong>{title}</strong>

                  <p>{desc}</p>
                </div>
                {index !== thread.length - 1 && (
                  <div className="thread-connector">
                    <i />
                  </div>
                )}
              </div>
            ))}
          </div>
          <p>
            Every question begins a journey. Every discovery inspires the next.
          </p>
        </div>
      </div>
    </section>
  );
}
