import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import styles from './Nav.module.css'

export default function Nav() {
    const location = useLocation();
    const { pathname } = location;
    const [user, setUser] = useState(window.localStorage.getItem("user") || "")

    function logout() {
        window.localStorage.setItem("user","");
        setUser("")
    }

    return(
        <nav className={styles.nav}>
            <div className={styles.menu}>
                <NavLink to="/" className={({isActive})=> isActive?styles.active+' '+styles.item:styles.item}>HOME</NavLink>
                <NavLink to="/allMovies" className={({isActive})=> isActive?styles.active+' '+styles.item:styles.item}>ALL MOVIES</NavLink>
                {user===""?"":<NavLink to="/showTime" className={({isActive})=> isActive?styles.active+' '+styles.item:styles.item}>NOW SHOWING</NavLink>}
            </div>
            {user===""?<NavLink to="/login" className={styles.button}>LOGIN</NavLink>:<div className={styles.logout}><p className={styles.button}>Hi {user} | </p><NavLink to='/' className={styles.button} onClick={logout}> Logout</NavLink></div>}
        </nav>
    )
}