"use client"
import { useState } from "react";
import {motion} from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";

const variantText = { 
	hidden: {height:"0px"},
	visible: {height: "100%"}
}

const variantArrow = {
	hidden: {rotate: 0},
	visible: {rotate: 180}
}

export type QuestionItemProps = {
  title: string;
  text: string;
}

function QuestionItem({title, text}: QuestionItemProps) {
  const [isHidden, setIsHidden] = useState(true);

  return ( 
    <motion.div 
			layout
			className="flex flex-col">
      <div className="flex justify-between items-start px-2">
        <h4 className="text-secondary-200 text-lg sm:text-2xl lg:text-3xl font-medium mb-1 sm:mb-2">{title}</h4>
        <motion.div
					initial="hidden"
					animate={isHidden ? "hidden" : "visible"}
					transition={{ease: "easeIn", duration:0.3}}
					variants={variantArrow}
          onClick={() => setIsHidden(!isHidden)} 
          className="cursor-pointer">
         	<IoIosArrowDown className="text-secondary-200 text-2xl sm:text-3xl lg:text-4xl" />    
        </motion.div>
      </div>
      <motion.p 
				initial="hidden"
				animate={isHidden ? "hidden" : "visible"}
				transition={{ease: "easeIn", duration:0.3}}
				variants={variantText}
				className={'text pl-5'}>
				{text}
			</motion.p>
    </motion.div>
  );
}

export default QuestionItem;