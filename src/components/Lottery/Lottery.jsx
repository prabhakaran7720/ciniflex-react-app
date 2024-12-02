import React, { useState } from 'react'
import Button from '../Button/Button'
import { LOTTERY } from '../../constants/constants'
import styles from './Lottery.module.css'

export const Lottery = () => {
  const [number, setNumber] = useState('')
  const [win, setWin] = useState(false)
  const [error, setError] = useState(false)
  function changeNumber(event) {
    setNumber(event.target.value)
  }

  function won() {
    if(number%2===0)
    {
        setWin(true)
    }
    else
    {
        setError(true)
    }
  }

  function Boom(){
    throw new Error('Mobile number is odd')
  }

  return (
    
    <div className={styles.container}>
        {error?<Boom />:<>{!win?<><h3 className={styles.text}>{LOTTERY.TEXT}</h3>
        <input type="text" className={styles.number} value={number} placeholder='Enter your mobile number' onChange={changeNumber} required/>
        <div className={styles.tools}><Button name="I'm Feeling Lucky" action={won} lottery={true}/></div></>:<h3 className={styles.success}>{LOTTERY.SUCCESS}</h3>}</>}
    </div>
  )
}
