import LoginForm from '../../components/LoginForm/LoginForm'
import image from '../../assets/image.jpeg'
import styles from './Login.module.css'


export default function Login() {
    return(
        <div style={{backgroundImage: `url(${image})`}} className={styles.bgimage}>
            <LoginForm />
        </div>
        
    )
}