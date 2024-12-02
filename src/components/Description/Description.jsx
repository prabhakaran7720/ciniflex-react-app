import React, { useEffect, useState } from 'react'
import image from "../../assets/fallback.png";
import { MOVIES } from '../../constants/constants';
import styles from './Description.module.css'
import { withAd } from '../../hoc/WithAd/withAd';

function Description(props){
    function handleLiked() {
        props.change(props);
      }

      const [a, setA] = useState(false)

      useEffect(() => {
        console.log('adwd')
        props.reset()
        setA((a) => !a)
      },[a])
  return (
    <div className={styles.container}>
        <h4 className={styles.title}>{props.movie}</h4>
        <h4 className={styles.likes}>{props.likes} Likes</h4>
        <i className={props.liked?"fa-solid fa-thumbs-up "+styles.thumbs+" "+styles.active:"fa-solid fa-thumbs-up "+styles.thumbs} onClick={handleLiked}></i>
        <img
        src={props.link}
        alt="movie"
        className={styles.image}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null; // prevents looping
          currentTarget.src = image;
        }}
      />
      <p className={styles.decription}>{props.description}</p>
      <h1 className={styles.heading}>{MOVIES.ACTORS}</h1>
      {props.actors && props.actors.map((actor) => <h4 className={styles.actor} >{actor}</h4>)}
    </div>
  )
}

export default withAd(Description,false)
