"use client";
import {useState} from "react";
import LoginForm from "./Auth/LoginForm";
import RegisterForm from "./Auth/RegisterForm";
import {useAppDispatch, useAppSelector} from "@/store/hooks";
import {hideProfile} from "@/store/features/profileSlice";
import {IoCloseCircleOutline} from "react-icons/io5";
import "./Modal.scss";

const variant = {
	hidden: { opacity: 0, scale: 0.1 },
	visible: { opacity: 1, scale: 1 }
}

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
		}, 400)
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
          ?
            <LoginForm 
              initial="hidden"
              animate={isHidden ? "hidden" : "visible"}
              transition={{duration: 0.4}}
              variants={variant}
            />  
          :
            <RegisterForm 
              initial="hidden"
              animate={isHidden ? "hidden" : "visible"}
              transition={{duration: 0.4}}
              variants={variant}
            />
        } 
      </div>
    );
  }
}

export default ProfileModal;