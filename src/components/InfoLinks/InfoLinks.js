import { Link } from "react-router-dom";
import styles from './InfoLinks.module.scss'

const InfoLinks = () => {
  return(
    <>
        <ul className={styles.list}>
            <li>
                <Link to="/tattoos">Tattoos</Link>
            </li>
            <li>
                <Link to="/paintings">Paintings</Link>
            </li>
            <li>
                <Link to="/drawings">Drawings</Link>
            </li>
            <li>
                <Link to="/photography">Photography</Link>
            </li>
        </ul>
    </>
  )
}

export default InfoLinks;