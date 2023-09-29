import { Link } from "react-router-dom";

const Paintings = () => {
    return(
        <>  
            <Link to="/">back</Link>
            <h1>Paintings</h1>
            <p>text</p>
            <ul>
                <li>
                    <img src='' alt=''></img>
                    <p>text</p>
                    <Link to="/paintingseriesone">series 1</Link>
                </li>
                <li>
                    <img src='' alt=''></img>
                    <p>text</p>
                    <Link to="/paintingseriestwo">series 2</Link>
                </li>
            </ul>
        </>
    )
}

export default Paintings;