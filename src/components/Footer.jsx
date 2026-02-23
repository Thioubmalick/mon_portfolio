import data from '../data/data.json';

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="footer">
            <div className="container footer-inner">
                <a href="#accueil" className="footer-logo">
                    {data.personal.name}<span>.</span>
                </a>
                <p className="footer-copy">
                    © {year} {data.personal.name} — Fait avec ❤️ et React
                </p>
                <div className="footer-links">
                    <a href="#projets">Projets</a>
                    <a href="#apropos">À propos</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </footer>
    );
}
