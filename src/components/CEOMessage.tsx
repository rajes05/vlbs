'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import styles from './CEOMessage.module.css';

const CEOMessage = () => {
  return (
    <section className="section" id="ceo">
      <div className="container">
        <div className={styles.grid}>
          {/* Image */}
          <motion.div
            className={styles.imageWrapper}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.decoSquare} />
            <div className={styles.decoCircle} />
            <div className={styles.imageFrame}>
              <Image
                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="CEO Basanta Raj Lamsal"
                width={500}
                height={600}
                className={styles.ceoImg}
              />
            </div>
            <motion.div
              className={styles.badge}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <span className={styles.badgeValue}>15+</span>
              <span className={styles.badgeLabel}>Years of Leadership</span>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-tag">Leadership</span>
            <Quote className={styles.quoteIcon} size={56} />
            <h2 className={styles.title}>
              Message From <span className="text-gradient">The CEO</span>
            </h2>
            <div className={styles.divider} />
            <div className={styles.text}>
              <p>
                Namaste and a very warm greeting to all members of Cornortech family and well wishers.
                I strongly believe that communication is an integral part of an organization.
                I am therefore trying to communicate with you regularly through various
                communication means and will do so in the future too.
              </p>
              <p>
                It gives me pleasure that Cornortech is making a good progress to achieve its intended
                goal and expanding day by day. Many unbanked have already received and are enjoying
                its banking and non-banking services.
              </p>
            </div>
            <div className={styles.signature}>
              <h3>Basanta Raj Lamsal</h3>
              <p>Chief Executive Officer, Cornortech</p>
            </div>
            <button className="btn btn-outline">Read Full Message</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CEOMessage;
