import { Link } from "react-router-dom";

const Tattoos = () => {
    return(
        <>  
            <Link to="/">back</Link>
            <h1>Tattoos</h1>
            <p>text</p>
            <ul>
                <li>
                    <img src='' alt=''></img>
                    <p>text</p>
                    <Link to="/surrealistictattoos">surrealistic tattoos</Link>
                </li>
                <li>
                    <img src='' alt=''></img>
                    <p>text</p>
                    <Link to="/vintagetattoos">vintage tattoos</Link>
                </li>
            </ul>
        </>
    )
}

export default Tattoos;