import React from 'react';
import { motion } from 'framer-motion';
import Menu from '../components/menu';
import Tier from '../components/tier';
import styles from './rate.module.css';

export default function Rate() {
  const transitionEase = [0.16, 1, 0.3, 1];

  return (
    <div className={styles.ratesWrapper}>
      
      {/* Structural Investment Header Intro Block */}
      <header className={styles.ratesHeader}>
        <div className={styles.container}>
          <motion.div 
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: transitionEase }}
            className={styles.titleStack}
          >
            <span className={styles.tagline}>The Investment Ledger</span>
            <h1 className={styles.mainTitle}>Services & Rates</h1>
            <div className={styles.stitchLine}></div>
            <p className={styles.description}>
              Transparency in craftsmanship. Our financial pricing structure is derived directly from pattern deconstruction hours, technical fitting phases, and the precise yardage weight of our sourced textiles.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Section 1: The Transparency Pledge Card */}
      <section className={styles.pledgeSection}>
        <div className={styles.container}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.85, ease: transitionEase }}
            className={styles.pledgeCard}
          >
            <h3 className={styles.pledgeTitle}>Our Commitment to Value</h3>
            <p className={styles.pledgeText}>
              Bespoke clothing is an architectural investment in your presence. We quote all core services strictly on baseline thresholds; your final total will mirror the exact difficulty of your posture alignment profile and the choice of lining elements. No auxiliary margins are ever hidden.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Stitch-Lined Pricing Matrix Block */}
      <main className={styles.ratesMain}>
        <div className={styles.container}>
          {/* Step 16: Custom Core Menu Element */}
          <Menu />
        </div>
      </main>

      {/* Section 4: Urgent Priority Escalation Tiers */}
      <section className={styles.prioritySection}>
        <div className={styles.container}>
          <div className={styles.priorityHeader}>
            <span className={styles.priorityTag}>Urgent Adjustments</span>
            <h2 className={styles.priorityTitle}>Accelerated Studio Tiers</h2>
            <p className={styles.priorityText}>
              For urgent galas, immediate wedding dates, or high-profile events requiring priority workspace clearance.
            </p>
          </div>
          
          {/* Step 17: Extraordinary High-Contrast Tier Box Element */}
          <Tier />
        </div>
      </section>

    </div>
  );
}
