import React, { useState, useEffect } from 'react'
import { API, MOVIES } from '../../constants/constants';
import { Movie } from '../../components/Movie/Movie';
import Button from '../../components/Button/Button';
import { getData } from "../../services/fetchdata";
import styles from './Movies.module.css'
import  Description  from '../../components/Description/Description';

export const Movies = () => {

  const [data, setData] = useState([]);
  const [max, setMax] = useState(6)
  const [showAd, setShowAd] = useState(false)
  function handleShowAd(){
    setShowAd((ad) => !ad)
    console.log('description ',showAd)
  }
    async function fetchData() {
        let res = await getData(
            API.MOVIES
        );
        setData(res.map((movie)=>{return {...movie,liked:false,ad:false}}));
    }

  useEffect(() => {
    fetchData();
  }, []);

  const [movies, setMovies] = useState([])
  const [description, setDescription] = useState({})

  useEffect(() => {
    
   setMovies(data.slice(0,max))
  }, [data,movies]);

  useEffect(() => {
    setDescription(data[0])
   }, [data]);

  function getMovies() {
    setMovies(data.slice(0,max))
    setMax(max+6);
  }
  

  function handleDescription(movie){
    if(description.movie !== movie.movie)
    {
        let objIndex = movies.findIndex((obj => obj.id === movie.id));
        console.log(movies[objIndex].ad)
        !movie.ad && handleShowAd()
        movies[objIndex].ad = true
        console.log(movies[objIndex].ad)
        setMovies(movies);
    }
    setDescription(movie)
  }


  function changeData(movie) {
    let objIndex = movies.findIndex((obj => obj.id === movie.id));
    if(movies[objIndex].liked) {
        movies[objIndex].likes = parseInt(movies[objIndex].likes)-1
    } else {
        movies[objIndex].likes = parseInt(movies[objIndex].likes)+1
    }
    movies[objIndex].liked = !movies[objIndex].liked
    setMovies(movies);
  }

  
  return (
    <div className={styles.container}>
        <div className={styles.wrap}>
            <h2 className={styles.title}>{MOVIES.TITLE}</h2>
            <div className={styles.wrapper}>
                {movies && movies.map((movie) => (<Movie key={movie.id} {...movie} action={()=>handleDescription(movie)} change={changeData}/>))}
            </div>
            <div className={styles.btn}>{movies.length%6>0?"":<Button name="LOAD MORE" action={getMovies}/>}</div>
        </div>
        <div className={styles.left}>
            <Description {...description} change={changeData} showAd={showAd}/>
        </div>
    </div>
  )
}
