import {
  Code2,
  Smartphone,
  Layers3,
  Check,
  Rocket,
  Building2,
  Globe,
  Wrench,
} from 'lucide-react';

import { motion } from 'framer-motion';

import styles from './About.module.css';

function About() {
  const experience = [
    {
      icon: Code2,
      text: 'Web Development',
    },
    {
      icon: Smartphone,
      text: 'Android Development',
    },
    {
      icon: Layers3,
      text: 'Full Stack Development',
    },
  ];

  const interests = [
    {
      icon: Rocket,
      text: 'Websites',
    },
    {
      icon: Smartphone,
      text: 'Mobile Apps',
    },
    {
      icon: Building2,
      text: 'Business Platforms',
    },
    {
      icon: Wrench,
      text: 'Developer Tools',
    },
  ];

  return (
    <section
      className={`section ${styles.about}`}
      id="about"
    >

      <div className="container">

        <div className={styles.layout}>

          {/* ================= LEFT ================= */}

          <motion.div
            className={styles.introduction}
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.7,
            }}
          >

            <div className={styles.label}>
              ABOUT ME
            </div>

            <h2 className={styles.heading}>
              I don't just
              <br />
              write code.
              <br />

              <span>
                I build products.
              </span>
            </h2>

            <p className={styles.description}>
              I'm Saket Yadav, a Computer Science
              Engineer specializing in full-stack web
              and mobile development.
            </p>

            <p className={styles.description}>
              I enjoy turning ideas into real-world
              products using modern technologies,
              clean interfaces, and practical solutions.
            </p>

            {/* Small highlight */}
            <div className={styles.highlight}>

              <div className={styles.highlightIcon}>
                <Globe size={17} />
              </div>

              <div>
                <strong>
                  Web + Mobile
                </strong>

                <span>
                  Building across platforms
                </span>
              </div>

            </div>

          </motion.div>


          {/* ================= RIGHT ================= */}

          <div className={styles.cards}>

            {/* Experience Card */}

            <motion.div
              className={styles.card}
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.6,
                delay: 0.1,
              }}
            >

              <div className={styles.cardHeader}>

                <div className={styles.cardIcon}>
                  <Code2 size={17} />
                </div>

                <h3>
                  EXPERIENCE
                </h3>

              </div>

              <div className={styles.list}>

                {experience.map((item) => (
                  <div
                    className={styles.listItem}
                    key={item.text}
                  >

                    <div className={styles.check}>
                      <Check size={11} />
                    </div>

                    <span>
                      {item.text}
                    </span>

                  </div>
                ))}

              </div>

            </motion.div>


            {/* What I Like Card */}

            <motion.div
              className={styles.card}
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
            >

              <div className={styles.cardHeader}>

                <div className={styles.cardIcon}>
                  <Rocket size={17} />
                </div>

                <h3>
                  WHAT I LIKE TO BUILD
                </h3>

              </div>

              <div className={styles.list}>

                {interests.map((item) => (
                  <div
                    className={styles.listItem}
                    key={item.text}
                  >

                    <div className={styles.check}>
                      <Check size={11} />
                    </div>

                    <span>
                      {item.text}
                    </span>

                  </div>
                ))}

              </div>

            </motion.div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;