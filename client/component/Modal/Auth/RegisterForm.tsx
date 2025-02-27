"use client"
import {useState, forwardRef, ForwardedRef} from "react";
import {setLogin} from "@/store/features/profileSlice";
import {useAppDispatch} from "@/store/hooks";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";
import DefaultButton from "@/component/UI/defaultButton/defaultButton";

type RegisterType = {
	email: string;
	password: string;
	confirm: string;
};

const RegisterForm = motion(forwardRef((props, ref:ForwardedRef<HTMLFormElement>) => {
	const dispatch = useAppDispatch();
	const [showConfirm, setShowConfirm] = useState(false);
	const [error, setError] = useState(false);
	const {
		register,
		reset,
		getValues,
		handleSubmit,  
		formState: { errors }
	} = useForm<RegisterType>();

  const onSubmit: SubmitHandler<RegisterType> = (data) => {

		reset({
			email: "",
			password: "",
			confirm: ""
		});

		setShowConfirm(true);
	}

	const confirmPassword = (value: string) => {
		const password = getValues("password");
		return password === value;
	}

	return (
		<>
			{showConfirm
				?
					<div
						onClick={(e) => e.stopPropagation()} 
						className="modal-content gap-3 sm:gap-5 w-4/5 md:w-1/2 lg:w-1/3">
							<h3 className="text-4xl font-semibold">Подтвердите Email:</h3>
							<h4 className="text-xl font-semibold">
								{!error 
									? 'Введите число которое пришло на ваш Email'
									: 'Вы ввели неверный код подтверждения!!!'
								}
							</h4>
							<div className="flex gap-5">
								<input type="text" />
								<DefaultButton text="Подтвердить" onClick={() => setError(true)} />
							</div>
					</div> 
				: 
				<form
					ref={ref}
					onSubmit={handleSubmit(onSubmit)}
					onClick={(e) => e.stopPropagation()}
					className="modal-content gap-3 sm:gap-5 w-4/5 md:w-1/2 lg:w-1/3">
					<h3 className="text-4xl font-semibold">Регистрация:</h3>
					<h4 className="text-2xl font-semibold">Заполните форму</h4>
					<div className="relative flex flex-col pb-3">
						<label htmlFor="email">Email:</label>
						<input type="text" id="email" {...register("email", {required:true, pattern: /^([0-9A-Za-z\_\-\.]+)@(([A-Za-z\.]+))$/i})} />
						{errors.password?.type === 'required' && <span className="form-error">Поле обязательно для заполнения</span>}
						{errors.email?.type === 'email' && <span className="form-error">Не корректный Email адрес</span>}
					</div>
					<div className="relative flex flex-col pb-3">
						<label htmlFor="password">Пароль:</label>
						<input type="password" id="password" {...register("password", {required:true, maxLength: 20, minLength:5})} />
						{errors.password?.type === 'required' && <span className="form-error">Поле обязательно для заполнения</span>}
						{errors.password?.type === 'minLength' && <span className="form-error">Минимальная длина паролля 5 символов</span>}
						{errors.password?.type === 'maxLength' && <span className="form-error">Максимальная длина паролля 20 символов</span>}
					</div>
					<div className="relative flex flex-col pb-3">
						<label htmlFor="confirm">Подтвердить пароль:</label>
						<input type="password" id="confirm" {...register("confirm", {required:true, validate: confirmPassword})} />
						{errors.confirm?.type === 'required' && <span className="form-error">Поле обязательно для заполнения</span>}
						{errors.confirm?.type === 'validate' && <span className="form-error">Пароли не совпадают</span>}
					</div>
					<div>
						<DefaultButton text="Регистрация" type="submit" className="mt-5" />
						<p className="mt-1">Есть аккаунт?
							<span 
								onClick={() => dispatch(setLogin())}
								className="cursor-pointer ml-1 underline">
								Войдите!
							</span>
						</p>
					</div>
				</form>
			}
		</>
	);
}));

export default RegisterForm;