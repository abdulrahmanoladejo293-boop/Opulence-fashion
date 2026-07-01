import React from 'react';
import { motion } from 'framer-motion';
import clothesTexture from '../clothes.jpeg';
import womanPortrait from '../woman.jpeg';
import measureDetail from '../measure.jpg';
import tailorDetail from '../tailor.jpg';
import styles from './swatch.module.css';

export default function Swatch({ activeFilter }) {
  const transitionEase = [0.16, 1, 0.3, 1];

  const swatches = [
    { id: "OP-201", name: "Opulence Merino Wool", category: "heavy", origin: "Studio Selected Loom", weight: "340g/m Double Twill", img: clothesTexture },
    { id: "OP-404", name: "Bespoke Fine Silk", category: "silk", origin: "Rhône Weavers", weight: "110g/m High-Lustre", img: womanPortrait },
    { id: "OP-109", name: "Organic Studio Flaxen", category: "linen", origin: "Heritage Linen Looms", weight: "180g/m Organic Slub", img: measureDetail },
    { id: "OP-208", name: "Structured Heavy Coating", category: "heavy", origin: "Bespoke Outer Shell Base", weight: "460g/m Ripple Shell", img: tailorDetail }
  ];

  const filteredSwatches = activeFilter === 'all' 
    ? swatches 
    : swatches.filter(item => item.category === activeFilter);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      key={activeFilter}
      className={styles.swatchGrid}
    >
      {filteredSwatches.map((swatch, idx) => (
        <motion.div 
          key={idx}
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: transitionEase }}
          className={styles.swatchCard}
        >
          <div className={styles.visualContainer}>
            <img src={swatch.img} alt={swatch.name} className={styles.fabricImage} />
            <div className={styles.shadowVeil}></div>
            <span className={styles.serialTag}>{swatch.id}</span>
          </div>
          <div className={styles.textMatrix}>
            <span className={styles.originTag}>{swatch.origin}</span>
            <h3 className={styles.textileName}>{swatch.name}</h3>
            <div className={styles.stitchDivider}></div>
            <div className={styles.specDeck}>
              <span className={styles.specLabel}>Weight Profile</span>
              <span className={styles.specValue}>{swatch.weight}</span>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
