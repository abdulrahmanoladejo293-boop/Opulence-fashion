import React from 'react';
import { motion } from 'framer-motion';
import Hero from './hero';
import Timeline from './timeline';
import Reviews from './reviews';
import clothesTexture from '../clothes.jpeg';
import styles from './home.module.css';

export default function Home() {
  const transitionEase = [0.16, 1, 0.3, 1];

  return (
    <div className={styles.pageWrapper}>
      <Hero />

      <section className={styles.manifesto}>
        <div className={styles.container}>
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: transitionEase }}
            className={styles.manifestoBox}
          >
            <span className={styles.goldMark}>★</span>
            <p className={styles.manifestoText}>
              We exist as a silent rebellion against mass production and disposal garments. Every line we shear is an architectural commitment; every single stitch represents an individual signature of uncompromised precision.
            </p>
          </motion.div>
        </div>
      </section>

      <Timeline />

      {/* Linked directly to your clothes.jpeg background weave texture asset */}
      <section className={styles.parallaxBanner}>
        <div className={styles.parallaxImageFrame}>
          <img 
            src={clothesTexture} 
            alt="Macro textile fiber texture background" 
            className={styles.backgroundImage}
          />
          <div className={styles.darkOverlay}></div>
        </div>
        <div className={styles.bannerContainer}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: transitionEase }}
            className={styles.bannerContent}
          >
            <h2 className={styles.bannerHeadline}>Measure Twice. Cut Once. Wear Forever.</h2>
          </motion.div>
        </div>
      </section>

      <Reviews />
    </div>
  );
}
