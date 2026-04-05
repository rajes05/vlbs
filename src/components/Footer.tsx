'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
const TwitterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);
const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);
const YoutubeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
    <polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
  </svg>
);
const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);
const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);
const ClockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);
const LocationIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.accentLine} />
      
      <div className="container">
        <div className={styles.grid}>
          
          {/* Brand Column */}
          <div className={styles.brand}>
            <div className={styles.logoWrapper}>
              <Image 
                src="/logo.png" 
                alt="Cornortech Logo" 
                width={160} 
                height={56}
              />
            </div>
              Cornortech Microfinance Pvt. Ltd. — Empowering communities across Nepal with accessible financial services since establishment.
            <div className={styles.social}>
              <a href="https://www.facebook.com" className={styles.socialLink} aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a href="https://www.twitter.com" className={styles.socialLink} aria-label="Twitter">
                <TwitterIcon />
              </a>
              <a href="https://www.instagram.com" className={styles.socialLink} aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href="https://www.youtube.com" className={styles.socialLink} aria-label="YouTube">
                <YoutubeIcon />
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Resources</h4>
            <nav className={styles.navList}>
              <Link href="#">Nepal Rastra Bank</Link>
              <Link href="#">SEBON</Link>
              <Link href="#">NEPSE</Link>
              <Link href="#">CIB Nepal</Link>
              <Link href="#">Ministry of Finance</Link>
            </nav>
          </div>

          {/* Links Column */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Company</h4>
            <nav className={styles.navList}>
              <Link href="#">About Us</Link>
              <Link href="#">Our Services</Link>
              <Link href="#">Careers</Link>
              <Link href="#">Publications</Link>
              <Link href="#">Branch Network</Link>
            </nav>
          </div>

          {/* Contact Column */}
          <div className={styles.contact}>
            <h4 className={styles.columnTitle}>Contact</h4>
            <div className={styles.contactCard}>
              <div className={styles.contactRow}>
                <span className={styles.contactIcon}><LocationIcon /></span>
                <div className={styles.contactText}>
                  <span className={styles.contactLabel}>Head Office</span>
                  <span className={styles.contactValue}>Dhulikhel, Kavrepalanchok</span>
                </div>
              </div>
              <div className={styles.contactRow}>
                <span className={styles.contactIcon}><PhoneIcon /></span>
                <div className={styles.contactText}>
                  <span className={styles.contactLabel}>Phone</span>
                  <span className={styles.contactValue}>011-490671, 011-490672</span>
                </div>
              </div>
              <div className={styles.contactRow}>
                <span className={styles.contactIcon}><MailIcon /></span>
                <div className={styles.contactText}>
                  <span className={styles.contactLabel}>Email</span>
                  <span className={styles.contactValue}>info@cornortech.com.np</span>
                </div>
              </div>
              <div className={styles.contactRow}>
                <span className={styles.contactIcon}><ClockIcon /></span>
                <div className={styles.contactText}>
                  <span className={styles.contactLabel}>Hours</span>
                  <span className={styles.contactValue}>Sun–Thu, 9:30 AM – 5:30 PM</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} Cornortech Microfinance Pvt. Ltd. All rights reserved.
          </p>
          <div className={styles.bottomLinks}>
            <Link href="#">Privacy Policy</Link>
            <span className={styles.dot} />
            <Link href="#">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
