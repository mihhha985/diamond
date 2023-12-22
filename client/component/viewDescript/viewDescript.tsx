"use client";
import { useEffect, useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa6";
import { BiMessageRounded } from "react-icons/bi";
import { Contact } from "@/types/contactType";
import {TypeHair, TypeFigures } from "@/config/params";
import {  useAppDispatch } from "@/store/hooks";
import {show} from "@/store/features/alertsSlice";
import { showPayment } from "@/store/features/paymentSlice";
import AlertModal from "../Modal/AlertModal";
import PaymentModal from "../Modal/PaymentModal";
import translate from "@/config/translate-view";
import DefaultButton from "../UI/defaultButton/defaultButton";
import styles from './viewDescript.module.css';

function ViewDescript({user}: {user: Contact}) {
  const dispatch = useAppDispatch();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = localStorage.getItem('favorites');
    const ids = favorites ? favorites.split(',') : [];
    const index = ids.indexOf(user.id.toString());
    if(index === -1){
      setIsFavorite(false);
    }else{
      setIsFavorite(true);
    }
  }, [user.id]);

  const showHint = (e:React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const hint = el.querySelector('p') as HTMLParagraphElement;
    hint.style.display = 'block';
  }

  const hideHint = (e:React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const hint = el.querySelector('p') as HTMLParagraphElement;
    hint.style.display = 'none';
  }

  const getHairColor = (id: number):string => {
    let item = TypeHair.find((item) => item.id === id) as {id: number, value: string} | undefined;
    if (item === undefined) {
      return 'Не указано';
    }else{
      return item.value;
    }
  }

  const getTypeFigure = (id: number):string => {
    let item = TypeFigures.find((item) => item.id === id) as {id: number, value: string} | undefined;
    if (item === undefined) {
      return 'Не указано';
    }else{
      return item.value;
    }
  }

  const toggleFavorites = (e:React.MouseEvent<HTMLDivElement>, id:number) => {
    const favorites = localStorage.getItem('favorites');
    const ids = favorites ? favorites.split(',') : [];
    const index = ids.indexOf(user.id.toString());

    if(!isFavorite){
      ids.push(id.toString());
      setIsFavorite(true);
      dispatch(show({
        text: 'Пользователь добавлен в понравившиеся!', 
        language: 'ru'
      }))
    }else{
      ids.splice(index, 1);
      setIsFavorite(false);
      dispatch(show({
        text: 'Пользователь удалён из понравившихся!', 
        language: 'ru'
      }));
    }

    localStorage.setItem('favorites', ids.join(','));
		const el = e.currentTarget;
    const hint = el.querySelector('p') as HTMLParagraphElement;
    hint.style.display = 'none';
  }

  return ( 
    <>
    <div className={styles.viewContainer}>
        <div className="text-primary border-b border-primary pb-2 relative">
          <div className="text-2xl sm:text-4xl">{user.firstName}</div>
          <div className="text-xl sm:text-2xl">Возраст: {user.description.age} лет</div>
          <div className="absolute top-5 right-4 cursor-pointer flex gap-5">
            <div 
              onMouseMove={(e) => {showHint(e)}}
              onMouseOut={(e) => {hideHint(e)}}
              onClick={() => {dispatch(show({
                text: translate.message.ru, 
                language: 'ru'
              }))}}
              className="relative">
              <BiMessageRounded size={32} className="opacity-75 hover:opacity-100 transition-opacity"/>
              <p style={{whiteSpace: 'nowrap', top: "-40px"}}
              className="hidden absolute right-0 p-2 rounded bg-primary text-secondary-300 text-sm">
              Написать сообщение</p>
            </div>
            <div 
              onMouseMove={(e) => {showHint(e)}}
              onMouseOut={(e) => {hideHint(e)}}
              onClick={e => {toggleFavorites(e, user.id)}}
              className="relative">
              {
                !isFavorite
                ? <FaRegHeart size={32} className="opacity-75 hover:opacity-100 transition-opacity"/>
                : <FaHeart size={32} className="opacity-75 hover:opacity-100 transition-opacity"/>
              }
              <p style={{whiteSpace: 'nowrap', top: "-40px"}}
              className="hidden absolute right-0 p-2 rounded bg-primary text-secondary-300 text-sm">
              {!isFavorite
                ? 'Добавить в понравившиеся'
                : 'Удалить из понравившихся'
              } 
              </p>
            </div>
          </div>
        </div>
        <div className="border-b border-primary pb-2">
          <h4 className={styles.headline}>Параметры:</h4>
          <div className="grid grid-cols-2 gap-2">
            <div className={styles.text}>Рост: {user.description.height} см</div>
            <div className={styles.text}>Вес: {user.description.weight} кг</div>
            <div className={styles.text}>Грудь: {user.description.cupSize} размер</div>
            <div className={styles.text}>Цвет волос: {getHairColor(user.description.hairColor)}</div>
            <div className={styles.text}>Тип фигуры: {getTypeFigure(user.description.typeFigure)}</div>
            <div className={styles.text}>
              <span>Размеры: </span>    
              <span>---</span>  
            </div>
          </div>
        </div>
        <div className="mt-2 sm:mt-5">
          <h4 className={styles.headline}>О себе:</h4>
          <div className="text-lg sm:text-xl bg-primary rounded-md p-2 w-full xl:w-3/4 mb-5">
            <p className="text-secondary-200">{user.about}</p>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row gap-2 w-full mt-auto whitespace-nowrap">
          <DefaultButton
            onClick={() => {dispatch(showPayment())}} 
            className={styles.btn}
            text="Получить контакты"
            type="button" 
          />
          <DefaultButton
            onClick={() => {dispatch(show({
              text: translate.transfer.ru,
              language: 'ru'
            }))}} 
            className={styles.btn}
            text="Оплатить трансфер"
            type="button"
           />
          <DefaultButton
            onClick={() => {dispatch(show({
              text: translate.order.ru,
              language: 'ru'
            }))}}
            className={styles.btn}
            text="Заказать цветы"
            type="button" 
          />
        </div>
      </div>
      <AlertModal />
      <PaymentModal name={user.firstName} age={user.description.age}/>
    </> 
  );
}

export default ViewDescript;