import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Mail, Github, Linkedin, CheckCircle } from 'lucide-react';
import data from '../data/data.json';

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [sent, setSent] = useState(false);

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = e => {
        e.preventDefault();
        // mailto fallback — remplace par EmailJS si tu veux
        const mailto = `mailto:${data.social.email}?subject=Contact de ${form.name}&body=${encodeURIComponent(form.message)}`;
        window.location.href = mailto;
        setSent(true);
        setTimeout(() => setSent(false), 4000);
    };

    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Me <span>Contacter</span></h2>
                    <p className="section-subtitle">Une idée de projet ? Un message ? Je réponds rapidement.</p>
                </motion.div>

                <div className="contact-grid">
                    {/* Info */}
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="contact-card glass-card">
                            <h3 className="contact-card-title"><MessageSquare size={20} style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '6px', paddingBottom: '2px' }} /> Parlons de ton projet</h3>
                            <p className="contact-card-text">
                                Je suis disponible pour des missions freelance, des stages ou des opportunités full-time.
                                N'hésite pas à me contacter !
                            </p>

                            <div className="contact-links">
                                {data.social.email && (
                                    <a href={`mailto:${data.social.email}`} className="contact-link">
                                        <span className="cl-icon"><Mail size={18} /></span>
                                        <span>{data.social.email}</span>
                                    </a>
                                )}
                                {data.social.github && (
                                    <a href={data.social.github} target="_blank" rel="noreferrer" className="contact-link">
                                        <span className="cl-icon"><Github size={18} /></span>
                                        <span>GitHub</span>
                                    </a>
                                )}
                                {data.social.linkedin && (
                                    <a href={data.social.linkedin} target="_blank" rel="noreferrer" className="contact-link">
                                        <span className="cl-icon"><Linkedin size={18} /></span>
                                        <span>LinkedIn</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.form
                        className="contact-form glass-card"
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        <div className="form-group">
                            <label htmlFor="name">Nom</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Ton nom"
                                value={form.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="ton@email.com"
                                value={form.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                placeholder="Décris-moi ton projet ou ton besoin..."
                                value={form.message}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary form-btn">
                            {sent ? <><CheckCircle size={18} style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '6px', paddingBottom: '2px' }} /> Message envoyé !</> : 'Envoyer le message →'}
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
