import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'; 
import styles from './nav.module.css';

export default function Nav() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => { 
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 120 && !isOpen) {
      setHidden(true); 
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const menuItems = [
    { name: "The Story", path: "/story" },
    { name: "Lookbook", path: "/work" },
    { name: "Fabric Vault", path: "/cloth" },
    { name: "Services", path: "/rate" }
  ];

  // Motion variants for high-class text fade cascading animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <>
      <motion.nav 
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" }
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={styles.navbar}
      >
        <div className={styles.container}>
          {/* Cell A: The Identity Monogram */}
          <div className={styles.logo}>
            <a href="/" aria-label="Opulence Fashion">
              <span className={styles.brandText}>OPULENCE</span>
              <span className={styles.brandTextAlt}>FASHION</span>
            </a>
          </div>

          {/* Cell B: Desktop Thread Links (Hidden on Mobile) */}
          <ul className={styles.menu}>
            {menuItems.map((item, idx) => (
              <li key={idx} className={styles.item}>
                <a href={item.path} className={styles.link}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Cell C: Concierge Desktop CTA Button */}
          <div className={styles.action}>
            <a href="/book" className={styles.btn}>
              <span>Reserve Fitting</span>
            </a>
          </div>

          {/* Mobile Menu Trigger Token (Visible on Phone/Tablet) */}
          <button 
            className={`${styles.trigger} ${isOpen ? styles.triggerActive : ''}`} 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <span className={styles.triggerLine}></span>
            <span className={styles.triggerLine}></span>
          </button>
        </div>
      </motion.nav>

      {/* Full-Screen Mobile Glassmorphic Overlay Curtain */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className={styles.overlay}
          >
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className={styles.overlayContainer}
            >
              <ul className={styles.overlayMenu}>
                {menuItems.map((item, idx) => (
                  <motion.li variants={itemVariants} key={idx}>
                    <a 
                      href={item.path} 
                      className={styles.overlayLink}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                  </motion.li>
                ))}
                <motion.li variants={itemVariants}>
                  <a 
                    href="/book" 
                    className={styles.overlayBtn}
                    onClick={() => setIsOpen(false)}
                  >
                    Reserve Fitting
                  </a>
                </motion.li>
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
