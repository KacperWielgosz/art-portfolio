import Mouse from "../Mouse";
import styles from "./Info.module.scss"

const Info = () => {
    return(
        <div className={styles.wrapper}>
            <h1 className={styles.name}>
                Kacper G 
            </h1>
            <div className={styles.surname}>
                <h2>
                    Wielg
                </h2>
                <Mouse/>
                <h2>
                    sz
                </h2>
            </div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fermentum risus tellus, lobortis aliquet elit finibus sit amet. Pellentesque eget diam neque. Pellentesque egestas velit eget congue varius. In sed pretium felis. Integer consectetur felis sit amet finibus vulputate. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec viverra, purus sit amet rhoncus tristique
            </p>  
        </div>
    )
}

export default Info;