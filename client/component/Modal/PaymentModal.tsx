"use client"
import {useEffect, useRef, RefObject} from "react";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { hidePayment } from "@/store/features/paymentSlice";
import { IoCloseCircleOutline } from "react-icons/io5";
import "./Modal.scss";

function PaymentModal({name, age}: {name: string, age: number}) {
  const dispatch = useAppDispatch();
  const {visible} = useAppSelector(state => state.payment);
	const boxRef = useRef() as RefObject<HTMLDivElement>;

	useEffect(() => {
		let frame = document.createElement('iframe');
		frame.setAttribute('src', 'https://yoomoney.ru/quickpay/fundraise/button?billNumber=y8hiXQOrQts.230506&');
		frame.style.width = '100%';
		frame.style.height = '100%';
		if(boxRef.current) boxRef.current.appendChild(frame);

		return () => {
			if(boxRef.current) boxRef.current.innerHTML = '';
		}
	}, [visible]);

  if (visible) {
    return ( 
      <div 
        onClick={() => {dispatch(hidePayment())}}
        className="modal-container">
         <div className="cursor-pointer absolute top-0 right-0 text-3xl text-primary p-2">
          <IoCloseCircleOutline onClick={() => dispatch(hidePayment())} />
        </div>
        <div 
          onClick={(e) => {e.stopPropagation()}}
          className="modal-content gap-2 w-4/5 md:w-1/2 lg:w-1/3">
          <h3 className="text-4xl font-semibold">Внимание!!!</h3>
          <h4 className="text-xl">Сервис предоставляет платный доступ к контактам моделей, разместивших анкеты, на нашем сайте!</h4>
          <h4 className="text-xl">Стоимость одного контакта 
            <span className="font-semibold ml-2">2800 рублей</span>
          </h4>
          <h4 className="text-xl">Получить контакты 
            <span className="font-semibold ml-2">{name} - {age} года</span>
          </h4>
          <div className="frameBox" ref={boxRef}></div>
        </div>
      </div>
    );
  }
}

export default PaymentModal;