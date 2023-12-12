"use client"
import Image from 'next/image';
import { motion, useScroll, useSpring } from "framer-motion";
import diamond from '@/public/diamond/1.png';
import styles from './DiamondBox.module.scss';

function DiamondBox() {
	const {scrollY, scrollYProgress} = useScroll();
	const scaleY = useSpring(scrollY, {
		stiffness: 5,
    damping: 30,
    restDelta: 0.001
	}); 

	console.log(scaleY);
  return ( 
    <motion.div
			layout 
			className={styles.box}>
      <motion.div 
				style={{y: scaleY}}
				className="absolute item">
        <Image className="relative z-20" src={diamond} alt="diamond" />
        <div className="absolute top-0 left-0 w-full h-full z-10 diamond-shadow"></div>
      </motion.div>
      <div className="absolute item">
        <Image className="relative z-20" src={diamond} alt="diamond" />
        <div className="absolute top-0 left-0 w-full h-full z-10 diamond-shadow"></div>
      </div>
      <div className="absolute item">
        <Image className="relative z-20" src={diamond} alt="diamond" priority={true}/>
        <div className="absolute top-0 left-0 w-full h-full z-10 diamond-shadow"></div>
      </div>
      <div className="absolute item">
        <Image className="relative z-20" src={diamond} alt="diamond" />
        <div className="absolute top-0 left-0 w-full h-full z-10 diamond-shadow"></div>
      </div>
      <div className="absolute item">
        <Image className="relative z-20" src={diamond} alt="diamond" />
        <div className="absolute top-0 left-0 w-full h-full z-10 diamond-shadow"></div>
      </div>
      <div className="absolute item">
        <Image className="relative z-20" src={diamond} alt="diamond" />
        <div className="absolute top-0 left-0 w-full h-full z-10 diamond-shadow"></div>
      </div>
      <div className="absolute item">
        <Image className="relative z-20" src={diamond} alt="diamond" />
        <div className="absolute top-0 left-0 w-full h-full z-10 diamond-shadow"></div>
      </div>
    </motion.div>
  );
}

export default DiamondBox;