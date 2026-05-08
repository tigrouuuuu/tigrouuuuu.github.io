import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import projects from '../data/projects.json'
import styles from './ProjectDetail.module.css'

function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)

  if (!project) {
    return (
      <div className={styles.notFound}>
        <h1>Project not found</h1>
        <Link to="/projects">Back to projects</Link>
      </div>
    )
  }

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <motion.div
      className={styles.projectDetail}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/projects" className={styles.backLink}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to projects
          </Link>

          <div className={styles.headerMain}>
            <span className={`${styles.status} ${styles[project.status]}`}>
              {project.status.replace('-', ' ')}
            </span>
            <h1 className={styles.title}>{project.title}</h1>
            <p className={styles.summary}>{project.summary}</p>
          </div>

          <div className={styles.headerMeta}>
            {project.timeSpent && (
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Time</span>
                <span className={styles.metaValue}>{project.timeSpent}</span>
              </div>
            )}
            {project.createdAt && (
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Created</span>
                <span className={styles.metaValue}>{formatDate(project.createdAt)}</span>
              </div>
            )}
            {project.updatedAt && (
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Updated</span>
                <span className={styles.metaValue}>{formatDate(project.updatedAt)}</span>
              </div>
            )}
          </div>

          <div className={styles.links}>
            {project.links?.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkButton}
              >
                View project
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                </svg>
              </a>
            )}
            {project.links?.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.linkButton} ${styles.secondary}`}
              >
                GitHub
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </a>
            )}
          </div>
        </motion.div>

        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {project.image && (
            <div className={styles.imageSection}>
              <img src={project.image} alt={project.title} className={styles.heroImage} />
            </div>
          )}

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Description</h2>
            <div className={styles.description}>
              {project.description.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('## ')) {
                  return (
                    <h3 key={index} className={styles.subTitle}>
                      {paragraph.replace('## ', '')}
                    </h3>
                  )
                }
                return (
                  <p key={index}>{paragraph}</p>
                )
              })}
            </div>
          </div>

          {project.technologies?.length > 0 && (
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Technologies</h2>
              <div className={styles.technologies}>
                {project.technologies.map(tech => (
                  <span key={tech} className={styles.tech}>{tech}</span>
                ))}
              </div>
            </div>
          )}

          {project.idea && (
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Project origin</h2>
              <p className={styles.idea}>{project.idea}</p>
            </div>
          )}

          {project.timeline?.length > 0 && (
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Timeline</h2>
              <div className={styles.timeline}>
                {project.timeline.map((item, index) => (
                  <div key={index} className={styles.timelineItem}>
                    <div className={styles.timelineDot} />
                    <div className={styles.timelineContent}>
                      <span className={styles.timelineStep}>{item.step}</span>
                      <span className={styles.timelineDate}>{item.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {project.files?.length > 0 && (
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Files</h2>
              <div className={styles.files}>
                {project.files.map((file, index) => (
                  <a
                    key={index}
                    href={file.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.file}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                      <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
                    </svg>
                    {file.name}
                  </a>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default ProjectDetail