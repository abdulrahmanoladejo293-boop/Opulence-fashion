import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import seamDetail from '../measure.jpg';
import buttonDetail from '../work.jpg';
import liningDetail from '../clothes.jpeg';
import styles from './zoom.module.css';

export default function Zoom() {
  const transitionEase = [0.16, 1, 0.3, 1];
  const [activeIndex, setActiveIndex] = useState(0);

  // Micro-craftsmanship visual items mapping to your local assets folder
  const macroFocusItems = [
    {
      title: "The Hand-Rolled Lapel Seam",
      metric: "0.2mm Precision Stitching",
      desc: "An isolated look at our silk-thread edging. Every single inch contains exactly twenty deliberate pierce points executed entirely by hand to ensure a soft, fluid contour fold.",
      img: seamDetail
    },
    {
      title: "Real Horn Button Fastenings",
      metric: "Cross-Thread Pinned Anchor",
      desc: "Sourced from historical horn crafters, each button is anchored onto the wool chassis using a raised thread shank foundation to guarantee lifelong strength and flexibility.",
      img: buttonDetail
    },
    {
      title: "Bespoke Silk Jacquard Lining",
      metric: "Internal Hidden Breathability",
      desc: "The inner layer of our tailoring features abstract geometric weave patterns. Cut wider than the outer shell to allow complete, frictionless upper body rotation.",
      img: liningDetail
    }
  ];

  return (
    <div className={styles.macroFocus}>
      <div className={styles.container}>
        
        {/* Left Side Element Column: The Selector Menu Controller */}
        <div className={styles.menuColumn}>
          <div className={styles.headerBlock}>
            <span className={styles.tagline}>Micro Architecture</span>
            <h2 className={styles.heading}>The Close-Up Review</h2>
          </div>

          <div className={styles.selectorList}>
            {macroFocusItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`${styles.selectorRow} ${activeIndex === idx ? styles.activeRow : ''}`}
              >
                <div className={styles.rowLead}>
                  <span className={styles.rowNumber}>0{idx + 1}</span>
                  <div className={styles.rowLineToken}></div>
                </div>
                <div className={styles.rowContent}>
                  <h3 className={styles.rowTitle}>{item.title}</h3>
                  <span className={styles.rowMetric}>{item.metric}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Right Side Element Column: The Fluid Dynamic Display Frame */}
        <div className={styles.displayColumn}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20, scale: 1.02 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -20, scale: 0.98 }}
              transition={{ duration: 0.65, ease: transitionEase }}
              className={styles.displayCard}
            >
              <div className={styles.imageFrameWrapper}>
                <img 
                  src={macroFocusItems[activeIndex].img} 
                  alt={macroFocusItems[activeIndex].title} 
                  className={styles.macroImage}
                />
                <div className={styles.lensShade}></div>
              </div>
              
              <div className={styles.cardDetails}>
                <p className={styles.detailText}>
                  {macroFocusItems[activeIndex].desc}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
