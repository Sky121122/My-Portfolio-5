import {
  BriefcaseBusiness,
  GraduationCap,
  Code2,
  Sparkles,
} from 'lucide-react';

import { motion } from 'framer-motion';

import styles from './Stats.module.css';

function Stats() {
  const stats = [
    {
      icon: BriefcaseBusiness,
      value: '25+',
      label: 'Projects',
      description: 'Built & shipped',
    },
    {
      icon: GraduationCap,
      value: '900+',
      label: 'Students Trained',
      description: 'Across development programs',
    },
    {
      icon: Code2,
      value: 'Full Stack',
      label: 'Developer',
      description: 'Web • Mobile • Backend',
    },
    {
      icon: Sparkles,
      value: 'Open',
      label: 'To Opportunities',
      description: 'Available for new projects',
    },
  ];

  return (
    <section className={styles.statsSection}>
      <div className="container">

        <motion.div
          className={styles.statsWrapper}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >

          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                className={styles.stat}
                key={stat.label}
              >

                {/* Icon */}
                <div className={styles.iconWrapper}>
                  <Icon size={19} strokeWidth={1.8} />
                </div>

                {/* Content */}
                <div className={styles.content}>

                  <div className={styles.value}>
                    {stat.value}
                  </div>

                  <div className={styles.label}>
                    {stat.label}
                  </div>

                  <div className={styles.description}>
                    {stat.description}
                  </div>

                </div>

                {/* Divider */}
                {index !== stats.length - 1 && (
                  <div className={styles.divider}></div>
                )}

              </div>
            );
          })}

        </motion.div>

      </div>
    </section>
  );
}

export default Stats;