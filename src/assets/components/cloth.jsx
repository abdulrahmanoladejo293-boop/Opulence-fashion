import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Filter from '../components/filter';
import Swatch from '../components/swatch';
import styles from './cloth.module.css';

export default function Cloth() {
  const [activeFilter, setActiveFilter] = useState('all');
  const transitionEase = [0.16, 1, 0.3, 1];

  return (
    <div className={styles.vaultWrapper}>
      
      {}
      <header className={styles.vaultHeader}>
        <div className={styles.container}>
          <motion.div 
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: transitionEase }}
            className={styles.titleStack}
          >
            <span className={styles.tagline}>The Archives</span>
            <h1 className={styles.mainTitle}>The Textile Vault</h1>
            <div className={styles.stitchLine}></div>
            <p className={styles.description}>
              A digital index of our premium material vault. We source raw, structural fibers exclusively from historic, family-run weavers committed to sustainable yarn weights and flawless heritage patterns.
            </p>
          </motion.div>
        </div>
      </header>

      
      <main className={styles.vaultMain}>
        <div className={styles.container}>
          
          <Filter activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
          
          <Swatch activeFilter={activeFilter} />
          
        </div>
      </main>

    </div>
  );
}
