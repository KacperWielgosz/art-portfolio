import { Link } from "react-router-dom";

const Drawings = () => {
    return(
        <>
            <Link to="/">back</Link>
            <h1>Drawings</h1>
            <p>text</p>
            <ul>
                <li>
                    <img src='' alt=''></img>
                    <p>text</p>
                    <Link to="/surrealisticdrawings">surrealistic drawings</Link>
                </li>
                <li>
                    <img src='' alt=''></img>
                    <p>text</p>
                    <Link to="/tattoodrawings">tattoo drawings</Link>
                </li>
            </ul>
        </>
    )
}

export default Drawings;