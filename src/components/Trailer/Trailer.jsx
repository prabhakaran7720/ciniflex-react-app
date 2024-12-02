import React, {useState} from 'react'
import { useNavigate } from 'react-router';
import Button from '../Button/Button'
import { TRAILER } from '../../constants/constants'
import image from '../../assets/image.jpeg'
import styles from './Trailer.module.css'

export const Trailer = () => {

  const [user, setUser] = useState(window.localStorage.getItem("user") || "")

  let navigate = useNavigate()

  function watchNow() {
    if(user!==""){
        navigate('/showTime')
    } else {
        navigate('/login')
    }
  }

  function login(){
    navigate('/login')
  }

  return (
    <div className={styles.container}>
        <h2 className={styles.title}>{TRAILER.TITLE}</h2>
        {user!==""?"":<p className={styles.text}>{TRAILER.TEXT}<span className={styles.signin} onClick={login}> {TRAILER.SIGNIN}</span></p>}
        <div className={styles.wrap}>
            <img src={image} alt="Trailer image" className={styles.image} />
            <div className={styles.details}>
                <h2 className={styles.title}>{TRAILER.MOVIE}</h2>
                <p className={styles.description}>{TRAILER.DESCRIPTION}</p>
                <div className={styles.btn}><Button name="WATCH NOW" action={watchNow}/></div>
            </div>
        </div>
    </div>
  )
}
