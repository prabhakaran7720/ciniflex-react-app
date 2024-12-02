import React, { useEffect, useRef, useState } from 'react'
import styles from './Teaser.module.css'
import { VideoButton } from '../VideoButton/VideoButton'
import { withAd } from '../../hoc/WithAd/withAd'
import image from '../../assets/ad.png'

function Teaser(props){
    const vidRef = useRef(null)

    const [vid, setVid] = useState(false)
    const [count, setCount] = useState(true)
    function change() {
        if(vid) {
            vidRef.current.pause()
            setVid((vid) => !vid)
        } else {
            vidRef.current.play()
            setVid((vid) => !vid)
        }
        count && props.action()
        setCount(false)
    }

    
    
  return (
    <>
    {!props.adShowed?props.advertisement?<><img className={styles.ad} src={image} alt="ad" /></>:<div className={styles.container}>
        <video className={styles.video} controls={vid}  ref={vidRef} onClick={change}>
                <source src={props.videoSrc} type="video/mp4" />
            </video>
            <div className={styles.vid}><VideoButton  refbtn={vidRef.current} vid={vid} action={change}/></div>
        <p className={styles.name}>{props.title}</p>
    </div>:<div className={styles.container}><video className={styles.video} controls={vid}  ref={vidRef} onClick={change}>
                <source src={props.videoSrc} type="video/mp4" />
            </video>
            <div className={styles.vid}><VideoButton  refbtn={vidRef.current} vid={vid} action={change}/></div>
        <p className={styles.name}>{props.title}</p></div>}
    </>
  )
}

export default withAd(Teaser,true)
