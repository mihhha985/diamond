import Image from 'next/image';
import diamond from '@/public/diamond/1.png';
import styles from './DiamondBox.module.scss';

function DiamondBox() {
  return ( 
    <div className={styles.box}>
      <div className="absolute item">
        <Image className="relative z-20" src={diamond} alt="diamond" />
        <div className="absolute top-0 left-0 w-full h-full z-10 diamond-shadow"></div>
      </div>
      <div className="absolute item">
        <Image className="relative z-20" src={diamond} alt="diamond" />
        <div className="absolute top-0 left-0 w-full h-full z-10 diamond-shadow"></div>
      </div>
      <div className="absolute item">
        <Image className="relative z-20" src={diamond} alt="diamond" priority={true}/>
        <div className="absolute top-0 left-0 w-full h-full z-10 diamond-shadow"></div>
      </div>
      <div className="absolute item">
        <Image className="relative z-20" src={diamond} alt="diamond" />
        <div className="absolute top-0 left-0 w-full h-full z-10 diamond-shadow"></div>
      </div>
      <div className="absolute item">
        <Image className="relative z-20" src={diamond} alt="diamond" />
        <div className="absolute top-0 left-0 w-full h-full z-10 diamond-shadow"></div>
      </div>
      <div className="absolute item">
        <Image className="relative z-20" src={diamond} alt="diamond" />
        <div className="absolute top-0 left-0 w-full h-full z-10 diamond-shadow"></div>
      </div>
      <div className="absolute item">
        <Image className="relative z-20" src={diamond} alt="diamond" />
        <div className="absolute top-0 left-0 w-full h-full z-10 diamond-shadow"></div>
      </div>
    </div>
  );
}

export default DiamondBox;