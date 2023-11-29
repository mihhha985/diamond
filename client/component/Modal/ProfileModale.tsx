"use client";
import {useAppDispatch, useAppSelector} from "@/store/hooks";
import {login, register, hideProfile} from "@/store/features/profileSlice";
import { IoCloseCircleOutline } from "react-icons/io5";
import "./Modal.scss";

function ProfileModal() {
  const dispatch = useAppDispatch();
  const {isLogin, visible} = useAppSelector(state => state.profile);

  if(visible){
    return ( 
      <>
      <div 
        onClick={() => dispatch(hideProfile())}
        className="modal-container">
        <div className="cursor-pointer absolute top-0 right-0 text-3xl text-primary p-2">
          <IoCloseCircleOutline onClick={() => dispatch(hideProfile())} />
        </div>
        {isLogin 
          ? 
          <div 
            onClick={(e) => e.stopPropagation()}
            className="modal-content gap-5 w-4/5 md:w-1/2 lg:w-1/3">
            <h4 className="text-2xl font-semibold">Заполните форму</h4>
            <div className="flex flex-col pb-2">
              <label htmlFor="email">Email:</label>
              <input type="text" id="email" />
            </div>
            <div className="flex flex-col pb-2">
              <label htmlFor="password">Пароль:</label>
              <input type="password" id="password"  />
            </div>
            <div>
              <button type="button">Вход</button>
              <p className="mt-1">Нет аккаунта?
                <span
                  onClick={() => dispatch(register())} 
                  className="cursor-pointer ml-1 underline">
                  Зарегистрируйтесь!
                </span>
              </p>
            </div>
          </div>
          :
          <div 
          onClick={(e) => e.stopPropagation()}
          className="modal-content gap-3 sm:gap-5 w-4/5 md:w-1/2 lg:w-1/3">
            <h4 className="text-2xl font-semibold">Заполните форму</h4>
            <div className="flex flex-col pb-2">
              <label htmlFor="email">Email:</label>
              <input type="text" id="email"/>
            </div>
            <div className="flex flex-col pb-2">
              <label htmlFor="password">Пароль:</label>
              <input type="password" id="password" />
            </div>
            <div className="flex flex-col pb-2">
              <label htmlFor="confirm">Подтвердить пароль:</label>
              <input type="password" id="confirm" />
            </div>
            <div>
              <button type="button" className="mt-5">Регистрация</button>
              <p className="mt-1">Есть аккаунт?
              <span 
                onClick={() => dispatch(login())}
                className="cursor-pointer ml-1 underline">
                Войдите!
              </span>
            </p>
            </div>
          </div>
        }      
      </div>
      </>
    );
  }
}

export default ProfileModal;