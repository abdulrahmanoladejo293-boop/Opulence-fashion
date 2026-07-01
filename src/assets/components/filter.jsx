import React from 'react';
import { motion } from 'framer-motion';
import styles from './filter.module.css';

export default function Filter({ activeFilter, setActiveFilter }) {
  // Curated luxury fabric filter categorizations
  const filterOptions = [
    { label: "All Textiles", value: "all" },
    { label: "Heavy Coatings", value: "heavy" },
    { label: "Structured Silks", value: "silk" },
    { label: "Breathable Linens", value: "linen" }
  ];

  return (
    <div className={styles.filterControl}>
      <div className={styles.track}>
        {filterOptions.map((option, idx) => (
          <button
            key={idx}
            onClick={() => setActiveFilter(option.value)}
            className={`${styles.filterBtn} ${activeFilter === option.value ? styles.activeBtn : ''}`}
          >
            <span className={styles.label}>{option.label}</span>
            
            {/* Elegant luxury background underline shift animation */}
            {activeFilter === option.value && (
              <motion.div 
                layoutId="activeFilterUnderline"
                className={styles.activeLine}
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>
      <div className={styles.baseStitchLine}></div>
    </div>
  );
}
