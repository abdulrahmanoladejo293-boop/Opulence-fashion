import React from 'react';
import { motion } from 'framer-motion';
import workImage from '../work.jpg';
import womanPortrait from '../woman.jpeg';
import measureDetail from '../measure.jpg';
import tailorDetail from '../tailor.jpg';
import clothesTexture from '../clothes.jpeg';
import styles from './masonry.module.css';

export default function Masonry() {
  const transitionEase = [0.16, 1, 0.3, 1];

  const items = [
    { img: workImage, title: "The Sovereign Silhouette Line", fabric: "Premium Structured Textile Array", type: "Bespoke Creation", size: "tall" },
    { img: womanPortrait, title: "The Silk Evening Contour", fabric: "Bespoke Delicate Fabric Blends", type: "Haute Couture", size: "wide" },
    { img: measureDetail, title: "The Double-Breasted Overcoat", fabric: "Heavy Textured Sourced Wool", type: "Signature Cut", size: "square" },
    { img: clothesTexture, title: "The Minimalist Tapered Trouser", fabric: "Organic Flax Structural Lining", type: "Refined Adjustment", size: "tall" },
    { img: tailorDetail, title: "The Drape Study", fabric: "Hand-Finished Wool Plate", type: "Studio Detail", size: "wide" }
  ];

  return (
    <div className={styles.masonryBlock}>
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        className={styles.masonryGrid}
      >
        {items.map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: transitionEase }}
            className={`${styles.gridItem} ${styles[item.size]}`}
          >
            <div className={styles.frame}>
              <img src={item.img} alt={item.title} className={styles.image} />
              <div className={styles.overlayLayer}>
                <div className={styles.metaTop}>
                  <span className={styles.typeTag}>{item.type}</span>
                </div>
                <div className={styles.metaBottom}>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <div className={styles.threadLine}></div>
                  <span className={styles.fabricDetails}>{item.fabric}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
