export default function Brand({ footer = false }) {
  return (
    <a
      className={`brand ${footer ? "brand-footer" : ""}`}
      href="#home"
      aria-label="Science Stories home"
    >
      <img
        src="/images/app_icon.png"
        alt="Science Stories logo"
        className="brand-logo"
      />

      <span>
        Science Stories<sup>™</sup>
      </span>
    </a>
  );
}
