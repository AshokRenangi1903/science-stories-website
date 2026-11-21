import { ArrowUpRight, Smartphone, Telescope } from "lucide-react";

export default function GetApp() {
  return (
    <section className="get-section dark-section" id="get">
      <div className="get-orbit" />
      <div className="container get-content reveal">
        <div className="get-mark">
          <Telescope size={35} strokeWidth={1.5} />
        </div>

        <h2>
          Let curiosity <em>lead the way.</em>
        </h2>
        <p>
          Read your first story and discover where one question can take you.
        </p>
        <a
          className="button button-gold button-large"
          href="#"
          aria-label="Google Play download link to be added"
        >
          <Smartphone size={18} /> Get the app <ArrowUpRight size={17} />
        </a>
        <span className="get-caption">
          Google Play link will be added before launch.
        </span>
      </div>
    </section>
  );
}
