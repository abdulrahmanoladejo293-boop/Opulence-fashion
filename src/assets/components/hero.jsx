import React from 'react';
import { motion } from 'framer-motion';
import lengthDetail from '../length.jpg';
import tailorDetail from '../tailor.jpg';
import styles from './hero.module.css';

export default function Hero() {
  const transitionEase = [0.16, 1, 0.3, 1];

  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 }
    }
  };

  const textFadeVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.85, ease: transitionEase }
    }
  };

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        
        <motion.div 
          variants={textContainerVariants}
          initial="hidden"
          animate="visible"
          className={styles.textBlock}
        >
          <motion.span variants={textFadeVariants} className={styles.tagline}>
            Opulence Fashion — Bespoke Atelier
          </motion.span>
          <motion.h1 variants={textFadeVariants} className={styles.headline}>
            Crafting Silhouettes, <br />
            Defining Identity.
          </motion.h1>
          <motion.p variants={textFadeVariants} className={styles.paragraph}>
            Every line cut is a study of human mechanics. We build high-end garments entirely from raw, luxury textiles, tailored exactly to your presence.
          </motion.p>
          <motion.div variants={textFadeVariants} className={styles.actionFrame}>
            <a href="/book" className={styles.ctaLink}>
              <span>Begin Your Fitting Layout</span>
              <span className={styles.arrowIcon}>→</span>
            </a>
          </motion.div>
        </motion.div>

        <div className={styles.visualBlock}>
          {/* Primary Viewport Image slotted to your hero.png */}
          <motion.div 
            initial={{ opacity: 0, scale: 1.1, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: transitionEase, delay: 0.1 }}
            className={styles.primaryFrame}
          >
            <div className={styles.imageWrapper}>
              <img src={lengthDetail} alt="Opulence design presentation model" className={styles.image} />
            </div>
          </motion.div>

          {/* Secondary Detail Frame slotted to your tailor.jpg */}
          <motion.div 
            initial={{ opacity: 0, scale: 1.1, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.4, ease: transitionEase, delay: 0.3 }}
            className={styles.detailFrame}
          >
            <div className={styles.imageWrapper}>
              <img src={tailorDetail} alt="Tailor artisan details" className={styles.image} />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
