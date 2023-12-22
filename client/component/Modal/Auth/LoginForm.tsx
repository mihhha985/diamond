"use client"
import {useState, forwardRef, ForwardedRef} from "react";
import {setRegister} from "@/store/features/profileSlice";
import {useAppDispatch} from "@/store/hooks";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";
import DefaultButton from "@/component/UI/defaultButton/defaultButton";

type LoginType = {
	email: string;
	password: string;
};

const LoginForm = motion(forwardRef((props, ref:ForwardedRef<HTMLFormElement>) => {
	const dispatch = useAppDispatch();
	const [isLogin, setIsLogin] = useState(false);

	const {
		register,
		reset,
		handleSubmit,  
		formState: { errors }
	} = useForm<LoginType>();

  const onSubmit: SubmitHandler<LoginType> = () => {
		reset({
			email: "",
			password: ""
		});

		setIsLogin(true);
	}

	return (
			<form 
				ref={ref}
				onSubmit={handleSubmit(onSubmit)}
				onClick={(e) => e.stopPropagation()}
				className="modal-content gap-5 w-4/5 md:w-1/2 lg:w-1/3">
					<div className="relative pb-5">
						<h3 className="text-4xl font-semibold">Вход:</h3>
						<h4 className="text-2xl font-semibold">Заполните форму</h4>
						{isLogin && 
							<div className="text-lg absolute left-0" style={{bottom:"-5px"}}>
							Логин или пароль введены неверно</div>
						}
					</div>
					<div className="relative flex flex-col pb-4">
						<label>Email:</label>
						<input {...register("email", {required:true, pattern: /^([0-9A-Za-z\_\-\.]+)@(([A-Za-z\.]+))$/i})} />
						{errors.email && <span className="form-error">Не корректный Email адрес</span>}
					</div>
					<div className="relative flex flex-col pb-4">
						<label htmlFor="password">Пароль:</label>
						<input type="password" {...register("password", { required: true })} />
						{errors.password && <span className="form-error">Поле обязательно для заполнения</span>}
					</div>
					<div>
						<DefaultButton text="Войти" type="submit" className="mt-5"/>
						<p className="mt-1">Нет аккаунта?
						<span
							onClick={() => dispatch(setRegister())} 
							className="cursor-pointer ml-1 underline">
							Зарегистрируйтесь!
						</span>
						</p>
					</div>
				</form>
	);
}));

export default LoginForm;