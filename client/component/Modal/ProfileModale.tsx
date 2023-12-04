"use client";
import LoginForm from "./Auth/LoginForm";
import RegisterForm from "./Auth/RegisterForm";
import {useAppDispatch, useAppSelector} from "@/store/hooks";
import {hideProfile} from "@/store/features/profileSlice";
import {IoCloseCircleOutline} from "react-icons/io5";
import "./Modal.scss";

type RegisterType = {
	email: string;
	password: string;
	confirm: string;
};

function ProfileModal() {
  const dispatch = useAppDispatch();
  const {isLogin, visible} = useAppSelector(state => state.profile);

  if(visible){
    return ( 
      <div 
        onClick={() => dispatch(hideProfile())}
        className="modal-container">
        <div className="cursor-pointer absolute top-0 right-0 text-3xl text-primary p-2">
          <IoCloseCircleOutline onClick={() => dispatch(hideProfile())} />
        </div>
        {isLogin 
          ? <LoginForm />
          : <RegisterForm />
        }      
      </div>
    );
  }
}

export default ProfileModal;