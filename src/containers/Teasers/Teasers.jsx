import React, { useContext} from 'react'
import { TRAILER } from '../../constants/constants'
import  Teaser  from '../../components/Teaser/Teaser'
import { TeasersContext } from '../../screens/Home/Home'
import styles from './Teasers.module.css'

export const Teasers = () => {
    
  const teasers = useContext(TeasersContext)
  return (
    <div className={styles.container}>
        <h2 className={styles.title}>{TRAILER.TEASERS}</h2>
        <div className={styles.wrap}>
            {teasers && teasers.map((teaser) => <Teaser key={teaser.title} {...teaser} />)}
        </div>
    </div>
  )
}
