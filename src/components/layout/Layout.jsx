import { useState, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import styles from './Layout.module.css'

function Layout({ children }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={styles.layout}>
      <Header scrolled={scrolled} />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout