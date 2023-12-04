"use client";
import {useRef, RefObject} from "react";
import { useForm, SubmitHandler } from "react-hook-form"
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {hideMailer} from "@/store/features/mailerSlice";
import { show } from "@/store/features/alertsSlice";
import { IoCloseCircleOutline } from "react-icons/io5";

type Inputs = {
	name: string,
	email: string,
	text: string
};

function MailerModal() {
  const dispatch = useAppDispatch();
  const { visible } = useAppSelector(state => state.mailer);
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

		fetch("http://localhost:8000/mailer", {
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
        <form
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
          <div className="relative flex flex-col pb-2 pb-3">
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
          <button ref={sendButtonRef} type="submit" className="mt-5">Отправить</button>
        </form>
      </div>
    );
  }
}

export default MailerModal;