import { Link } from "react-router-dom";

const Tattoos = () => {
    return(
        <>  
            <Link to="/">back</Link>
            <h1>Tattoos</h1>
            <p>text</p>
            <ul>
                <li>
                    <img src='https://d1kq2dqeox7x40.cloudfront.net/images/posts/20201105_ONKCtGuhBDsfDxz.jpeg?w=300' alt=''></img>
                    <p>text</p>
                    <Link to="/surrealistictattoos">
                        <h3>surrealistic tattoos</h3>
                    </Link>
                </li>
                <li>
                    <img src='https://d1kq2dqeox7x40.cloudfront.net/images/posts/20201105_ONKCtGuhBDsfDxz.jpeg?w=300' alt=''></img>
                    <p>text</p>
                    <Link to="/vintagetattoos">
                        <h3>vintage tattoos</h3>
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default Tattoos;