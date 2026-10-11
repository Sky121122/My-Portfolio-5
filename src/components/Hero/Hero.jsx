import { ArrowRight, Download, MapPin, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';
import { Mascot } from 'page-mascot'
function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <section className={styles.hero} id="home">

      {/* Background grid */}
      <div className={styles.grid}></div>

      {/* Purple glow */}
      <div className={styles.glow}></div>

      <div className={`container ${styles.heroContainer}`}>

        {/* ================= LEFT CONTENT ================= */}
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* Availability */}
          <div className={styles.availability}>
            <span className={styles.statusDot}></span>
            AVAILABLE FOR OPPORTUNITIES
          </div>

          {/* Heading */}
          <h1 className={styles.heading}>
            Hi, I'm
            <span className={styles.name}>
              Saket Yadav.
            </span>
          </h1>

          {/* Main statement */}
          <p className={styles.description}>
            I build digital products
            <br />
            that actually work.
          </p>

          {/* Role */}
          <div className={styles.role}>
            <strong>Full-Stack Developer</strong>

            <span>
              Web <i>•</i> Mobile <i>•</i> Backend
            </span>
          </div>
  
          {/* Buttons */}
          <div className={styles.actions}>

            
            <button
              className={styles.primaryButton}
              onClick={scrollToProjects}
            >
              View My Work
              <ArrowRight size={17} />
            </button>
   <div className={styles.mosAvatar}>
                  <Mascot className={styles.moscot}
                      directions="/mascots/tv-directions.webp"
                      reactions="/mascots/tv-reactions.webp"
                    />
               </div>
            <a
              href="https://drive.google.com/file/d/1gKjdzolfbJbLgZ4BeWRgSwJTC9UwSrIA/view"
              download
              className={styles.secondaryButton}
            >
              <Download size={16} />
              Download Resume
            </a>

          </div>

          {/* Small info */}
          <div className={styles.quickInfo}>

            <div>
              <MapPin size={15} />
              <span>India</span>
            </div>

            <div>
              <Code2 size={15} />
              <span>MERN • React Native • Kotlin</span>
            </div>

          </div>

        </motion.div>


        {/* ================= RIGHT SIDE ================= */}
        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
        >

          {/* Purple glow behind image */}
          <div className={styles.imageGlow}></div>

          {/* Profile image */}
          <div className={styles.profileWrapper}>

            <img
              src="/profile.png"
              alt="Saket Yadav"
              className={styles.profileImage}
            />

          </div>


          {/* Developer status card */}
          <motion.div
            className={styles.statusCard}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >

            <h3>Developer Status</h3>

            <div className={styles.statusItem}>
              <span>✓</span>
              Available for opportunities
            </div>

            <div className={styles.statusItem}>
              <span>✓</span>
              Based in India
            </div>

            <div className={styles.statusItem}>
              <span>✓</span>
              Building with React & Node
            </div>

            <div className={styles.statusStats}>

              <div>
                <strong>25+</strong>
                <small>Projects</small>
              </div>

              <div>
                <strong>4+</strong>
                <small>Years Learning</small>
              </div>

            </div>

          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}

export default Hero;