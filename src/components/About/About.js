import { Link } from "react-router-dom";
import styles from "./About.module.scss";

const About = () => {
    return(
        <div className={styles.div}>
            <span>
                About
            </span>
            <Link to="/contact">contact</Link>
        </div>
    )
}

export default About;