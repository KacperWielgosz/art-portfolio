import { Link } from "react-router-dom";

const Drawings = () => {
    return(
        <>
            <Link to="/">back</Link>
            <h1>Drawings</h1>
            <p>text</p>
            <ul>
                <li>
                    <img src='https://i.pinimg.com/originals/62/4f/b8/624fb841321b4b828567ede1948cc208.png' alt=''></img>
                    <p>text</p>
                    <Link to="/surrealisticdrawings">
                        <h3>surrealisticdrawings</h3>
                    </Link>
                </li>
                <li>
                    <img src='https://i.pinimg.com/originals/62/4f/b8/624fb841321b4b828567ede1948cc208.png' alt=''></img>
                    <p>text</p>
                    <Link to="/tattoodrawings">
                        <h3>tattoo drawings</h3>
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default Drawings;