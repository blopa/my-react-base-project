import React from 'react';

import styles from '../styles/Header.scss';
import logo from '../logo.png';

export class Header extends React.Component {
  render() {
    return (
      <div className={styles['nav-menu']}>
        <ul>
          <li>
            <a href="#" className={styles['nav-disabled']}>
              <img className={styles.logo} src={logo} title="Made with squarespace.com"/>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
