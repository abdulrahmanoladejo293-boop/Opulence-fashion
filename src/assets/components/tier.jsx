import React from 'react';
import { motion } from 'framer-motion';
import styles from './tier.module.css';

export default function Tier() {
  const transitionEase = [0.16, 1, 0.3, 1];

  const priorityTiers = [
    {
      badge: "Priority Fit",
      title: "The Express Atelier Tier",
      subtitle: "Accelerated Pattern Execution",
      priceDelta: "+30% Creation Premium",
      timeline: "Delivered within 14–21 Days",
      spec: "Guarantees a dedicated structural cutting table and two reserved overnight artisan assembly sessions to bypass standard seasonal project queues safely.",
      cta: "Request Priority Slot"
    },
    {
      badge: "Elite Event",
      title: "The Sovereign Custom Tier",
      subtitle: "Urgent Bridal & Gala Adjustments",
      priceDelta: "+50% Dynamic Premium",
      timeline: "Delivered within 3–7 Days",
      spec: "Absolute studio containment. Pauses non-urgent operations to allocate our master clothier solely to your garment architecture. Includes midnight emergency fittings.",
      cta: "Activate Emergency Containment"
    }
  ];

  return (
    <div className={styles.tierContainer}>
      <div className={styles.grid}>
        {priorityTiers.map((tier, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, ease: transitionEase, delay: idx * 0.15 }}
            className={styles.tierCard}
          >
            {}
            <div className={styles.sheenEffect}></div>

            {}
            <div className={styles.badgeFrame}>
              <span className={styles.badgeText}>{tier.badge}</span>
            </div>

            {}
            <div className={styles.cardHeader}>
              <span className={styles.cardSubtitle}>{tier.subtitle}</span>
              <h3 className={styles.cardTitle}>{tier.title}</h3>
            </div>

            <div className={styles.priceMatrix}>
              <span className={styles.priceDeltaText}>{tier.priceDelta}</span>
              <div className={styles.stitchDivider}></div>
              <span className={styles.timelineText}>{tier.timeline}</span>
            </div>

            <p className={styles.specDescription}>{tier.spec}</p>

            {}
            <div className={styles.actionFrame}>
              <a href="/book" className={styles.tierBtn}>
                <span>{tier.cta}</span>
                <span className={styles.btnArrow}>→</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
