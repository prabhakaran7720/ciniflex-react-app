import React, { useRef, useState } from 'react'
import styles from './VideoButton.module.css'

export const VideoButton = (props) => {
    const [pause, setPause] = useState(props.vid)

    const pauseRef = useRef(null)

    function change() {
        if(pause) {
            console.log(props.refbtn)
            props.action()
            console.log('paused')
            pauseRef.current.className = 'playpause show'
            setPause((playbtn) => !playbtn)
        } else {
            console.log(props.refbtn)
            props.action()
            console.log('play')
            pauseRef.current.className = 'playpause hide'
            setPause((playbtn) => !playbtn)
        }
    }
  return (
    <>
    {!props.vid?
    <div className={styles.playpause} onClick={change} ref={pauseRef}>
        <i className={"fa-solid fa-play "+styles.vidbtn} ref={pauseRef}></i>
    </div>:<></>
}
    </>
  )
}
