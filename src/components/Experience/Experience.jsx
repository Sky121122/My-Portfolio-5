import { motion } from 'framer-motion';
import {
  BriefcaseBusiness,
  Users,
  Code2,
  GraduationCap,
} from 'lucide-react';

import styles from './Experience.module.css';

function Experience() {
  const experiences = [
    {
      year: 'NOV 2025 — PRESENT',
      role: 'Android Tech Trainer',
      company: 'Six Phrase Pvt. Ltd.',
      icon: GraduationCap,

      description:
        'Teaching and mentoring students in Android application development while helping them build practical mobile applications.',

      achievements: [
        'Instructed 600+ students in Android development',
        'Conducted practical development sessions',
        'Mentored students through application projects',
      ],

      technologies: [
        'Android',
        'Java',
        'Jetpack Compose',
        'Kotlin',
      ],
    },

    {
      year: 'JUN 2024 — APR 2025',
      role: 'Full Stack Development Trainer',
      company: 'Aimers D2A Pvt. Ltd.',
      icon: Users,

      description:
        'Trained students in full-stack web development and guided them through practical MERN stack projects.',

      achievements: [
        'Trained 900+ students in MERN stack development',
        'Conducted hands-on web development sessions',
        'Helped students understand real-world development workflows',
      ],

      technologies: [
        'React',
        'Node.js',
        'Express',
        'MongoDB',
      ],
    },

    {
      year: 'JUL 2024',
      role: 'Web Development Intern',
      company: 'CR Technologies',
      icon: Code2,

      description:
        'Worked on web development tasks while gaining practical experience with modern frontend and backend technologies.',

      achievements: [
        'Worked on real-world web development tasks',
        'Implemented responsive interfaces',
        'Collaborated on development workflows',
      ],

      technologies: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
      ],
    },
  ];

  return (
    <section
      className={`section ${styles.experience}`}
      id="experience"
    >

      <div className="container">

        {/* ================= HEADER ================= */}

        <motion.div
          className={styles.header}
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
            amount: 0.3,
          }}
          transition={{
            duration: 0.6,
          }}
        >

          <div className={styles.label}>
            EXPERIENCE
          </div>

          <h2 className="section-title">
            Where I've
            <br />
            <span className="accent">
              made an impact.
            </span>
          </h2>

          <p className="section-subtitle">
            My professional journey across development,
            training and technology.
          </p>

        </motion.div>


        {/* ================= TIMELINE ================= */}

        <div className={styles.timeline}>

          {experiences.map((experience, index) => {

            const Icon = experience.icon;

            return (
              <motion.article
                className={styles.experienceItem}
                key={experience.company}

                initial={{
                  opacity: 0,
                  x: -25,
                }}

                whileInView={{
                  opacity: 1,
                  x: 0,
                }}

                viewport={{
                  once: true,
                  amount: 0.15,
                }}

                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
              >

                {/* Timeline marker */}

                <div className={styles.timelineSide}>

                  <div className={styles.timelineDot}>
                    <Icon size={15} />
                  </div>

                  {index !== experiences.length - 1 && (
                    <div className={styles.timelineLine}></div>
                  )}

                </div>


                {/* Main content */}

                <div className={styles.content}>

                  <div className={styles.topRow}>

                    <div>

                      <div className={styles.date}>
                        {experience.year}
                      </div>

                      <h3 className={styles.role}>
                        {experience.role}
                      </h3>

                      <div className={styles.company}>
                        {experience.company}
                      </div>

                    </div>

                    <div className={styles.index}>
                      0{index + 1}
                    </div>

                  </div>


                  <p className={styles.description}>
                    {experience.description}
                  </p>


                  {/* Achievements */}

                  <div className={styles.achievements}>

                    {experience.achievements.map(
                      (achievement) => (
                        <div
                          className={styles.achievement}
                          key={achievement}
                        >

                          <span className={styles.bullet}>
                            →
                          </span>

                          <span>
                            {achievement}
                          </span>

                        </div>
                      )
                    )}

                  </div>


                  {/* Technologies */}

                  <div className={styles.technologies}>

                    {experience.technologies.map(
                      (technology) => (
                        <span
                          className={styles.technology}
                          key={technology}
                        >
                          {technology}
                        </span>
                      )
                    )}

                  </div>

                </div>

              </motion.article>
            );
          })}

        </div>


        {/* ================= BOTTOM ================= */}

        <motion.div
          className={styles.bottom}
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
        >

          <BriefcaseBusiness size={16} />

          <span>
            Always looking for opportunities to
            build, learn and contribute.
          </span>

        </motion.div>

      </div>

    </section>
  );
}

export default Experience;