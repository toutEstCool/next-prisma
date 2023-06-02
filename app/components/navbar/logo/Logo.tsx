'use client';
import styles from './index.module.scss';
import Image from "next/image";

const Logo: React.FC = (): JSX.Element => {
  return (
    <Image 
      className={styles.logoImg} 
      src='/images/logo.png' 
      alt='Airbnb logo' 
      width={100} 
      height={100}
      title='Airbnb logo'
    />
  )
}

export default Logo
