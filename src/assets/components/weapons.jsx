import React from 'react';
import { motion } from 'framer-motion';
import styles from './weapons.module.css';

export default function Weapons() {
  const  transitionEase = [0.16, 1, 0.3, 1];

  const instruments = [
    {
      id: "01",
      name: "The Heavy Shears",
      purpose: "Mathematical Execution",
      detail: "Weighted forged brass shears crafted for crisp, micro-accurate lines through thick wool blends without warping the fabric warp fibers."
    },
    {
      id: "02",
      name: "The Steel Thimble",
      purpose: "Endless Precision Stitching",
      detail: "Our permanent anchor. Worn to push heavy thread lines through thick internal structural lapel horsehair layers entirely by hand."
    },
    {
      id: "03",
      name: "The Talc Chalk",
      purpose: "Anatomical Mapping",
      detail: "Finely pressed clay used to trace fluid body dimensions and structural structural posture calculations onto dark textiles."
    },
    {
      id: "04",
      name: "The Heritage Loom",
      purpose: "Textile Integrity Sourcing",
      detail: "Connecting our patterns only with family-run weavers who produce raw linen and cashmere wool with perfect environmental weight balances."
    }
  ];

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const elementVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: transitionEase }
    }
  };

  return (
    <section className={styles.weaponsSection}>
      <div className={styles.wrapper}>
        
        {}
        <div className={styles.sectionHeader}>
          <span className={styles.tagline}>The Instruments</span>
          <h2 className={styles.heading}>Weapons of Precision</h2>
          <p className={styles.subtext}>
            Our trusted studio companions. Four tactile tools that transform raw, structural concepts into fluid, living clothing armor.
          </p>
        </div>

        {}
        <motion.div 
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className={styles.quadrantGrid}
        >
          {instruments.map((tool, index) => (
            <motion.div 
              key={index}
              variants={elementVariants}
              className={styles.toolCard}
            >
              <div className={styles.cardHeader}>
                <span className={styles.toolId}>{tool.id}</span>
                <span className={styles.toolPurpose}>{tool.purpose}</span>
              </div>
              
              <h3 className={styles.toolName}>{tool.name}</h3>
              <div className={styles.stitchLine}></div>
              <p className={styles.toolDetail}>{tool.detail}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
