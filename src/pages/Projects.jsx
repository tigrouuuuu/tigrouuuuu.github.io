import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import projects from '../data/projects.json'
import styles from './Projects.module.css'

function Projects() {
  const [filter, setFilter] = useState('all')
  const [sortBy, setSortBy] = useState('date')

  const statuses = ['all', 'completed', 'in-progress', 'planned']

  const filteredProjects = projects
    .filter(p => filter === 'all' || p.status === filter)
    .sort((a, b) => {
      if (sortBy === 'date') {
        return new Date(b.updatedAt) - new Date(a.updatedAt)
      }
      return a.title.localeCompare(b.title)
    })

  return (
    <div className={styles.projects}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className={styles.title}>Projects</h1>
          <p className={styles.subtitle}>A selection of my work</p>
        </motion.div>

        <motion.div
          className={styles.filters}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className={styles.filterGroup}>
            <span className={styles.filterLabel}>Status</span>
            <div className={styles.filterButtons}>
              {statuses.map(status => (
                <button
                  key={status}
                  className={`${styles.filterButton} ${filter === status ? styles.active : ''}`}
                  onClick={() => setFilter(status)}
                >
                  {status === 'all' ? 'All' : status.replace('-', ' ')}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.filterGroup}>
            <span className={styles.filterLabel}>Sort by</span>
            <select
              className={styles.select}
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="date">Date</option>
              <option value="title">Title</option>
            </select>
          </div>
        </motion.div>

        <motion.div className={styles.grid} layout>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Link to={`/projects/${project.slug}`} className={styles.card}>
                  <div className={styles.cardImage}>
                    {project.image ? (
                      <img src={project.image} alt={project.title} />
                    ) : (
                      <div className={styles.placeholder}>
                        <span>{project.title.charAt(0)}</span>
                      </div>
                    )}
                    <div className={styles.cardOverlay}>
                      <span className={styles.viewMore}>View project</span>
                    </div>
                  </div>

                  <div className={styles.cardContent}>
                    <div className={styles.cardHeader}>
                      <h3 className={styles.cardTitle}>{project.title}</h3>
                      <span className={`${styles.status} ${styles[project.status]}`}>
                        {project.status}
                      </span>
                    </div>

                    <p className={styles.cardSummary}>{project.summary}</p>

                    <div className={styles.cardTech}>
                      {project.technologies.slice(0, 3).map(tech => (
                        <span key={tech} className={styles.tech}>{tech}</span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className={styles.techMore}>
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className={styles.empty}>
            <p>No projects match this filter</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Projects