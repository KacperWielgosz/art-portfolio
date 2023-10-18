import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from "./Mouse.module.scss";
import logo from '../pictures/MainLogo.png'

const Mouse = () => {
    const [mousePos, setMousePos] = useState({x: 750, y: 0});

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePos({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener(
                'mousemove',
                handleMouseMove
            );
        };
    }, []);

    const mousePosCalcY =  mousePos.y * 0.05 ;
    const mousePosCalcX =  mousePos.x * 0.05 ;

    //console.log(mousePos.x, mousePosCalcX)

    return (
        
            <div className={styles.wrapper}>
                <img className={styles.logo} src={logo}  alt="logo" />
                <div>
                    <motion.div className={styles.motiondot}  animate={ {x: mousePosCalcX -15, y: mousePosCalcY} } />
                </div>
            </div>
    );
}

export default Mouse; 