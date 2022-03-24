import styles from '../styles/Context.module.css'
import { useState, useEffect, useContext } from 'react'
import {ToastContainer, toast} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { FaUser } from 'react-icons/fa'
import AuthContext from '../components/Context'



export default function SignUpPage() {
    const[username, setUsername] = useState("")
    const[password, setPassword] = useState("")
    const[passwordConfirm, setPasswordconfirm] = useState("")
    const[name, setName] = useState("")
    const[role, setRole] = useState("user")

    const {signup} = useContext(AuthContext);
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const createdAt = new Date;
        let person = {
            role,
            username,
            password,
            name,
            createdAt
        }
    
        if( password !== passwordConfirm) {
            toast.error("Password Confirmation is False")
            return;
        } if ( !username || !passwordConfirm) {  
            toast.error("Fill all the required areas")
            return;  
        } else
        
        signup(person)
        alert("User added Succesfully")
        console.log("ok")
    }

    return (       
                <div className={styles.auth}>
                        <h1><FaUser/>Create</h1>
                        
                        <ToastContainer/>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor='username'>Username (E-mail)</label>    
                                <input 
                                type="text"
                                value={username}
                                id="email"
                                onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>    
                            <div>
                                <label htmlFor='clientpassword'>Password</label>    
                                <input 
                                type="password"
                                value={password}
                                id="clientspassword"
                                onChange={(e) => setPassword(e.target.value)}
                                />
                            </div> 
                            <div>
                                <label htmlFor='passwordConfirm'>Confirm Password </label>    
                                <input 
                                type="password"
                                value={passwordConfirm}
                                id="passwordConfirm"
                                onChange={(e) => setPasswordconfirm(e.target.value)}
                                />
                            </div> 
                            <div>
                                <label htmlFor='Name'>Name</label>    
                                <input 
                                type="text"
                                value={name}
                                id="name"
                                onChange={(e) => setName(e.target.value)}
                                />
                            </div> 
                            <input type="submit" value="Create" className={styles.btn}/>   
                        </form>
                    </div>
        
    )
}

