"use client"
import { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import cn from "classnames";

export type QuestionItemProps = {
  title: string;
  text: string;
}

function QuestionItem({title, text}: QuestionItemProps) {
  const [isHidden, setIsHidden] = useState(true);

  return ( 
    <div className="flex flex-col">
      <div className="flex justify-between items-start px-2">
        <h4 className="text-secondary-200 text-lg sm:text-2xl lg:text-3xl font-medium mb-1 sm:mb-2">{title}</h4>
        <div
          onClick={() => setIsHidden(!isHidden)} 
          className="cursor-pointer">
          {!isHidden
            ? <IoIosArrowUp className="text-secondary-200 text-2xl sm:text-3xl lg:text-4xl" />
            : <IoIosArrowDown className="text-secondary-200 text-2xl sm:text-3xl lg:text-4xl" />    
          }
        </div>
      </div>
      <p style={{textAlign:"left"}} className={cn('text', 'pl-5', {'hidden':  isHidden})}>{text}</p>
    </div>
  );
}

export default QuestionItem;