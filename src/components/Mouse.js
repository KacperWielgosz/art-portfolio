import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from "./Mouse.module.scss";

const Mouse = () => {
    const [mousePos, setMousePos] = useState({x: 0, y: 0});

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

    const mousePosCalcY =  mousePos.y * 0.03 ;
    const mousePosCalcX =  mousePos.x * 0.02 ;

    console.log(mousePos.x, mousePosCalcX)

    return (
        
            <div className={styles.wrapper}>
                <div className={styles.staticdivone}>
                    <div className={styles.staticdivtwo}>
                        <motion.div className={styles.motiondot}  animate={ {x: mousePosCalcX -15, y: mousePosCalcY} } />
                    </div>
                </div>
            </div>
    );
}

export default Mouse; 