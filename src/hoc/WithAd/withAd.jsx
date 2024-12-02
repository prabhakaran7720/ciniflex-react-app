import React, { useEffect, useState } from "react";
import { ADVERTISEMENT } from "../../constants/constants";
import styles from "./WithAd.module.css";

export const withAd = (OrginalComponent, teaser) => {
  function NewComponent(props) {

    const [time, setTime] = useState(teaser ? 5 : 15);
    const [play, setPlay] = useState(teaser?false:true);
    const [ad, setAd] = useState(false);
    const [adShowed, setAdShowed] = useState(false);

    const [resumes, setResumes] = useState(teaser ? 2 : 5);
    const [adOver, setAdOver] = useState(false);

    function handlePlay() {
        if(!adOver) {
            setPlay((play) => !play);
        }
    }

    function reset(){
        console.log('reset')
        setResumes(5)
        setTime(15)
    }

    useEffect(() => {
      let timer;
      let resumesTimer;
      if (play) {
        timer = setTimeout(() => {
          setTime(time - 1);
        }, 1000);
      }
      if (time === 0 && play && !ad) {
        setPlay((play) => !play);
        setAd((ad) => !ad);
        setAdOver((adOver) => !adOver);
        clearTimeout(timer);
      }
      if (ad) {
        resumesTimer = setTimeout(() => {
          setResumes(resumes - 1);
        }, 1000);
      }
      if (resumes === 0 && ad && !play && !adShowed) {
        setPlay((play) => !play);
        setAd((ad) => !ad);
        setAdShowed((adShowed) => !adShowed);
        clearTimeout(resumesTimer);
      }
    }, [play, ad, time, resumes]);

    return (
      <>
        <OrginalComponent
          {...props}
          action={handlePlay}
          advertisement={ad}
          adShowed={adShowed}
          adOver={adOver}
          reset={reset}
        />
        {!adOver ? play ? <div>{ADVERTISEMENT.AD+(teaser?'0'+time:time)}</div> : <></> : <></>}
        {adOver ? ad ? <div>{ADVERTISEMENT.RESUME+resumes}</div> : <></> : <></>}
      </>
    );
  }

  return NewComponent;
};
