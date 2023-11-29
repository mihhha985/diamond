"use client";
import {useAppDispatch, useAppSelector} from "@/store/hooks";
import {hide} from "@/store/features/alertsSlice";
import { IoCloseCircleOutline } from "react-icons/io5";
import "./Modal.scss";

function AlertModal() {
  const {visible, text} = useAppSelector((state) => state.modals);
  const dispatch = useAppDispatch();

  if(visible){
    return ( 
      <div
        onClick={() => dispatch(hide())} 
        className="modal-container">
        <div className="cursor-pointer absolute top-0 right-0 text-3xl text-primary p-2">
          <IoCloseCircleOutline onClick={() => dispatch(hide())} />
        </div>
        <div 
          onClick={(e) => e.stopPropagation()}
          className="modal-content w-4/5 md:w-1/2 lg:w-1/3">
          <h4 className="text-2xl text-primary text-center">Оповещение!</h4>
          <p className="text-lg text-primary text-center">{text}</p>
        </div>
      </div>
    );
  }
}

export default AlertModal;