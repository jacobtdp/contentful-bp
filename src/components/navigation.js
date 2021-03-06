import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'
import './nav.css'
import Slider from './slider';

export default () => (
  <nav role="navigation" className='navigation'>

    <Slider />

    <ul className={`home-title ${styles.navigation}`}>
      <li className={`title-box ${styles.navigationItem}`}>
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
