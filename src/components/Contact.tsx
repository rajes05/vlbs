'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Mail, Send } from 'lucide-react';
import styles from './Contact.module.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section className={styles.section} id="contact">
      <div className="container">
        <div className={styles.header}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Get <span className="text-gradient">Support</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Committed to helping you meet all your banking needs.
          </motion.p>
        </div>

        <div className={styles.grid}>
          {/* Info Panel */}
          <motion.div
            className={styles.infoPanel}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3>Contact Information</h3>

            <div className={styles.contactItems}>
              <div className={styles.contactItem}>
                <div className={styles.iconBox}><MapPin size={20} /></div>
                <div>
                  <strong>Office</strong>
                  <p>Dhulikhel, Kavre, Nepal</p>
                </div>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.iconBox}><Clock size={20} /></div>
                <div>
                  <strong>Office Hours</strong>
                  <p>Sun – Thu: 09:30am to 5:30pm</p>
                </div>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.iconBox}><Phone size={20} /></div>
                <div>
                  <strong>Front Desk</strong>
                  <p>011-490671 / 011-490672</p>
                </div>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.iconBox}><Mail size={20} /></div>
                <div>
                  <strong>Email</strong>
                  <p>info@cornortech.com.np</p>
                </div>
              </div>
            </div>

            <div className={styles.decoBall}></div>
          </motion.div>

          {/* Form */}
          <motion.form
            className={styles.form}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor="name">Full Name *</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="email">Email Address *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor="phone">Phone Number *</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="98XXXXXXXX"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                placeholder="How can we help you?"
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
              {sent ? '✓ Message Sent!' : <><Send size={16} /> Send a Message</>}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
