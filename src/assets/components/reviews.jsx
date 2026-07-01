import React from 'react';
import { motion } from 'framer-motion';
import styles from './reviews.module.css';

export default function Reviews() {
  const transitionEase = [0.16, 1, 0.3, 1];

  // Curated, editorial client feedback tokens
  const testimonials = [
    {
      quote: "The fit of the bespoke bridal silk was absolute poetry in motion. The internal support structures are architectural masterpieces.",
      author: "Helena K.",
      service: "Bespoke Bridal Gown"
    },
    {
      quote: "I have worn historical tailoring from London to Milan, but the shoulder profile cut here defies mechanics. It moves precisely like a second skin.",
      author: "Marcus V.",
      service: "Three-Piece Mohair Suit"
    },
    {
      quote: "They preserved a damaged vintage family coat and re-sculpted the entire linen canvas layout. Pure handiwork and masterclass dedication.",
      author: "Julianne R.",
      service: "Heritage Restructuring"
    }
  ];

  // Stagger orchestrator for continuous card entrance mechanics
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: transitionEase }
    }
  };

  return (
    <section className={styles.editorial}>
      <div className={styles.container}>
        
        {/* Left Aspect: Section Header Stack */}
        <div className={styles.headerBlock}>
          <span className={styles.tagline}>The Record</span>
          <h2 className={styles.heading}>The Studio Ledger</h2>
          <p className={styles.paragraph}>
            Excerpts from our clients on structural integrity, bespoke tailoring movement, and precision hand-stitching dynamics.
          </p>
        </div>

        {/* Right Aspect: Staggered Column Column Array */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className={styles.reviewsGrid}
        >
          {testimonials.map((item, idx) => (
            <motion.div 
              key={idx} 
              variants={cardVariants}
              className={styles.reviewCard}
            >
              <div className={styles.quoteMark}>“</div>
              <p className={styles.quoteText}>{item.quote}</p>
              <div className={styles.divider}></div>
              <div className={styles.meta}>
                <span className={styles.author}>{item.author}</span>
                <span className={styles.service}>{item.service}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
