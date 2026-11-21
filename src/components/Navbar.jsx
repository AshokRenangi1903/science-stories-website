import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Brand from "./Brand";

const navItems = [
  ["About", "#about"],
  ["Eras", "#eras"],
  ["Features", "#features"],
  ["Who it's for", "#audience"],
  ["Our approach", "#quality"],
  ["Team", "#team"],
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-nav">
      <div className="container nav-inner">
        <Brand />
        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`} aria-label="Main navigation">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} onClick={closeMenu}>{label}</a>
          ))}
          <a className="nav-cta" href="#get" onClick={closeMenu}>
            Get the app <ArrowUpRight size={15} />
          </a>
        </nav>
        <button
          className="menu-toggle"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
