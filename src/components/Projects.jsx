import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import data from '../data/data.json';

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState('Tous');
    const [lightbox, setLightbox] = useState({ open: false, images: [], index: 0 });

    const categories = ['Tous', ...new Set(data.projects.map(p => p.category))];
    const filtered = activeFilter === 'Tous'
        ? data.projects
        : data.projects.filter(p => p.category === activeFilter);

    const openLightbox = (images, index) => setLightbox({ open: true, images, index });
    const closeLightbox = () => setLightbox({ open: false, images: [], index: 0 });
    const prevImg = () => setLightbox(lb => ({ ...lb, index: (lb.index - 1 + lb.images.length) % lb.images.length }));
    const nextImg = () => setLightbox(lb => ({ ...lb, index: (lb.index + 1) % lb.images.length }));

    return (
        <section id="projets" className="section projects-section">
            <motion.div
                className="section-header"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="section-title">Mes <span className="gradient-text">Projets</span></h2>
                <p className="section-subtitle">Une sélection de mes réalisations récentes</p>
            </motion.div>

            {/* Filters */}
            <div className="project-filters">
                {categories.map(cat => (
                    <button
                        key={cat}
                        className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
                        onClick={() => setActiveFilter(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <motion.div className="projects-grid" layout>
                <AnimatePresence>
                    {filtered.map((project, i) => (
                        <motion.div
                            key={project.id}
                            className="project-card"
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.4, delay: i * 0.08 }}
                            whileHover={{ y: -6 }}
                        >
                            {/* Image gallery preview */}
                            {project.images && project.images.length > 0 ? (
                                <div
                                    className="project-img"
                                    onClick={() => openLightbox(project.images, 0)}
                                    title="Voir les photos"
                                >
                                    <img src={project.images[0]} alt={project.title} />
                                    {project.images.length > 1 && (
                                        <span className="img-count">+{project.images.length - 1} photos</span>
                                    )}
                                    <div className="img-overlay">🔍 Voir les photos</div>
                                </div>
                            ) : (
                                <div className="project-img-placeholder">
                                    <span className="placeholder-icon">🖼️</span>
                                    <span className="placeholder-text">Aucune photo</span>
                                </div>
                            )}

                            {/* Card body */}
                            <div className="project-body">
                                {project.featured && <span className="badge-featured">⭐ Featured</span>}
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc">{project.description}</p>

                                <div className="project-tags">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="tag">{tag}</span>
                                    ))}
                                </div>

                                <div className="project-links">
                                    <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-outline">
                                        GitHub
                                    </a>
                                    {project.demo && project.demo !== '#' && (
                                        <a href={project.demo} target="_blank" rel="noreferrer" className="btn btn-primary">
                                            Demo →
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* Lightbox */}
            <AnimatePresence>
                {lightbox.open && (
                    <motion.div
                        className="lightbox-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeLightbox}
                    >
                        <motion.div
                            className="lightbox-inner"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            onClick={e => e.stopPropagation()}
                        >
                            <button className="lightbox-close" onClick={closeLightbox}>✕</button>
                            <img src={lightbox.images[lightbox.index]} alt="" className="lightbox-img" />
                            {lightbox.images.length > 1 && (
                                <>
                                    <button className="lightbox-prev" onClick={prevImg}>‹</button>
                                    <button className="lightbox-next" onClick={nextImg}>›</button>
                                    <div className="lightbox-counter">{lightbox.index + 1} / {lightbox.images.length}</div>
                                </>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
