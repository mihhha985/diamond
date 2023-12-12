"use client";
import {useState} from "react";
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
	const [isHidden, setIsHidden] = useState<boolean>(false);

	const hiddenModal = () => {
		setIsHidden(true);
		setTimeout(() => {
			setIsHidden(false);
			dispatch(hideProfile())
		},0)
	}

  if(visible){
    return ( 
      <div 
        onClick={hiddenModal}
        className="modal-container">
        <div className="cursor-pointer absolute top-0 right-0 text-3xl text-primary p-2">
          <IoCloseCircleOutline onClick={hiddenModal} />
        </div>
        {isLogin 
          ? <LoginForm show={isHidden} />
          : <RegisterForm />
        }      
      </div>
    );
  }
}

export default ProfileModal;