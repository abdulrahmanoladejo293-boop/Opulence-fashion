import React from 'react';
import { motion } from 'framer-motion';
import styles from './foot.module.css';

export default function Foot() {
  const footerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.1
      }
    }
  };

  const columnVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <motion.footer 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={footerVariants}
      className={styles.footer}
    >
      <div className={styles.container}>
        
        <motion.div variants={columnVariants} className={styles.brandColumn}>
          <h2 className={styles.title}>OPULENCE FASHION</h2>
          <p className={styles.description}>
            Bespoke tailoring and textile transformation. Built uniquely around human anatomy. Crafted by hand, stitch by stitch, in our quiet studio.
          </p>
        </motion.div>

        <motion.div variants={columnVariants} className={styles.linksColumn}>
          <div className={styles.linkGroup}>
            <h4 className={styles.heading}>The House</h4>
            <ul className={styles.list}>
              <li><a href="/story" className={styles.itemLink}>Our Story</a></li>
              <li><a href="/work" className={styles.itemLink}>The Lookbook</a></li>
              <li><a href="/cloth" className={styles.itemLink}>Fabric Vault</a></li>
            </ul>
          </div>
          <div className={styles.linkGroup}>
            <h4 className={styles.heading}>Concierge</h4>
            <ul className={styles.list}>
              <li><a href="/rate" className={styles.itemLink}>Services & Rates</a></li>
              <li><a href="/book" className={styles.itemLink}>Book a Fitting</a></li>
              <li><a href="/contact" className={styles.itemLink}>Coordinates</a></li>
            </ul>
          </div>
        </motion.div>

        <motion.div variants={columnVariants} className={styles.journalColumn}>
          <h4 className={styles.heading}>The Lookbook Gazette</h4>
          <p className={styles.journalText}>
            Receive subtle structural alerts, pattern release updates, and seasonal textile analysis details.
          </p>
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className={styles.input}
              required
            />
            <button type="submit" className={styles.submitBtn} aria-label="Subscribe">
              <span className={styles.arrow}>→</span>
            </button>
          </form>
        </motion.div>

      </div>

      <div className={styles.bottomBoundary}>
        <p className={styles.copyright}>
          — © 2026 Opulence Fashion. All Patterns, Cuts, and Code Records Reserved. —
        </p>
      </div>
    </motion.footer>
  );
}
