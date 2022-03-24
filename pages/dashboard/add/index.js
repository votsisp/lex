import styles from '../../../styles/Context.module.css'
import { useState, useEffect, useContext } from 'react'
import {ToastContainer, toast} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { FaUser } from 'react-icons/fa'
import { BsPlusCircle } from 'react-icons/bs'
import { BiMinusCircle } from 'react-icons/bi'
import AuthContext from '../../../components/Context'



export default function AddWordPage() {
    const[inputFields, setInputFields] = useState([
        {description: "", example: ""}
    ])
    const[word, setWord] = useState("")
    const {addWord} = useContext(AuthContext);
    
    const handleChange = (index , e) => {
        const values = [...inputFields];
        values[index][e.target.name] = e.target.value
        setInputFields(values);
    }

    const handleAddField = () => {
        setInputFields([...inputFields, {description: "", example: ""}])
    }

    const handleRemoveField = (index) => {
        const values = [...inputFields];
        values.splice(index, 1);
        setInputFields(values)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const createdAt = new Date;
        let entry = {
            entryDe: word,
            meaning: inputFields,
            createdAt
        }
        addWord(entry)
        alert("Word added Succesfully")
        console.log("ok")
    }

    return (       
                <div className={styles.auth}>
                        <h1><FaUser/>Add Word</h1>
                        <ToastContainer/>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor='word'>Word</label>    
                                <input 
                                type="text"
                                value={word}
                                id="word"
                                onChange={(e) => setWord(e.target.value)}
                                />
                            </div>    
                            <>
                               { inputFields.map((inputField, index) => (
                                   <div className={styles.textContainer} key={index}> 
                                        <div key={index}>
                                            <label htmlFor='description'>Description</label>    
                                            <textarea 
                                            name='description'
                                            placeholder='Description...'
                                            rows={3}
                                            cols={20}
                                            value={inputField.description}
                                            onChange={e => handleChange(index, e)}
                                            />
                                        </div>
                                        <div key={index}>
                                            <label htmlFor='example'>Example</label>    
                                            <textarea 
                                            name='example'
                                            placeholder='Example...'
                                            rows={3}
                                            cols={20}
                                            value={inputField.example}
                                            onChange={e => handleChange(index, e)}
                                            />
                                        </div>
                                        <div className={styles.addremove}>
                                             <div onClick={()=> handleAddField()}>
                                                <BsPlusCircle/>
                                             </div>
                                             <div onClick={()=> handleRemoveField(index)}>
                                                <BiMinusCircle/>
                                             </div>
                                         </div>
                                   </div>     
                                ))
                               }
                            </>
                           
                            <input type="submit" value="Create" className={styles.btn}/>   
                        </form>
                    </div>
        
    )
}

