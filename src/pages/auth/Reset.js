import React, { useState } from 'react'
import styles from "./Auth.module.scss"
import { Link } from 'react-router-dom'
import resetImg from "../../assets/forgot.png"
import Card from '../../components/card/Card'
import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '../../components/firebase/config'
import { toast } from 'react-toastify'
import Loader from '../../components/loader/Loader'

const Reset = () => {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
 

  const resetPassword = (e) => {
    e.preventDefault()
    setIsLoading(true)

    sendPasswordResetEmail(auth, email)
  .then(() => {
    toast.success("Check your email for reset link")
    setIsLoading(false)
  })
  .catch((error) => {
    toast.error(error.message)
    setIsLoading(false)
  });
  }

  return (
    <>
    {isLoading && <Loader />}
    <section className={`container ${styles.auth}`}> 
    <div className={styles.img}>
    <img src={resetImg} alt="Login" width={400}></img>
    </div>
    <Card>
    <div className={styles.form}>
        <h2>Reset Password</h2>
        <form onSubmit={resetPassword}>
            <input type="text" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            <button type='submit' className='--btn --btn-primary --btn-block'>Reset Password</button>
            <div className={styles.links}>
                <Link to="/login"><b>Login</b></Link>
                <Link to="/register"><b>Register</b></Link>
            </div>
        </form>
    </div>
    </Card>
</section>
</>
  )
}

export default Reset
