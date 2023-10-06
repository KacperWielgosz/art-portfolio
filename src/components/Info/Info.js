import Mouse from "../Mouse";
import styles from "./Info.module.scss"
import Container from "../Container/Container";

const Info = () => {
    return(
        <div>
            <Mouse/>
            <Container>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fermentum risus tellus, lobortis aliquet elit finibus sit amet. Pellentesque eget diam neque. Pellentesque egestas velit eget congue varius. In sed pretium felis. Integer consectetur felis sit amet finibus vulputate. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec viverra, purus sit amet rhoncus tristique
                </p> 
                <div className={styles.example}>test</div> 
            </Container>
        </div>
    )
}

export default Info;