import { Link } from "react-router-dom";

const Tattoos = () => {
    return(
        <>
            <ul>
                <li>
                    <Link to="/surrealistictattoos">surrealistic tattoos</Link>
                </li>
                <li>
                    <Link to="/vintagetattoos">vintage tattoos</Link>
                </li>
            </ul>
        </>
    )
}

export default Tattoos;