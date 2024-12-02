import React from "react"
import styles from './Button.module.css'

export default function Button(props) {
    return(
        <button onClick={props.action} className={props.lottery?styles.lottery:styles.button}>{props.name}</button>
    )
}