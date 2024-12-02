import React from 'react'
import { LANGUAGE } from '../../constants/constants'
import styles from './Language.module.css'

export const Language = () => {
  return (
    <div className={styles.container}>
        <h4 className={styles.title}>{LANGUAGE.TITLE}</h4>
        <div className={styles.languages}>
            <div className={styles.language}>{LANGUAGE.ENGLISH}</div>
            <div className={styles.language}>{LANGUAGE.HINDI}</div>
            <div className={styles.language}>{LANGUAGE.TAMIL}</div>
            <div className={styles.language}>{LANGUAGE.MALAYALAM}</div>
            <div className={styles.language}>{LANGUAGE.TELUGU}</div>
        </div>
    </div>
  )
}
