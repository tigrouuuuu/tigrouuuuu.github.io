import { motion } from 'framer-motion'
import profile from '../data/profile.json'
import SocialLinks from '../components/home/SocialLinks'
import styles from './Home.module.css'

function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
    }
  }

  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.gradientOrb1} />
          <div className={styles.gradientOrb2} />
          <div className={styles.gridPattern} />
        </div>

        <motion.div
          className={styles.heroContent}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className={styles.role} variants={itemVariants}>
            {profile.role}
          </motion.div>

          <motion.h1 className={styles.name} variants={itemVariants}>
            {profile.name}
          </motion.h1>

          <motion.p className={styles.title} variants={itemVariants}>
            {profile.title}
          </motion.p>

          <motion.p className={styles.shortBio} variants={itemVariants}>
            {profile.shortBio}
          </motion.p>

          <motion.div variants={itemVariants}>
            <SocialLinks socials={profile.socials} />
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.scrollIndicator}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <motion.div
            className={styles.scrollLine}
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </section>

      <section className={styles.about}>
        <div className={styles.aboutContainer}>
          <motion.div
            className={styles.aboutCard}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h2 className={styles.aboutTitle}>About</h2>
            <div className={styles.aboutContent}>
              {profile.fullBio.split('\n\n').map((paragraph, index) => (
                <p key={index} className={styles.aboutParagraph}>
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home