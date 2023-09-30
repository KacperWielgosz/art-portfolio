import { Link } from "react-router-dom";
import styles from './NavBar.module.scss'

const NavBar = () => {
    return(
        <> 
        <ul className={styles.Navbar}>
            <li className={styles.list}>
                <Link to="/" >Home</Link>
            </li>
            <li className={styles.list}>
                <Link to="/about">About</Link>
            </li>
            <li className={styles.list}>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
        </>
    )
}

export default NavBar;