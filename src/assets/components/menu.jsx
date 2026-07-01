import React from 'react';
import { motion } from 'framer-motion';
import styles from './menu.module.css';

export default function Menu() {
  const transitionEase = [0.16, 1, 0.3, 1];

  const bespokeServices = [
    { name: "Bespoke Two-Piece Suit", price: "$2,400+", time: "6-8 Weeks" },
    { name: "Bespoke Three-Piece Suit", price: "$2,900+", time: "7-9 Weeks" },
    { name: "Haute Couture Evening Gown", price: "$3,200+", time: "8-10 Weeks" },
    { name: "Bespoke Sport Jacket / Blazer", price: "$1,400+", time: "4-6 Weeks" },
    { name: "Custom Tailored Dress Shirt", price: "$220+", time: "2-3 Weeks" }
  ];

  const refiningServices = [
    { name: "Suit Jacket Taper & Re-sculpt", price: "$180+", time: "5-7 Days" },
    { name: "Trouser Hemming & Cuffing", price: "$45+", time: "2-3 Days" },
    { name: "Trouser Waist & Seat Adjustment", price: "$65+", time: "3-4 Days" },
    { name: "Full Overcoat Relining", price: "$280+", time: "7-10 Days" },
    { name: "Bridal Gown Refining Fitting", price: "$450+", time: "2-3 Weeks" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const rowVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: transitionEase } 
    }
  };

  return (
    <div className={styles.menuMatrix}>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className={styles.columnsGrid}
      >
        
        {/* Column 1: Bespoke Creation Offerings */}
        <div className={styles.menuColumn}>
          <h3 className={styles.columnTitle}>Bespoke Creation</h3>
          <p className={styles.columnSubtitle}>Initial draft concepts compiled entirely from raw pattern cuts.</p>
          
          <div className={styles.rowsContainer}>
            {bespokeServices.map((service, idx) => (
              <motion.div variants={rowVariants} key={idx} className={styles.serviceRow}>
                <div className={styles.mainLine}>
                  <span className={styles.serviceName}>{service.name}</span>
                  <div className={styles.stitchDots}></div>
                  <span className={styles.servicePrice}>{service.price}</span>
                </div>
                <div className={styles.metaLine}>
                  <span className={styles.timeTag}>Duration: {service.time}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Column 2: Structural Adjustments & Alterations */}
        <div className={styles.menuColumn}>
          <h3 className={styles.columnTitle}>Restructuring & Refining</h3>
          <p className={styles.columnSubtitle}>Deconstructing and balancing existing pre-made garments.</p>
          
          <div className={styles.rowsContainer}>
            {refiningServices.map((service, idx) => (
              <motion.div variants={rowVariants} key={idx} className={styles.serviceRow}>
                <div className={styles.mainLine}>
                  <span className={styles.serviceName}>{service.name}</span>
                  <div className={styles.stitchDots}></div>
                  <span className={styles.servicePrice}>{service.price}</span>
                </div>
                <div className={styles.metaLine}>
                  <span className={styles.timeTag}>Duration: {service.time}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </motion.div>
    </div>
  );
}
