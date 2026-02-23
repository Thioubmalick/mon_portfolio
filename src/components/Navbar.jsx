import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import data from '../data/data.json';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['accueil', 'apropos', 'projets', 'contact'];
  const labels = ['Accueil', 'À Propos', 'Projets', 'Contact'];

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="navbar-inner">
        <a href="#accueil" className="navbar-logo">
          {data.personal.name}<span>.</span>
        </a>

        {/* Desktop Links */}
        <ul className="navbar-links">
          {links.map((link, i) => (
            <li key={i}>
              <a href={`#${link}`} className="nav-link">{labels[i]}</a>
            </li>
          ))}
        </ul>

        {/* Burger */}
        <button className={`burger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="mobile-menu"
        initial={false}
        animate={{ height: menuOpen ? 'auto' : 0, opacity: menuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ overflow: 'hidden' }}
      >
        {links.map((link, i) => (
          <a key={i} href={`#${link}`} className="mobile-link" onClick={() => setMenuOpen(false)}>
            {labels[i]}
          </a>
        ))}
      </motion.div>
    </motion.nav>
  );
}
