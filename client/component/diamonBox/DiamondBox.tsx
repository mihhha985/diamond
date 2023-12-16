"use client"
import { useEffect } from "react";
import Image from 'next/image';
import { motion, useAnimate } from "framer-motion";
import useScrollY from '@/hooks/useScrollY';
import diamond from '@/public/diamond/1.png';
import styles from './DiamondBox.module.scss';

function DiamondBox() {
	const scroll = useScrollY();
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const box = document.getElementById('diamondBox') as HTMLDivElement;
    if((box.offsetHeight) > scroll){
      animate('div:nth-child(1):not(.diamond-shadow)', {y: scroll / 3 },  {ease:"linear"});
      animate('div:nth-child(2):not(.diamond-shadow)', {y: scroll / 4 }, {ease: "linear"});
      animate('div:nth-child(3):not(.diamond-shadow)', {y: scroll / 7 }, {ease: "linear"});
      animate('div:nth-child(4):not(.diamond-shadow)', {y: scroll / 8 }, {ease: "linear"});
      animate('div:nth-child(5):not(.diamond-shadow)', {y: scroll / 9 }, {ease: "linear"});
      animate('div:nth-child(7):not(.diamond-shadow)', {y: scroll / 10 }, {ease: "linear"});
    }
  }, [scroll]);

  return ( 
    <motion.div
			layout 
      ref={scope}
      id="diamondBox"
			className={styles.box}>
      <div 
				className="absolute item">
        <Image className="relative z-20" src={diamond} alt="diamond" />
        <div className="absolute top-0 left-0 w-full h-full z-10 diamond-shadow"></div>
      </div>
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