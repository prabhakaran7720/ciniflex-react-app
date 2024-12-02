import React from 'react'
import image from "../../assets/fallback.png";
import styles from './Movie.module.css'

export const Movie = (props) => {

    // const [likes, setLikes] = useState(props.likes)
    // const [liked, setLiked] = useState(false)
    function handleLiked() {
        // setLiked((liked) => !liked)
        // if(liked) {
        //     setLikes(parseInt(likes)-1)
        // } else {
        //     setLikes(parseInt(likes)+1)
        // }
        props.change(props);
      }
  return (
    <div className={styles.container} >
        <img
        src={props.link}
        alt="movie"
        className={styles.image}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null; // prevents looping
          currentTarget.src = image;
        }}
        onClick={props.action}
      />
      <div className={styles.details}>
        <h3 className={styles.name}>{props.movie}</h3>
        <h4 className={styles.likes}>{props.likes} Likes</h4>
        {props.liked}
        <i className={props.liked?"fa-solid fa-thumbs-up "+styles.fontawesome+" "+styles.active:"fa-solid fa-thumbs-up "+styles.fontawesome} onClick={handleLiked}></i>
      </div>
    </div>
  )
}
