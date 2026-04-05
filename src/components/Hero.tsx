'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, MapPin, MessageSquare, ChevronLeft, ChevronRight,
  PiggyBank, CreditCard, Home, Users, Landmark, ShieldCheck
} from 'lucide-react';
import styles from './Hero.module.css';

/* ─── Slider data ─────────────────────────────────── */
const slides = [
  {
    id: 1,
    tag: 'EST. 2023 · Tilottama, Nepal',
    title: 'Banking With\nHappiness',
    subtitle: 'Empowering communities through microfinance, financial literacy, and inclusive banking across Nepal.',
    cta: 'Grab Your Deals',
    ctaSecondary: 'Explore Services',
    accent: 'var(--accent)',
  },
  {
    id: 2,
    tag: 'Microfinance · Savings · Loans',
    title: 'Your Growth\nOur Mission',
    subtitle: 'Trusted by 50,000+ members. Providing affordable credit and savings solutions to every household.',
    cta: 'Apply for Loan',
    ctaSecondary: 'Learn More',
    accent: 'var(--accent)',
  },
  {
    id: 3,
    tag: 'Financial Inclusion · Nepal',
    title: 'Together We\nProsper',
    subtitle: 'Building a financially empowered Nepal — one family, one loan, one dream at a time.',
    cta: 'Join Us Today',
    ctaSecondary: 'Our Branches',
    accent: 'var(--accent)',
  },
];

/* ─── Quick-access services ──────────────────────── */
const services = [
  { icon: PiggyBank,  label: 'Savings',     href: '#services' },
  { icon: CreditCard, label: 'Loans',        href: '#services' },
  { icon: Home,       label: 'Housing Loan', href: '#services' },
  { icon: Users,      label: 'Group Saving', href: '#services' },
  { icon: Landmark,   label: 'Fixed Deposit',href: '#services' },
  { icon: ShieldCheck,label: 'Insurance',    href: '#services' },
];

/* ─── Stats ──────────────────────────────────────── */
const stats = [
  { value: 50000, suffix: '+', label: 'Members' },
  { value: 15,    suffix: '+', label: 'Years of Service' },
  { value: 25,    suffix: '+', label: 'Branches' },
  { value: 98,    suffix: '%', label: 'Satisfaction Rate' },
];

/* ─── Ticker notices ─────────────────────────────── */
const notices = [
  '📢 New loan scheme launched for small businesses — Apply now',
  '🏦 Interest rates updated for FY 2081/82 — Check our latest rates',
  '🎉 VLBS celebrates 2 years of serving communities across Lumbini Province',
  '📋 Annual General Meeting scheduled for Baisakh 2082 — Stay tuned',
];

/* ─── Counter hook ───────────────────────────────── */
function useCounter(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

/* ─── Stat card ──────────────────────────────────── */
function StatCard({ stat, started }: { stat: typeof stats[0]; started: boolean }) {
  const count = useCounter(stat.value, 2000, started);
  return (
    <div className={styles.statCard}>
      <div className={styles.statValue}>
        {count.toLocaleString()}{stat.suffix}
      </div>
      <div className={styles.statLabel}>{stat.label}</div>
    </div>
  );
}

/* ─── Main component ─────────────────────────────── */
const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [statsStarted, setStatsStarted] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const autoRef = useRef<NodeJS.Timeout | null>(null);

  /* Auto-slide */
  const resetAuto = () => {
    if (autoRef.current) clearInterval(autoRef.current);
    autoRef.current = setInterval(() => setCurrent(p => (p + 1) % slides.length), 5500);
  };
  useEffect(() => { resetAuto(); return () => { if (autoRef.current) clearInterval(autoRef.current); }; }, []);

  const go = (dir: 1 | -1) => {
    setCurrent(p => (p + dir + slides.length) % slides.length);
    resetAuto();
  };

  /* Stats intersection observer */
  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStatsStarted(true); }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const slide = slides[current];

  return (
    <div className={styles.heroWrap}>

      {/* ── Ticker bar ───────────────────────────────── */}
      <div className={styles.ticker}>
        <div className={styles.tickerLabel}>NOTICE</div>
        <div className={styles.tickerTrack}>
          <div className={styles.tickerInner}>
            {[...notices, ...notices].map((n, i) => (
              <span key={i} className={styles.tickerItem}>{n}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Hero slider ──────────────────────────────── */}
      <section className={styles.hero}>

        {/* Decorative background layers */}
        <div className={styles.bgGradient} />
        <div className={styles.bgPattern} />
        <div className={styles.bgOrb1} />
        <div className={styles.bgOrb2} />

        {/* Slide content */}
        <div className={styles.slideArea}>
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              className={styles.slideContent}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className={styles.slideTag}>
                <span className={styles.tagDot} />
                {slide.tag}
              </div>

              <h1 className={styles.slideTitle}>
                {slide.title.split('\n').map((line, i) => (
                  <span key={i} className={styles.titleLine}>
                    {i === 1 ? <em className={styles.titleAccent}>{line}</em> : line}
                    {i === 0 && <br />}
                  </span>
                ))}
              </h1>

              <p className={styles.slideSubtitle}>{slide.subtitle}</p>

              <div className={styles.slideActions}>
                <button className="btn btn-accent">
                  {slide.cta} <ArrowRight size={15} />
                </button>
                <button className={styles.outlineBtn}>
                  {slide.ctaSecondary}
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right decorative panel */}
        <div className={styles.decorPanel}>
          <div className={styles.decorCard}>
            <MapPin size={20} className={styles.decorIcon} />
            <div>
              <div className={styles.decorCardTitle}>Branch on Map</div>
              <div className={styles.decorCardSub}>Find nearest branch</div>
            </div>
            <ArrowRight size={14} className={styles.decorArrow} />
          </div>
          <div className={styles.decorCard}>
            <MessageSquare size={20} className={styles.decorIcon} />
            <div>
              <div className={styles.decorCardTitle}>CEO Message</div>
              <div className={styles.decorCardSub}>Basanta Raj Lamsal</div>
            </div>
            <ArrowRight size={14} className={styles.decorArrow} />
          </div>
          <div className={styles.decorHighlight}>
            <div className={styles.decorBig}>15+</div>
            <div>
              <div className={styles.decorHighTitle}>Years of Service</div>
              <div className={styles.decorHighSub}>Trusted by 50,000+ members</div>
            </div>
          </div>
        </div>

        {/* Slider controls */}
        <div className={styles.sliderControls}>
          <button className={styles.sliderBtn} onClick={() => go(-1)} aria-label="Previous">
            <ChevronLeft size={20} />
          </button>
          <div className={styles.sliderDots}>
            {slides.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
                onClick={() => { setCurrent(i); resetAuto(); }}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
          <button className={styles.sliderBtn} onClick={() => go(1)} aria-label="Next">
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Progress bar */}
        <div className={styles.progressBar}>
          <AnimatePresence>
            <motion.div
              key={current}
              className={styles.progressFill}
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 5.5, ease: 'linear' }}
            />
          </AnimatePresence>
        </div>
      </section>

      {/* ── Quick Services Ribbon ─────────────────────── */}
      <div className={styles.servicesRibbon}>
        <div className="container">
          <div className={styles.servicesGrid}>
            {services.map(({ icon: Icon, label, href }) => (
              <a key={label} href={href} className={styles.serviceItem}>
                <div className={styles.serviceIconWrap}>
                  <Icon size={22} />
                </div>
                <span className={styles.serviceLabel}>{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Stats Bar ────────────────────────────────── */}
      <div className={styles.statsBar} ref={statsRef}>
        <div className="container">
          <div className={styles.statsGrid}>
            {stats.map((s) => (
              <StatCard key={s.label} stat={s} started={statsStarted} />
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Hero;