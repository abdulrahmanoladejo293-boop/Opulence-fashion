import React from 'react';
import { motion } from 'framer-motion';
import heritagePortrait from '../woman.jpeg';
import styles from './heritage.module.css';

export default function Heritage() {
  const transitionEase = [0.16, 1, 0.3, 1];

  const textFadeVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.85, ease: transitionEase }
    }
  };

  return (
    <section className={styles.heritage}>
      <div className={styles.container}>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className={styles.textColumn}
        >
          <motion.span variants={textFadeVariants} className={styles.tagline}>
            The Lineage
          </motion.span>
          
          <motion.h2 variants={textFadeVariants} className={styles.heading}>
            A Legacy Carved <br />
            in Shears and Stone.
          </motion.h2>
          
          <motion.div variants={textFadeVariants} className={styles.stitchDivider}></motion.div>
          
          <motion.p variants={textFadeVariants} className={styles.paragraph}>
            Established as a dedicated haven for slow fashion, our studio was built on a singular discipline: to respect the natural drape of raw textiles. We rejected the frantic cycles of modern apparel machinery, choosing instead the deliberate cadence of hand-drafted patterns and custom horsehair canvases.
          </motion.p>
          
          <motion.p variants={textFadeVariants} className={styles.paragraph}>
            Every curve we calculate in our studio is an individual dialogue between design and anatomy. Our heritage is anchored not in volume, but in the permanent value of a perfectly balanced silhouette that lasts a lifetime.
          </motion.p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 1.06, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: transitionEase }}
          className={styles.imageColumn}
        >
          <div className={styles.imageWrapper}>
            <img 
              src={heritagePortrait} 
              alt="Artisan hands handling fine custom suit fabrics in an open studio workshop setting" 
              className={styles.image}
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
