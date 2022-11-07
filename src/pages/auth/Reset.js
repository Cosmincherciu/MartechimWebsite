import React from 'react'
import styles from "./Auth.module.scss"
import { Link } from 'react-router-dom'
import resetImg from "../../assets/forgot.png"
import Card from '../../components/card/Card'

const Reset = () => {
  return (
    <section className={`container ${styles.auth}`}> 
    <div className={styles.img}>
    <img src={resetImg} alt="Login" width={400}></img>
    </div>
    <Card>
    <div className={styles.form}>
        <h2>Reset Password</h2>
        <form>
            <input type="text" placeholder="Email" required />
            <button className='--btn --btn-primary --btn-block'>Reset Password</button>
            <div className={styles.links}>
                <Link to="/login"><b>Login</b></Link>
                <Link to="/register"><b>Register</b></Link>
            </div>
        </form>
    </div>
    </Card>
</section>
  )
}

export default Reset
