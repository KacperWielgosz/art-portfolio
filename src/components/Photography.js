import { Link } from "react-router-dom";

const Photography = () => {
    return(
        <>
            <Link to="/">back</Link>
            <h1>Photos</h1>
            <p>text</p>
            <ul>
                <li>
                    <img src='' alt=''></img>
                    <p>text</p>
                    <Link to="/photoseriesone">series 1</Link>
                </li>
                <li>
                    <img src='' alt=''></img>
                    <p>text</p>
                    <Link to="/photoseriestwo">series 2</Link>
                </li>
                <li>
                    <img src='' alt=''></img>
                    <p>text</p>
                    <Link to="/photoseriesthree">series 3</Link>
                </li>
            </ul>
        </>
    )
}

export default Photography;