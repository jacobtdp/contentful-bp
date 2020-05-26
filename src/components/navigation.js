import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'
import './nav.css'

export default () => (
  <nav role="navigation" className='navigation'>

    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <div className="header-title">
          <Link to="/">Boiler-Plate</Link>
        </div>
      </li>
    </ul>

    <ul className="sub-nav">
      <div></div>
      <div></div>
      <li className="first-li">Cleaning</li>
      <li>Fishing</li>
      <li>Crabbing</li>
      <li>Whaling</li>
      <div></div>
      <div></div>
    </ul>
  </nav>
)
