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
      <li className="first-li"><Link to="/cleaning">Cleaning</Link></li>
      <li><Link to="/fishing">Fishing</Link></li>
      <li><Link to="/cooking">Cooking</Link></li>
      <li><Link to="/crabbing">Crabbing</Link></li>
      <div></div>
      <div></div>
    </ul>
  </nav>
)
