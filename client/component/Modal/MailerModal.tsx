"use client";
import {useRef, useState, RefObject} from "react";
import { useForm, SubmitHandler } from "react-hook-form"
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {hideMailer} from "@/store/features/mailerSlice";
import { show } from "@/store/features/alertsSlice";
import { IoCloseCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const variant = {
	hidden: { opacity: 0, scale: 0.1 },
	visible: { opacity: 1, scale: 1 }
}

type Inputs = {
	name: string,
	email: string,
	text: string
};

function MailerModal() {
  const dispatch = useAppDispatch();
  const { visible } = useAppSelector(state => state.mailer);
	const [isHidden, setIsHidden]= useState<boolean>(false);
	const sendButtonRef = useRef() as RefObject<HTMLButtonElement>;

	const {
    register,
    handleSubmit,
		reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
		if(sendButtonRef.current) {
			sendButtonRef.current.disabled = true;
			sendButtonRef.current.style.cursor = 'not-allowed';
		}

		fetch(`${process.env.serverUrl}/mailer`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		})
		.then(res => {
			dispatch(hideMailer());
			dispatch(show({
				text: "Ваше сообщение успешно отправлено!\nМы ответим Вам в ближайшее время", 
				language: "ru" 
			}));
		})
		.catch(err => {	
			dispatch(hideMailer());
			dispatch(show({
				text: "При отправки сообщения произошла ошибка!\nПопробуйте позже", 
				language: "ru" 
			}));
		})
		.finally(() => {
			reset({
				name: "",
				email: "",
				text: ""
			});
		});
	}

	const hiddenModal = () => {
		setIsHidden(true);
		setTimeout(() => {
			setIsHidden(false);
			dispatch(hideMailer())
		}, 400)
	}

  if(visible){
    return ( 
      <motion.div 
				layout
        onClick={hiddenModal}
        className="modal-container overflow-auto">
        <div
          onClick={hiddenModal}
          className="cursor-pointer absolute top-0 right-0 text-3xl text-primary p-2 z-50">
          <IoCloseCircleOutline />
        </div>
        <motion.form
					initial="hidden"
					animate={isHidden ? "hidden" : "visible"}
					transition={{duration: 0.4}}
					variants={variant}
					onSubmit={handleSubmit(onSubmit)}
          onClick={(e) => e.stopPropagation()} 
          className="modal-content gap-2 sm:gap-3 w-4/5 md:w-1/2 lg:w-1/3 h-5/6 sm:h-auto overflow-y-auto">
          <h4 className="text-xl sm:text-2xl font-semibold">Остались вопросы?</h4>
          <h4 className="text-lg sm:text-xl">Просто заполните форму</h4>
          <div className="relative flex flex-col pb-3">
            <label htmlFor="name">Ваше имя:</label>
            <input type="text" id="name"{...register("name", {required:true, minLength:3, maxLength:20})}/>
						{errors.name?.type === 'required' && <span className="form-error">Поле обязательно для заполнения</span>}
						{errors.name?.type === 'minLength' && <span className="form-error">Минимальная длина 3 символа</span>}
						{errors.name?.type === 'maxLength' && <span className="form-error">Максимальная длина 20 символов</span>}
          </div>
          <div className="relative flex flex-col pb-3">
            <label htmlFor="email">Ваш email:</label>
            <input type="text" id="email" {...register("email", {required:true, pattern: /^([0-9A-Za-z\_\-\.]+)@(([A-Za-z\.]+))$/i})} />
						{errors.name?.type === 'required' && <span className="form-error">Поле обязательно для заполнения</span>}
						{errors.email && <span className="form-error">Не корректный Email адрес</span>}
          </div>
          <div className="relative flex flex-col pb-3">
            <label htmlFor="text">Напишите ваш вопрос:</label>
            <textarea className="resize-none" id="text" rows={5} {...register("text", {required:true, maxLength: 500, minLength:50})}/>
						{errors.text?.type === 'required' && <span className="form-error">Поле обязательно для заполнения</span>}
						{errors.text?.type === 'minLength' && <span className="form-error">Минимальная длина 50 символа</span>}
						{errors.text?.type === 'maxLength' && <span className="form-error">Максимальная длина 500 символов</span>}
          </div>       
          <motion.button 
						whileTap={{scale: 0.9}}
						ref={sendButtonRef} 
						type="submit" 
						className="mt-5">
							Отправить
					</motion.button>
        </motion.form>
      </motion.div>
    );
  }
}

export default MailerModal;