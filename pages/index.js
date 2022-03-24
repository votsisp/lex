
import styles from '../styles/Home.module.css'
import { FiSearch } from 'react-icons/fi'
import { BsFillStarFill } from 'react-icons/bs'
import AuthContext from '../components/Context'
import { useContext, useState, useEffect } from "react";







export default function Home() {

  const[word, setWord] = useState("")
  const {user, getWords, wordsData} = useContext(AuthContext)
  useEffect(getWords, [])
  const words = wordsData; 
  
  const newWords = words.filter((e) => {
    let newWord = e.entryDe
    return word ? newWord.toLowerCase() == word.toLowerCase() : words.indexOf(e) < 3; 
  })
  
  return (
    <>{user ? 
      <>
        <div className={styles.container}>
          <div className= {styles.searchInput}>
            <input type="text" placeholder='Enter your word' onChange={(e) => {
              setWord(e.target.value)
              }}/>

            <div className={styles.icon}>
              <FiSearch/>
            </div>
          </div>
          <div className={styles.results}>
            {newWords.map((item, x) => (
              <ul key={x}>
                <h2>Word: {item.entryDe}</h2>
                {item.meaning.map((i, y, z) => (
                  <>
                    <li key={y}><strong>{y+1}. Description</strong>: {i.description}</li>
                    <li key={z}><strong>Example</strong>: {i.example}</li>
                  </>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </>  : 
      <>
        <div className={styles.mainContainer}>
          <div className={styles.logoInc}>
            <BsFillStarFill/>
            <a>Dictionary</a>
          </div>
          <div className={styles.saying}>
            <h2>GrDe Politisches Wörterbuch</h2>
          </div> 
        </div>
      </>
    }
    </>
  )

  
}


