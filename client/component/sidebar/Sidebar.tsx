"use client";
import { MdEmail } from "react-icons/md";
import { RiStarSmileFill, RiShoppingCart2Fill } from "react-icons/ri";
import {FaComments, FaUserLarge, FaHeart} from "react-icons/fa6";
import {useAppDispatch} from "@/store/hooks";
import styles from './Sidebar.module.scss';
import { show } from "@/store/features/alertsSlice";
import { showProfile } from "@/store/features/profileSlice";
import {showMailer} from "@/store/features/mailerSlice";
import SideBarText from "@/config/translate-catalog";

function Sidebar() {
  const dispatch = useAppDispatch();
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

  return ( 
    <div className={styles.sidebar}>
      <div 
        onMouseMove={(e) => {showHint(e)}}
        onMouseOut={(e) => {hideHint(e)}}
        onClick={() => dispatch(show({
          text:SideBarText.favorites.ru,
          language:'ru'
        }))}
        className={styles.item}>
        <RiStarSmileFill />
        <p>Избранные</p>
      </div>
      <div
        onMouseMove={(e) => {showHint(e)}}
        onMouseOut={(e) => {hideHint(e)}} 
        onClick={() => dispatch(show({
          text:SideBarText.likes.ru,
          language:'ru'
        }))}
        className={styles.item}>
        <FaHeart />
        <p>Понравившиеся</p>
      </div>
      <div 
        onMouseMove={(e) => {showHint(e)}}
        onMouseOut={(e) => {hideHint(e)}}
        onClick={() => dispatch(show({
          text:SideBarText.order.ru,
          language:'ru'
        }))}
        className={styles.item}>
        <RiShoppingCart2Fill />
        <p>Мои заказы</p>
      </div>
      <div 
        onMouseMove={(e) => {showHint(e)}}
        onMouseOut={(e) => {hideHint(e)}}
        onClick={() => dispatch(show({
          text:SideBarText.message.ru,
          language:'ru'
        }))}
        className={styles.item}>
        <FaComments />
        <p>Мои сообщения</p>
      </div>
      <div 
        onMouseMove={(e) => {showHint(e)}}
        onMouseOut={(e) => {hideHint(e)}}
        onClick={() => dispatch(showProfile())}
        className={styles.item}>
        <FaUserLarge />
        <p>Профиль</p>
      </div>
      <div 
        onMouseMove={(e) => {showHint(e)}}
        onMouseOut={(e) => {hideHint(e)}}
        onClick={() => dispatch(showMailer())}
        className={styles.item}>
        <MdEmail />
        <p >Остались вопросы?<br /> Напишите нам...</p>
      </div>
    </div>
  );
}

export default Sidebar;