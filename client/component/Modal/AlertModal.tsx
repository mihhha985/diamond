"use client";
import {useState} from "react";
import {useAppDispatch, useAppSelector} from "@/store/hooks";
import {hide} from "@/store/features/alertsSlice";
import { IoCloseCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import "./Modal.scss";

const variant = {
	hidden: { opacity: 0, scale: 0.1 },
	visible: { opacity: 1, scale: 1 }
}

function AlertModal() {
  const {visible, text} = useAppSelector((state) => state.modals);
	const [show, setShow]= useState<boolean>(false);
  const dispatch = useAppDispatch();

	const hiddenModal = () => {
		setShow(true);
		setTimeout(() => {
			setShow(false);
			dispatch(hide())
		}, 400)
	}
	
  if(visible){
    return ( 
				<motion.div
					layout
					onClick={hiddenModal}
					className="modal-container">
					<div className="cursor-pointer absolute top-0 right-0 text-3xl text-primary p-2">
						<IoCloseCircleOutline onClick={() => dispatch(hide())} />
					</div>
						<motion.div
							initial="hidden"
							animate={show ? "hidden" : "visible"}
							transition={{duration: 0.4}}
							variants={variant}
							onClick={(e) => e.stopPropagation()}
							className="modal-content w-4/5 md:w-1/2 lg:w-1/3">
							<h4 className="text-2xl text-primary text-center">Оповещение!</h4>
							<p className="text-lg text-primary text-center">{text}</p>
						</motion.div>
				</motion.div>
    );
  }
}

export default AlertModal;