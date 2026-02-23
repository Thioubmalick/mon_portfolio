import { motion } from 'framer-motion';
import data from '../data/data.json';

const highlights = [
    { icon: '🌐', label: 'Développement Web', desc: 'Applications full stack modernes' },
    { icon: '📊', label: 'Data & Analytics', desc: 'Traitement et visualisation de données' },
    { icon: '🤖', label: 'IA & LLM', desc: 'Intégration de modèles de langage' },
    { icon: '🎓', label: 'Apprentissage continu', desc: 'Toujours en veille technologique' },
];

export default function About() {
    const { name, bio, avatar } = data.personal;

    return (
        <section id="apropos" className="section about-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">À <span>Propos</span></h2>
                    <p className="section-subtitle">Qui suis-je et qu'est-ce qui me passionne ?</p>
                </motion.div>

                <div className="about-grid">
                    {/* Photo */}
                    <motion.div
                        className="about-photo-wrap"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="about-photo">
                            {avatar ? (
                                <img src={avatar} alt={name} />
                            ) : (
                                <div className="about-photo-placeholder">
                                    <span className="about-initials">{name.charAt(0)}</span>
                                    <p className="photo-hint">📸 Photo à venir</p>
                                </div>
                            )}
                            <div className="about-photo-glow" />
                        </div>
                    </motion.div>

                    {/* Text */}
                    <motion.div
                        className="about-content"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        <h3 className="about-name">{name} <span className="wave">👋</span></h3>
                        <p className="about-bio">{bio}</p>

                        <div className="about-highlights">
                            {highlights.map((h, i) => (
                                <motion.div
                                    key={i}
                                    className="highlight-item glass-card"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + i * 0.1 }}
                                >
                                    <span className="hi-icon">{h.icon}</span>
                                    <div>
                                        <p className="hi-label">{h.label}</p>
                                        <p className="hi-desc">{h.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <a href="#contact" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
                            Travaillons ensemble →
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
