import React from 'react'
import Link from 'gatsby-link'

import hamburger from './hamburger.png'
import logo from './logo.png'
import styles from './index.module.css'

const Header = ({ nav }) => {
  return (
    <div className={styles.nav}>
      <div>
        <img className={styles.hamburger} src={hamburger} alt="Logo" />
        <img className={styles.logo} src={logo} alt="Menu" />
      </div>
      <div>
        {nav.map((navItem, key) => {
          return (
            <Link key={key} to="">
              <span className={styles.navItem}>{navItem}</span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Header
