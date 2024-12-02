import { useState, useEffect, useContext, createContext } from 'react'
import image from '../../assets/image.jpeg'
import { Lottery } from '../../components/Lottery/Lottery'
import { ErrorBoundary } from 'react-error-boundary'
import { Trailer } from '../../components/Trailer/Trailer'
import { getData } from "../../services/fetchdata";
import { API } from '../../constants/constants'
import { Teasers } from '../../containers/Teasers/Teasers'
import { Language } from '../../components/Language/Language'
import styles from './Home.module.css'
import { LotteryError } from '../../components/LotteryError/LotteryError'

export const TeasersContext = createContext();
export default function Home() {
    const errorHandle = (error, errorInfo) => {
        console.log('Loging...', error, errorInfo)
    }
    const [data, setData] = useState([]);
    async function fetchData() {
        let res = await getData(
            API.TEASERS
        );
        setData(res);
    }

  useEffect(() => {
    fetchData();
  }, []);
    return(
        <TeasersContext.Provider value={data}>
            <div style={{backgroundImage: `url(${image})`}} className={styles.bgimage}></div>
            <ErrorBoundary FallbackComponent={LotteryError}>
                <Lottery />
            </ErrorBoundary>
            <section className={styles.content}>
                <Trailer />
                <Teasers />
                <Language />
            </section>
            
        </TeasersContext.Provider>
    )
}