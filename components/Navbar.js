import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import AuthContext from '../components/Context'
import { useContext } from "react";
import { BsFillStarFill } from 'react-icons/bs'

export default function Navbar() {

  const {user, signout, admin} = useContext(AuthContext)
  
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <div className={styles.logoInc}>
            <BsFillStarFill/>
            <a>Dictionary</a>
          </div>  
        </Link>
      </div>
      <nav className={styles.navbar}>
        <ul>
          {user ? 
            <>
              <li>
                {user.name}
              </li>
              <li>
                <button className={styles.btn} onClick={()=> signout()}>Log Out</button>
              </li>
            </> :
              <>
                <Link href="/signup">
                  <a>Sign Up</a>
                </Link>
                <Link href="/signin">
                  <a>Log In</a>
                </Link>
              </>  
          }
        </ul>
      </nav>
    </header>
  );
}