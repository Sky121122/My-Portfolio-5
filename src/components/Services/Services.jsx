import { motion } from 'framer-motion';
import { Mascot } from 'page-mascot'
import {
  Globe2,
  Smartphone,
  Layers3,
  ArrowUpRight,
} from 'lucide-react';

import styles from './Services.module.css';

function Services() {
  const services = [
    {
      number: '01',
      icon: Globe2,
      title: 'Web Development',
      description:
        'Modern, responsive websites and web applications built with clean interfaces and scalable architecture.',
      technologies: [
        'React',
        'JavaScript',
        'HTML',
        'CSS',
      ],
    },

    {
      number: '02',
      icon: Smartphone,
      title: 'Mobile Development',
      description:
        'Cross-platform mobile applications with smooth user experiences and practical functionality.',
      technologies: [
        'React Native',
        'Expo',
        'Android',
        'Java',
      ],
    },

    {
      number: '03',
      icon: Layers3,
      title: 'Full-Stack Solutions',
      description:
        'Build Complete digital products connecting frontend, backend, databases, authentication and APIs.',
      technologies: [
        'Node.js',
        'Express',
        'MongoDB',
        'Supabase',
      ],
    },
  ];

  return (
    <section
      className={`section ${styles.services}`}
      id="services"
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
            WHAT I DO
          </div>

          <div className={styles.headerRow}>

            <div>

              <h2 className="section-title">
                I build things
                <br />

                <span className="accent">
                  that solve problems.
                </span>
              </h2>

              <p className="section-subtitle">
                From idea to implementation, I focus on
                building useful and maintainable products.
              </p>

            </div>

            <div className={styles.headerMark}>
              <span>BUILD</span>
              <span>SHIP</span>
              <span>IMPROVE</span>
            </div>

          </div>

        </motion.div>


        {/* ================= SERVICES ================= */}

        <div className={styles.serviceGrid}>

          {services.map((service, index) => {

            const Icon = service.icon;

            return (
              <motion.article
                className={styles.serviceCard}
                key={service.title}

                initial={{
                  opacity: 0,
                  y: 30,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                viewport={{
                  once: true,
                  amount: 0.2,
                }}

                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
              >

                {/* Number */}

                <div className={styles.top}>

                  <span className={styles.number}>
                    {service.number}
                  </span>

                  <div className={styles.icon}>
                    <Icon size={19} />
                  </div>

                </div>


                {/* Content */}

                <div className={styles.content}>

                  <h3>
                    {service.title}
                  </h3>

                  <p>
                    {service.description}
                  </p>

                </div>


                {/* Technologies */}

                <div className={styles.technologies}>

                  {service.technologies.map(
                    (technology) => (
                      <span
                        key={technology}
                        className={styles.technology}
                      >
                        {technology}
                      </span>
                    )
                  )}

                </div>

              </motion.article>
            );
          })}

        </div>




        {/* ================= CTA ================= */}

        <motion.div
          className={styles.cta}
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
        >

          <div>

            <span className={styles.ctaLabel}>
              HAVE A PROJECT IN MIND?
            </span>
            
            <h3>
              Let's build something
              <span> useful.</span>
            </h3> 

          </div>
          <div className={styles.mosAvatar}>
                            <Mascot size={100}
                                directions="/mascots/tv-directions.webp"
                                reactions="/mascots/tv-reactions.webp"
                              />
                         </div>

          <a
            href="https://www.linkedin.com/in/saket-yadav-b90a3525b/"
            className={styles.ctaButton}
          >
            Start a conversation
            <ArrowUpRight size={17} />
          </a>

        </motion.div>

      </div>

    </section>
  );
}

export default Services;