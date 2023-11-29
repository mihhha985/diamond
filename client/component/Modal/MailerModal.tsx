"use client";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {hideMailer} from "@/store/features/mailerSlice";
import { IoCloseCircleOutline } from "react-icons/io5";

function MailerModal() {
  const dispatch = useAppDispatch();
  const { visible } = useAppSelector(state => state.mailer);

  if(visible){
    return ( 
      <div 
        onClick={() => dispatch(hideMailer())}
        className="modal-container overflow-auto">
        <div
          onClick={() => dispatch(hideMailer())}
          className="cursor-pointer absolute top-0 right-0 text-3xl text-primary p-2 z-50">
          <IoCloseCircleOutline />
        </div>
        <div
          onClick={(e) => e.stopPropagation()} 
          className="modal-content gap-2 sm:gap-3 w-4/5 md:w-1/2 lg:w-1/3 h-5/6 overflow-y-auto">
          <h4 className="text-xl sm:text-2xl font-semibold">Остались вопросы?</h4>
          <h4 className="text-lg sm:text-xl">Просто заполните форму</h4>
          <div className="flex flex-col pb-2">
            <label htmlFor="name">Ваше имя:</label>
            <input type="text" id="name" />
          </div>
          <div className="flex flex-col pb-2">
            <label htmlFor="email">Ваш email:</label>
            <input type="text" id="email" />
          </div>
          <div className="flex flex-col pb-2">
            <label htmlFor="text">Напишите ваш вопрос:</label>
            <textarea className="resize-none" id="text" rows={5}/>
          </div>       
          <button type="button" className="mt-5">Отправить</button>
        </div>
      </div>
    );
  }
}

export default MailerModal;