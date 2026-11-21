export default function FeatureCard({ icon: Icon, title, text, index = 0 }) {
  return (
    <article className="feature-card reveal" style={{ "--reveal-delay": `${index * 85}ms` }}>
      <div className="feature-icon"><Icon size={23} strokeWidth={1.7} /></div>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}
