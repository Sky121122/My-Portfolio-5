import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';

const API_URL =
  'https://script.google.com/macros/s/AKfycby9biZlIOcnWSCvC47D_Lv7ViC4AP7LZ2SAsn5Q2WaCM6mJdvshD8DEA2tdIluWEhq64g/exec';


function Projects() {

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);


  /* =====================================================
     FEATURED PROJECTS
     These projects are STATIC.
     They are NOT fetched from the API.
  ===================================================== */

  const featuredProjects = [

    {
      id: 'featured-1',

      title: 'Localio',

      description:
        'Localio is a full-stack platform that helps users discover trusted local businesses in their city. It offers business search, category filtering, favorites, secure authentication, and responsive listings. The platform helps local businesses build a stronger digital presence while connecting customers with reliable services.',

      image: 'https://res.cloudinary.com/nelpmq1t/image/upload/v1786673251/banner3_b5itq9_z9yfyx.png',

      viewUrl:
        'https://localioo.netlify.app/',

      codeUrl:
        'https://github.com/Sky121122/Localio-frontend',
    },


    {
      id: 'featured-2',

      title: 'Bizzness Gro',

      description:
        'Bizzness Gro is a no-code website builder for individuals and small businesses. Choose from ready-made templates, add your business details, and customize your website easily. Generate and download a ready-to-use website without writing a single line of code.',

      image: 'https://res.cloudinary.com/nelpmq1t/image/upload/v1786673201/Screenshot_2025-06-02_105306_vexbqj.png',

      viewUrl:
        'https://bizznessgro.free.nf/?i=1',

      codeUrl:
        'https://www.granthaalayahpublication.org/ijetmr-ojms/ijetmr/article/view/1614',
    },

  ];


  /* =====================================================
     FETCH API PROJECTS
  ===================================================== */
useEffect(() => {

  let isMounted = true;

  const fetchProjects = async () => {

    try {

      const response = await fetch(API_URL, {
        method: 'GET',
        redirect: 'follow',
      });


      if (!response.ok) {
        throw new Error(
          `Request failed: ${response.status}`
        );
      }

      const data = await response.json();


      // Apps Script should return an array
      if (!Array.isArray(data)) {
        throw new Error(
          'API response is not an array'
        );
      }

      if (isMounted) {
        setProjects(data);
      }

    } catch (error) {

      console.error(
        'Error fetching projects:',
        error
      );

      // Don't destroy existing projects
      if (isMounted) {
        setProjects([]);
      }

    } finally {

      if (isMounted) {
        setLoading(false);
      }

    }

  };

  fetchProjects();

  return () => {
    isMounted = false;
  };

}, []);
  return (

    <section
      className={`section ${styles.projects}`}
      id="projects"
    >

      <div className="container">


        {/* =================================================
            HEADER
        ================================================= */}

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
            SELECTED WORK
          </div>


          <h2 className="section-title">

            Projects I've

            <br />

            <span className="accent">
              built.
            </span>

          </h2>


          <p className="section-subtitle">

            A selection of applications and digital
            products I've built and worked on.

          </p>

        </motion.div>



        {/* =================================================
            FEATURED PROJECTS
        ================================================= */}

        <div className={styles.featuredProjects}>

          {featuredProjects.map(
            (project, index) => (

              <motion.article

                key={project.id}

                className={styles.featuredCard}

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
                  duration: 0.6,
                  delay: index * 0.1,
                }}

              >


                {/* FEATURED IMAGE */}

                <div
                  className={
                    styles.featuredImage
                  }
                >

                  <img
                    src={project.image}
                    alt={project.title}
                  />

                  <div
                    className={
                      styles.featuredImageLabel
                    }
                  >

                    FEATURED PROJECT

                  </div>

                </div>



                {/* FEATURED CONTENT */}

                <div
                  className={
                    styles.featuredContent
                  }
                >

                  <div
                    className={
                      styles.featuredNumber
                    }
                  >

                    0{index + 1}

                  </div>


                  <h3>

                    {project.title}

                  </h3>


                  <p>

                    {project.description}

                  </p>



                  {/* FEATURED LINKS */}

                  <div
                    className={
                      styles.featuredLinks
                    }
                  >

                    {project.viewUrl && (

                      <a
                        href={
                          project.viewUrl
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className={
                          styles.featuredPrimary
                        }
                      >

                        View Project

                        <span>
                          ↗
                        </span>

                      </a>

                    )}


                    {project.codeUrl && (

                      <a
                        href={
                          project.codeUrl
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className={
                          styles.featuredSecondary
                        }
                      >

                        Source Code

                        <span>
                          ↗
                        </span>

                      </a>

                    )}

                  </div>

                </div>

              </motion.article>

            )
          )}

        </div>



        {/* =================================================
            OTHER PROJECTS TITLE
        ================================================= */}

        <motion.div
          className={
            styles.otherProjectsHeader
          }

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
            amount: 0.3,
          }}

          transition={{
            duration: 0.5,
          }}
        >

          <div
            className={
              styles.otherProjectsLabel
            }
          >
            MORE PROJECTS
          </div>


          <p>

            Other things I've built and
            experimented with.

          </p>

        </motion.div>



        {/* =================================================
            API PROJECTS LOADING
        ================================================= */}

        {loading &&
          projects.length === 0 && (

            <div
              className={styles.status}
            >

              Loading projects...

            </div>

          )}



        {/* =================================================
            API PROJECT GRID
        ================================================= */}

        {projects.length > 0 && (

          <div
            className={
              styles.projectGrid
            }
          >

            {projects.map(
              (project, index) => (

                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                />

              )
            )}

          </div>

        )}



        {/* =================================================
            EMPTY STATE
        ================================================= */}

        {!loading &&
          projects.length === 0 && (

            <div
              className={styles.status}
            >

              No projects found.

            </div>

          )}

      </div>

    </section>

  );

}


export default Projects;