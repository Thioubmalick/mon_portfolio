import { motion } from 'framer-motion';
import data from '../data/data.json';

const levelConfig = {
    'Expert': { color: '#00d4ff', bg: 'rgba(0,212,255,0.1)', border: 'rgba(0,212,255,0.25)', dot: '#00d4ff' },
    'Avancé': { color: '#7c3aed', bg: 'rgba(124,58,237,0.1)', border: 'rgba(124,58,237,0.25)', dot: '#7c3aed' },
    'Intermédiaire': { color: '#f472b6', bg: 'rgba(244,114,182,0.1)', border: 'rgba(244,114,182,0.25)', dot: '#f472b6' },
};

const domainIcon = {
    'Frontend': '🖥️',
    'Backend': '⚙️',
    'Data': '📊',
    'Outils': '🔧',
};

const levels = ['Expert', 'Avancé', 'Intermédiaire'];

export default function Skills() {
    // Group by domain
    const domains = [...new Set(data.skills.map(s => s.domain))];

    return (
        <section id="competences" className="section skills-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Mes <span>Compétences</span></h2>
                    <p className="section-subtitle">Les technologies avec lesquelles je travaille</p>
                </motion.div>

                {/* Legend */}
                <motion.div
                    className="skill-legend"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    {levels.map(l => (
                        <div key={l} className="legend-item">
                            <span className="legend-dot" style={{ background: levelConfig[l].dot }} />
                            <span className="legend-label">{l}</span>
                        </div>
                    ))}
                </motion.div>

                {/* Domains grid */}
                <div className="skills-domains">
                    {domains.map((domain, di) => {
                        const domainSkills = data.skills.filter(s => s.domain === domain);
                        return (
                            <motion.div
                                key={domain}
                                className="skill-domain-card glass-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: di * 0.1 }}
                            >
                                <div className="domain-header">
                                    <span className="domain-icon">{domainIcon[domain] || '💡'}</span>
                                    <h3 className="domain-name">{domain}</h3>
                                </div>
                                <div className="domain-chips">
                                    {domainSkills.map((skill, si) => {
                                        const cfg = levelConfig[skill.level] || levelConfig['Intermédiaire'];
                                        return (
                                            <motion.div
                                                key={skill.name}
                                                className="skill-chip"
                                                style={{
                                                    color: cfg.color,
                                                    background: cfg.bg,
                                                    borderColor: cfg.border,
                                                }}
                                                initial={{ opacity: 0, scale: 0.85 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: di * 0.1 + si * 0.05 }}
                                                whileHover={{ scale: 1.06, y: -2 }}
                                                title={skill.level}
                                            >
                                                <span className="chip-icon">{skill.icon}</span>
                                                <span className="chip-name">{skill.name}</span>
                                                <span className="chip-level-dot" style={{ background: cfg.dot }} />
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Currently learning */}
                <motion.div
                    className="skills-learning glass-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <span className="learning-icon">🎯</span>
                    <div>
                        <p className="learning-title">En apprentissage</p>
                        <p className="learning-desc">DeepLearning · RAG · Vector Databases · TypeScript</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
