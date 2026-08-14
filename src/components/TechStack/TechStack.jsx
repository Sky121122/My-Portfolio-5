import {
  Code2,
  Server,
  Smartphone,
  Wrench,
  Database,
  GitBranch,
  Send,
} from 'lucide-react';

import { motion } from 'framer-motion';

import styles from './TechStack.module.css';

function TechStack() {

  const categories = [
    {
      number: '01',
      title: 'FRONTEND',
      description:
        'Building responsive and interactive interfaces.',

      icon: Code2,

      technologies: [
        {
          name: 'React.js',
          short: 'React',
        },
        {
          name: 'JavaScript',
          short: 'JS',
        },
        {
          name: 'HTML',
          short: 'HTML',
        },
        {
          name: 'CSS',
          short: 'CSS',
        },
        {
          name: 'Tailwind CSS',
          short: 'TS',
        },
      ],
    },

    {
      number: '02',
      title: 'BACKEND',
      description:
        'Creating APIs, servers and data-driven applications.',

      icon: Server,

      technologies: [
        {
          name: 'Node.js',
          short: 'Node',
        },
        {
          name: 'Express.js',
          short: 'Express',
        },
        {
          name: 'MongoDB',
          short: 'Mongo',
        },
        {
          name: 'PostgreSQL',
          short: 'PSQ',
        },
      ],
    },

    {
      number: '03',
      title: 'MOBILE',
      description:
        'Developing cross-platform and native mobile experiences.',

      icon: Smartphone,

      technologies: [
        {
          name: 'React Native',
          short: 'RN',
        },
        {
          name: 'Expo',
          short: 'Expo',
        },
        {
          name: 'Android Studio',
          short: 'AS',
        },
        {
          name: 'Java',
          short: 'Java',
        },
      ],
    },

    {
      number: '04',
      title: 'TOOLS',
      description:
        'Tools I use to design, build and ship products.',

      icon: Wrench,

      technologies: [
        {
          name: 'Git',
          short: 'Git',
        },
        {
          name: 'GitHub',
          short: 'GitHub',
        },
        {
          name: 'Figma',
          short: 'Figma',
        },
        {
          name: 'Postman',
          short: 'API',
        },
         {
          name: 'GSAP',
          short: 'GSAP',
        },
         {
          name: 'Canva',
          short: 'CANVA',
        },
      ],
    },
  ];

  return (
    <section
      className={`section ${styles.stack}`}
      id="skills"
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
            TECH STACK
          </div>

          <h2 className="section-title">
            Technologies I use to
            <br />

            <span className="accent">
              build real products.
            </span>
          </h2>

          <p className="section-subtitle">
            A practical stack focused on web,
            mobile and backend development.
          </p>

        </motion.div>


        {/* ================= STACK ================= */}

        <div className={styles.stackList}>

          {categories.map((category, index) => {

            const CategoryIcon = category.icon;

            return (
              <motion.div
                className={styles.stackRow}
                key={category.title}

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
                  amount: 0.15,
                }}

                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
              >

                {/* Number */}

                <div className={styles.number}>
                  {category.number}
                </div>


                {/* Category */}

                <div className={styles.category}>

                  <div className={styles.categoryTitle}>

                    <div className={styles.categoryIcon}>
                      <CategoryIcon size={17} />
                    </div>

                    <h3>
                      {category.title}
                    </h3>

                  </div>

                  <p>
                    {category.description}
                  </p>

                </div>


                {/* Technologies */}

                <div className={styles.technologies}>

                  {category.technologies.map(
                    (technology) => (
                      <div
                        className={styles.tech}
                        key={technology.name}
                      >

                        <span className={styles.techIcon}>
                          {technology.short}
                        </span>

                        <span className={styles.techName}>
                          {technology.name}
                        </span>

                      </div>
                    )
                  )}

                </div>

              </motion.div>
            );
          })}

        </div>


        {/* ================= BOTTOM NOTE ================= */}

        <motion.div
          className={styles.bottomNote}
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
        >

          <div className={styles.noteIcon}>
            <Database size={15} />
          </div>

          <span style={{fontSize:15, color:"#f5f7fa"}}>
            Always learning, experimenting and
            improving my development workflow.
          </span>

        </motion.div>

      </div>

    </section>
  );
}

export default TechStack;