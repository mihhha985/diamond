"use client";
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation'
import styles from './Header.module.scss';
import cn from 'classnames';

function Header() {
  const pathname = usePathname()

  return ( 
    <header className={styles.header}>

      <Link href="/" className={cn({[styles.active]: pathname === '/'})}>Главная</Link>
      <Link href="/catalog" className={cn({[styles.active]: pathname === '/catalog'})}>Каталог моделей</Link>
      <Link href="/anketa" className={cn({[styles.active]: pathname === '/anketa'})}>Добавить анкету</Link>
      <div className={styles.logoBox}>
        <Image width={50} height={50} src="/favicon.png" alt="logo" />
        <Link href="/" className={styles.logo}>Diamond Club</Link>
        <Image width={50} height={50} src="/favicon.png" alt="logo" />
      </div>
      <Image src="/favicon.png" width={50} height={50} alt="diamond" className={styles.mobileRightIcon} />
      <Image src="/favicon.png" width={50} height={50} alt="diamond" className={styles.mobileLeftIcon} />
    </header>
   );
}

export default Header;