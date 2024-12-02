import React from 'react'
import { LOTTERY } from '../../constants/constants'
import styles from './LotteryError.module.css'


export const LotteryError = ({error}) => {
  return (
    <div className={styles.container}>
        <h3 className={styles.success}>{LOTTERY.ERROR}</h3>
    </div>
  )
}
