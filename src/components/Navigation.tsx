import React, {FC} from 'react';
import {NavLink} from 'react-router-dom'
import styles from './Navigation.module.scss'

interface NavigationProps<T> {

}

export default function Navigation<T>(props: NavigationProps<T>) {

    return (
      <nav className={styles.root}>
        <NavLink className={styles.navLink} to="/users">Users</NavLink>
        <NavLink className={styles.navLink} to='/todos'>Todo list</NavLink>
      </nav>
    )
}
