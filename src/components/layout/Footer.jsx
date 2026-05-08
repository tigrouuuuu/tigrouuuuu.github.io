import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <Link to="/" className={styles.logo}>
              Alexandre Pougin de La Maisonneuve
            </Link>
            <p className={styles.tagline}>Creative & Passionate</p>
          </div>

          <div className={styles.links}>
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} Alexandre. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer