import {
  ArrowUpRight,
  ExternalLink,
} from 'lucide-react';
import { createAvatar } from '@bible-strong/avatar-react'
import '@bible-strong/avatar-react/styles.css'
import definition from './avatar.avatar.json'

import { motion } from 'framer-motion';

import styles from './ProjectCard.module.css';


const Avatar = createAvatar(definition)

function ProjectCard({
  project,
  index,
}) {

  return (
<>
      
    <motion.article

      className={styles.card}

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
        amount: 0.15,
      }}

      transition={{
        duration: 0.55,
        delay: index * 0.08,
      }}
    >


      {/* IMAGE */}

      <div className={styles.imageWrapper}>

        <img
          src={project.image_url}
          alt={project.title}
          className={styles.image}
          loading="lazy"
        />

        <div className={styles.imageOverlay}>

          <span>
            PROJECT {String(index + 1).padStart(2, '0')}
          </span>

        </div>

      </div>

      <div className={styles.emojiAvatar}>
          <Avatar size={80} defaultAnimation="surprised" />
      </div>

      {/* CONTENT */}

      <div className={styles.content}>


        <h3 className={styles.title}>
          {project.title}
        </h3>


        <p className={styles.description}>
          {project.description}
        </p>


        {/* LINKS */}

        <div className={styles.links}>

          {project.view_url && (

            <a
              href={project.view_url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryLink}
            >

              View Project

              <ArrowUpRight size={15} />

            </a>

          )}


          {project.code_url && (

            <a
              href={project.code_url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryLink}
            >

              Source Code

              <ExternalLink size={14} />

            </a>

          )}

        </div>

      </div>

    </motion.article>
</>
  );
}


export default ProjectCard;