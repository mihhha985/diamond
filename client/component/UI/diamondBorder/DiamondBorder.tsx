"use client"
import {useEffect} from "react";
import Image from "next/image";
import icon from "@/public/favicon.png";
import styles from "./DiamondBorder.module.scss"

function DiamondBorder({width, bg}:{width:string, bg:string}) {
	useEffect(() => {
		console.log("env", process.env.testEnv, process.env.serverUrl);
	}, []);

  return ( 
    <div className={styles.border}>
      <div style={{width:width, background:bg}}></div>
      <Image 
        src={icon} 
        alt="icon" 
        width={25} 
        height={25} 
        priority={true}
      />
      <div style={{width:width, background:bg}}></div>
    </div>
   );
}

export default DiamondBorder;