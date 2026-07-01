import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './portal.module.css';

export default function Portal() {
  const transitionEase = [0.16, 1, 0.3, 1];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'bespoke',
    date: '',
    details: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.portalWrapper}>
      <motion.form 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.85, ease: transitionEase }}
        className={styles.formContainer}
        onSubmit={(e) => e.preventDefault()}
      >
        <div className={styles.formGrid}>
          
          {/* Input Group 01: Client Identity Name */}
          <div className={styles.inputGroup}>
            <input 
              type="text" 
              name="name"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
              className={styles.inputField} 
              placeholder=" "
            />
            <label htmlFor="name" className={styles.inputLabel}>Full Identity Name</label>
            <div className={styles.focusStitch}></div>
          </div>

          {/* Input Group 02: Client Contact Email */}
          <div className={styles.inputGroup}>
            <input 
              type="email" 
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
              className={styles.inputField} 
              placeholder=" "
            />
            <label htmlFor="email" className={styles.inputLabel}>Digital Email Coordinates</label>
            <div className={styles.focusStitch}></div>
          </div>

          {/* Input Group 03: Custom Selection Option Box */}
          <div className={styles.inputGroup}>
            <select 
              name="service"
              id="service"
              value={formData.service}
              onChange={handleChange}
              className={styles.selectField}
            >
              <option value="bespoke">Bespoke Creation (New Suit / Gown)</option>
              <option value="refining">Restructuring & Alterations</option>
              <option value="priority">Priority Accelerated Fitting Slot</option>
            </select>
            <label htmlFor="service" className={styles.selectLabel}>Desired Service Tier</label>
            <div className={styles.staticStitch}></div>
          </div>

          {/* Input Group 04: Targeting Event Fitting Calendar Date */}
          <div className={styles.inputGroup}>
            <input 
              type="date" 
              name="date"
              id="date"
              required
              value={formData.date}
              onChange={handleChange}
              className={styles.dateField}
            />
            <label htmlFor="date" className={styles.dateLabel}>Targeting Event Date</label>
            <div className={styles.staticStitch}></div>
          </div>

          {/* Input Group 05: Measurement Specification Details */}
          <div className={styles.inputGroupFull}>
            <textarea 
              name="details"
              id="details"
              rows="4"
              value={formData.details}
              onChange={handleChange}
              className={styles.textareaField}
              placeholder=" "
            ></textarea>
            <label htmlFor="details" className={styles.inputLabel}>Anatomical Focus, Textile Requests, or Custom Notes</label>
            <div className={styles.focusStitch}></div>
          </div>

        </div>

        {/* Masterclass Action Submission Trigger Frame */}
        <div className={styles.actionBlock}>
          <button type="submit" className={styles.submitBtn}>
            <span>Submit Fitting Request</span>
            <span className={styles.btnArrow}>→</span>
          </button>
        </div>

      </motion.form>
    </div>
  );
}
