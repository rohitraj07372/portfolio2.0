// IdCard.js
import React from "react";
import { getIdCardStyles } from "../../styles/aboutPage/aboutPageStyle";

export default function IdCard({ darkMode, colorPallet }) {
  const styles = getIdCardStyles(darkMode, colorPallet);

  return (
    <div style={styles.hangWrapper}>
      <div style={styles.strap}></div>
      <div style={styles.cardSwing}>
        <img
          src="your-photo-url.jpg"
          alt="Your Name"
          style={styles.photo}
          loading="lazy"
        />
        <h2 style={styles.name}>Your Name</h2>
        <p style={styles.role}>MERN Stack Developer</p>
        <p style={styles.email}>your.email@example.com</p>
        <p style={styles.phone}>+123 456 7890</p>
      </div>
    </div>
  );
}
