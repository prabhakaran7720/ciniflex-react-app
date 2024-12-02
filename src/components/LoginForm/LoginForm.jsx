import { useState } from 'react'
import { useNavigate } from 'react-router';
import Button from '../Button/Button'
import loginService from '../../services/loginService';
import { LOGINFORM } from '../../constants/constants';
import styles from './LoginForm.module.css'

export default function LoginForm() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [valid, setValid] = useState(true);
    let navigate = useNavigate()

    function handleUsername(event) {
        setUsername(event.target.value);
    }

    function handlePassword(event) {
        setPassword(event.target.value);
    }

    function login() {
        let check = loginService(username, password);
        if(check) {
            navigate("/")
            window.localStorage.setItem("user","Alagu");
        } else {
            setValid(false)
        }

    }
    return(
        <div className={styles.form}>
            <h3 className={styles.title}>{LOGINFORM.TITLE}</h3>
            <p className={styles.text}>{LOGINFORM.TEXT}</p>
            <label>{LOGINFORM.EMAIL}</label>
            <input type="email" className={styles.input} value={username} onChange={handleUsername}/>
            <label>{LOGINFORM.PASSWORD}</label>
            <input type="password" className={styles.input} value={password} onChange={handlePassword}/>
            {valid?"":<p className={styles.invalid}>{LOGINFORM.INVALID}</p>}
            <div className={styles.btn}><Button name="LOGIN" action={login}/></div>
        </div>
    )
}