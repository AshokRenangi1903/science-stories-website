import { ArrowUpRight } from "lucide-react";
import Brand from "./Brand";

const explore = [
  ["About", "#about"],
  ["Scientific eras", "#eras"],
  ["Features", "#features"],
  ["Our team", "#team"],
];
const company = [
  ["Scientific quality", "#quality"],
  ["Contact", "mailto:support@sciencestories.in"],
  ["Privacy policy", "#"],
  ["Terms of service", "#"],
];

function FooterLinks({ title, links }) {
  return (
    <div>
      <h3>{title}</h3>
      <ul>
        {links.map(([label, href]) => (
          <li key={label}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <Brand footer />
            <p>Science, told as connected stories — not isolated facts.</p>
          </div>
          <FooterLinks title="Explore" links={explore} />
          <FooterLinks title="Company" links={company} />
          <div>
            <h3>Get in touch</h3>
            <a className="footer-email" href="mailto:support@sciencestories.in">
              support@sciencestories.in <ArrowUpRight size={14} />
            </a>
            <p className="footer-note">
              Follow our journey as we make science more connected, one story at
              a time.
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Science Voyage Studios LLP. All rights
            reserved.
          </span>
          <span>
            Made with curiosity in India <span aria-label="India">✦</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
