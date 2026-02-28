import { motion } from 'framer-motion';
import { Atom, Database, FileCode, Bot } from 'lucide-react';
import data from '../data/data.json';

export default function Hero() {
    const { name, title, subtitle, resume } = data.personal;
    const { github, linkedin, email } = data.social;

    const words = title.split(' ');

    return (
        <section id="accueil" className="hero-section">
            {/* Animated grid background */}
            <div className="hero-grid" aria-hidden="true" />

            <div className="container hero-container">
                {/* Left: text */}
                <div className="hero-text">
                    <motion.div
                        className="hero-badge"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="badge-dot" />
                        Disponible pour des opportunités
                    </motion.div>

                    <motion.h1
                        className="hero-title"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Salut, je suis <br />
                        <span className="gradient-text">{name}</span>
                    </motion.h1>

                    <motion.div
                        className="hero-role"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {words.map((w, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 + i * 0.08 }}
                                className={i === 0 ? 'role-accent' : ''}
                            >
                                {w}{' '}
                            </motion.span>
                        ))}
                    </motion.div>

                    <motion.p
                        className="hero-subtitle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        {subtitle}
                    </motion.p>

                    <motion.div
                        className="hero-actions"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <a href="#projets" className="btn btn-primary">
                            Voir mes projets <span>→</span>
                        </a>
                        {resume && resume !== '#' ? (
                            <a href={resume} target="_blank" rel="noreferrer" className="btn btn-outline">
                                Mon CV
                            </a>
                        ) : (
                            <a href="#contact" className="btn btn-outline">
                                Me contacter
                            </a>
                        )}
                    </motion.div>

                    <motion.div
                        className="hero-socials"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        {github && (
                            <a href={github} target="_blank" rel="noreferrer" className="social-icon" aria-label="GitHub">
                                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                    <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.93c.57.1.78-.25.78-.55v-1.93c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.53-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.97 10.97 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.74.8 1.18 1.83 1.18 3.08 0 4.41-2.68 5.38-5.24 5.67.41.35.78 1.05.78 2.12v3.14c0 .3.2.66.79.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
                                </svg>
                            </a>
                        )}
                        {linkedin && (
                            <a href={linkedin} target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn">
                                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                    <path d="M20.45 20.45h-3.57v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.33V9h3.43v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM3.55 20.45h3.57V9H3.55v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
                                </svg>
                            </a>
                        )}
                        {email && (
                            <a href={`mailto:${email}`} className="social-icon" aria-label="Email">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                                    <rect x="2" y="4" width="20" height="16" rx="2" />
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                </svg>
                            </a>
                        )}
                    </motion.div>
                </div>

                {/* Right: avatar card */}
                <motion.div
                    className="hero-visual"
                    initial={{ opacity: 0, scale: 0.8, x: 60 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, type: 'spring' }}
                >
                    <div className="avatar-card">
                        <div className="avatar-ring">
                            <div className="avatar-img-wrap">
                                {data.personal.avatar ? (
                                    <img src={data.personal.avatar} alt={name} className="avatar-img" />
                                ) : (
                                    <div className="avatar-placeholder">
                                        <span>{name.charAt(0)}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="avatar-info">
                            <p className="avatar-name">{name}</p>
                            <p className="avatar-role">{title}</p>
                        </div>
                        {/* Floating tech pills */}
                        <div className="tech-pill pill-1"><Atom size={14} style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '4px', paddingBottom: '2px' }} /> React</div>
                        <div className="tech-pill pill-2"><Database size={14} style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '4px', paddingBottom: '2px' }} /> Laravel</div>
                        <div className="tech-pill pill-3"><FileCode size={14} style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '4px', paddingBottom: '2px' }} /> Python</div>
                        <div className="tech-pill pill-4"><Bot size={14} style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '4px', paddingBottom: '2px' }} /> LLM</div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="scroll-indicator"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.8 }}
            >
                <div className="scroll-line" />
                <span>scroll</span>
            </motion.div>
        </section>
    );
}
