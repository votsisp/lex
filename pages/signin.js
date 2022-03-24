import styles from '../styles/Context.module.css'
import { useState, useEffect, useContext } from 'react'
import {ToastContainer, toast} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { FaUser } from 'react-icons/fa'
import AuthContext from '../components/Context'


export default function SignInPage() {
    const[username, setUsername] = useState("")
    const[password, setPassword] = useState("")

    const {signin} = useContext(AuthContext);
    const person = {
        username: username,
        password: password
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        signin(person);
        }
    

    return (
        <>  
            <div className={styles.auth}>
                <h1><FaUser/>Sign in</h1>
                <ToastContainer/>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='username'>Username</label>    
                        <input 
                        type="text"
                        value={username}
                        id="username"
                        onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>    
                    <div>
                        <label htmlFor='password'>Password</label>    
                        <input 
                        type="password"
                        value={password}
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </div> 
                    <input type="submit" value="Sign In" className={styles.btn}/>   
                </form>
            </div>
            
        </>
    )
}

