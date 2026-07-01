import React from 'react';
import { motion } from 'framer-motion';
import styles from './coords.module.css';

export default function Coords() {
  const transitionEase = [0.16, 1, 0.3, 1];

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: transitionEase }
    }
  };

  return (
    <div className={styles.coordsBlock}>
      <motion.div 
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className={styles.gridContainer}
      >
        
        {/* Pillar 01: Physical Geographic Address Maps */}
        <motion.div variants={itemVariants} className={styles.coordinateCard}>
          <span className={styles.cardIndex}>I / Location</span>
          <h3 className={styles.cardHeading}>The Physical Studio</h3>
          <div className={styles.stitchDivider}></div>
          <p className={styles.cardDetails}>
            26 Sartorial Boulevard <br />
            Suite 400, Fourth Floor <br />
            Fashion District, NY 10012
          </p>
          <span className={styles.footnote}>* Secure private garage parking accessible underneath the north entrance form framework.</span>
        </motion.div>

        {/* Pillar 02: Operational Hour Matrix Boundaries */}
        <motion.div variants={itemVariants} className={styles.coordinateCard}>
          <span className={styles.cardIndex}>II / Schedule</span>
          <h3 className={styles.cardHeading}>Operating Cycles</h3>
          <div className={styles.stitchDivider}></div>
          <div className={styles.scheduleMatrix}>
            <div className={styles.scheduleRow}>
              <span className={styles.dayLabel}>Mon — Fri</span>
              <span className={styles.hourValue}>09:00 — 18:30</span>
            </div>
            <div className={styles.scheduleRow}>
              <span className={styles.dayLabel}>Saturday</span>
              <span className={styles.hourValue}>10:00 — 15:00</span>
            </div>
            <div className={styles.scheduleRow}>
              <span className={styles.dayLabel}>Sunday</span>
              <span className={styles.hourValue}>Closed Studio</span>
            </div>
          </div>
          <span className={styles.footnote}>* Fitting sessions run strictly by locked digital arrangement. No unrecorded entrances.</span>
        </motion.div>

        {/* Pillar 03: Direct Diagnostic Communication Tokens */}
        <motion.div variants={itemVariants} className={styles.coordinateCard}>
          <span className={styles.cardIndex}>III / Contact</span>
          <h3 className={styles.cardHeading}>Direct Corridors</h3>
          <div className={styles.stitchDivider}></div>
          <p className={styles.cardDetails}>
            <span className={styles.label}>Inquiries:</span> concierge@opulencefashion.com <br />
            <span className={styles.label}>Telephone:</span> +1 (212) 555-0178 <br />
            <span className={styles.label}>Secure Text:</span> +1 (212) 555-0179
          </p>
          <span className={styles.footnote}>* Active response times inside current architectural studio workshop shifts.</span>
        </motion.div>

      </motion.div>
    </div>
  );
}
