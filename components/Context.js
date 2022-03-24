import {createContext, useState, useEffect} from 'react'
import { useRouter } from 'next/router'

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [admin, setAdmin] = useState(false)
    const [wordsData, setWordsData] = useState([])
    
    
    const router = useRouter()
    
    

    const  signin = async (person) => {
        try {
           let res = await fetch(`http://localhost:3000/api/signin`, {
                headers: { 
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(person)
            } )
            const data = await res.json();
            console.log(data)
            setUser(data.data)
            router.push('/')
        } catch(err) {
            console.log(err)
        }
    }

    const signup = async (person) => {
        try {
           let res = await fetch(`http://localhost:3000/api/users`, {
                method: 'POST',
                body: JSON.stringify(person),
            } )
            const res2 = await fetch(`http://localhost:3000/api/signin`, {
                headers: { 
                    'Content-Type': 'application/json'
                  },
                method: "POST",
                body: JSON.stringify(person)
                
            });

            const data = await res2.json();
            console.log(data)
            setUser(data.data)
            router.push('/')
        } catch(err) {
            console.log(err)
        }
    }
    
    const signout = async (user) => {
        router.push("/")
        setTimeout(()=>setUser(null), 1000)
        console.log(user)
    }

    const addWord = async (word) => {
        try {
            let res = await fetch(`http://localhost:3000/api/words`, {
                 method: 'POST',
                 body: JSON.stringify(word),
             } )
             const data = await res.json();
             console.log(data)
             router.push('/dashboard/add')
         } catch(err) {
             console.log(err)
         }
    }

    const getWords = async () => {
        const res = await fetch(`http://localhost:3000/api/words`);
        const wordsList = await res.json();
        setWordsData(wordsList.data)
    }
    
    

    return (
        <AuthContext.Provider value={{wordsData, signin, signup, signout, addWord, user, admin, getWords}}>
            {children}
        </AuthContext.Provider>
    )
}



export default AuthContext;