import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import styles from './Header.module.css'

function Header({ scrolled }) {
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
  ]

  return (
    <motion.header 
      className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <span className={styles.logoText}>Alexandre Pougin de La Maisonneuve</span>
        </Link>

        <nav className={styles.nav}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`${styles.navLink} ${location.pathname === item.path ? styles.active : ''}`}
            >
              {item.label}
              {location.pathname === item.path && (
                <motion.span 
                  className={styles.activeIndicator}
                  layoutId="activeNav"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>
      </div>
    </motion.header>
  )
}

export default Header