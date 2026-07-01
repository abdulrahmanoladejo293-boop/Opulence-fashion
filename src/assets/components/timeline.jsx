import React from 'react';
import { motion } from 'framer-motion';
import measureDetail from '../measure.jpg';
import womanPortrait from '../woman.jpeg';
import lengthDetail from '../length.jpg';
import dadaDetail from '../dada.jpg';
import styles from './timeline.module.css';

export default function Timeline() {
  const transitionEase = [0.16, 1, 0.3, 1];

  const phases = [
    { num: "01", title: "The Blueprint", subtitle: "Drafting Geometry", desc: "Taking exact anatomical recordings to sketch individual patterns directly onto layout boards.", img: measureDetail },
    { num: "02", title: "The Drape", subtitle: "Sculpting Fabric", desc: "Manipulating woven linen and structured textiles over solid frames to map gravity and fabric flow.", img: womanPortrait },
    { num: "03", title: "The Canvas", subtitle: "Hidden Structure", desc: "Stitching structural interior lining by hand to ensure a lifelong garment memory silhouette.", img: lengthDetail },
    { num: "04", title: "The Final Fit", subtitle: "Sartorial Completion", desc: "The ultimate convergence where premium custom thread lines drop seamlessly across your posture.", img: dadaDetail }
  ];

  return (
    <section className={styles.timeline}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <span className={styles.tagline}>The Method</span>
          <h2 className={styles.heading}>Anatomy of a Garment</h2>
          <p className={styles.subtext}>Our sequential slow-fashion framework tracking architectural cloth execution.</p>
        </div>

        <div className={styles.grid}>
          {phases.map((phase, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.85, ease: transitionEase }}
              className={styles.card}
            >
              <div className={styles.imageFrame}>
                <img src={phase.img} alt={phase.title} className={styles.image} />
                <span className={styles.badge}>{phase.num}</span>
              </div>
              <div className={styles.content}>
                <span className={styles.cardSubtitle}>{phase.subtitle}</span>
                <h3 className={styles.cardTitle}>{phase.title}</h3>
                <div className={styles.stitchDivider}></div>
                <p className={styles.cardDesc}>{phase.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
