import React from 'react'
import { API, TRAILER } from '../../constants/constants'
import styles from './NowShowing.module.css'

export const NowShowing = () => {
  return (
    <div className={styles.wrapper}>
        <h5 className={styles.title}>{TRAILER.PAGE}</h5>
        <div className={styles.wrap}>
            <h4 className={styles.movie}>{TRAILER.MOVIE}</h4>
            <video className={styles.video} controls>
                <source src={API.NOWSHOWING} type="video/mp4" />
            </video>
            <p className={styles.description}>{TRAILER.DESCRIPTION}</p>
        </div>
    </div>
  )
}
