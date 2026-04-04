'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, Phone } from 'lucide-react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Calculator', href: '#calculator' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        {/* Top bar — hidden on scroll */}
        <div className={styles.topBar}>
          <div className="container">
            <div className={styles.topBarContent}>
              <div className={styles.topBarLeft}>
                <span><Phone size={12} /> 011-490671 / 011-490672</span>
                <span>Banking with Happiness</span>
              </div>
              <div className={styles.topBarRight}>
                <Link href="#" className={styles.langSwitch}>
                  <Globe size={12} /> Nepali / English
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Main nav bar */}
        <div className={styles.navMain}>
          <Link href="/" className={styles.logoLink}>
            <Image
              src="/images/logo.svg"
              alt="VLBS Logo"
              width={170}
              height={52}
              priority
              className={styles.logoImg}
            />
          </Link>

          <div className={styles.desktopMenu}>
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className={styles.navLink}>
                {link.name}
              </Link>
            ))}
            <Link href="/grievance" className="btn btn-primary" style={{ fontSize: '0.85rem', padding: '0.6rem 1.4rem' }}>
              Grievance Portal
            </Link>
          </div>

          <button
            className={styles.mobileToggle}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className={styles.overlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              className={styles.mobileMenu}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <div className={styles.mobileHeader}>
                <Image
                  src="/images/logo.svg"
                  alt="VLBS"
                  width={120}
                  height={40}
                  className={styles.mobileLogo}
                />
                <button className={styles.mobileToggle} onClick={() => setIsOpen(false)}>
                  <X size={24} />
                </button>
              </div>

              <div className={styles.mobileLinks}>
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                  >
                    <Link
                      href={link.href}
                      className={styles.mobileLink}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div style={{ marginTop: 'auto', padding: '1rem 0' }}>
                <Link href="/grievance" className="btn btn-primary" style={{ width: '100%', display: 'flex' }}>
                  Grievance Portal
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
