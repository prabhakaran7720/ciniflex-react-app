import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import Nav from '../../components/Nav/Nav'
import styles from './Header.module.css'

export default function Header() {
    const location = useLocation();
    const { pathname } = location;
    return(
        <header className={styles.header}>
            <NavLink to="/" className={styles.logo}>Cine<span>FLEX</span></NavLink>
            {pathname==="/login"?"":<Nav />}
        </header>
    )
}