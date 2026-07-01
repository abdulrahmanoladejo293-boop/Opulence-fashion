import React from 'react';
import { motion } from 'framer-motion';
import Portal from '../components/portal';
import Coords from '../components/coords';
import styles from './book.module.css';

export default function Book() {
  const transitionEase = [0.16, 1, 0.3, 1];

  return (
    <div className={styles.bookingWrapper}>
      
      {/* Concierge Greeting Header Intro Block */}
      <header className={styles.bookingHeader}>
        <div className={styles.container}>
          <motion.div 
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: transitionEase }}
            className={styles.titleStack}
          >
            <span className={styles.tagline}>The Concierge Corridor</span>
            <h1 className={styles.mainTitle}>Schedule a Consultation</h1>
            <div className={styles.stitchLine}></div>
            <p className={styles.description}>
              We welcome your diagnostic measurement intent. Please specify your desired pattern configuration tier below, and our studio team will review workspace clearance records to lock in your private session.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Main Interactive Form Area Wrap */}
      <main className={styles.bookingMain}>
        <div className={styles.container}>
          {/* Step 19: Underline Dynamic Floating Input Form */}
          <Portal />
        </div>
      </main>

      {/* Studio Location Map, Hours, and Telephone Corridors Wrap */}
      <section className={styles.coordsSection}>
        <div className={styles.container}>
          <div className={styles.coordsHeader}>
            <span className={styles.coordsTag}>The Coordinates</span>
            <h2 className={styles.coordsTitle}>Studio Anchors</h2>
          </div>
          
          {/* Step 20: Three-Pillar Information Layout Grid */}
          <Coords />
        </div>
      </section>

    </div>
  );
}
