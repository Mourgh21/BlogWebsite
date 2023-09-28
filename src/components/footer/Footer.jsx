import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'


const Footer = () => {
  return (
    <div className={styles.container} >
        <div >2024, Owned By Mourgh21</div>
        <div className={styles.social}>
         <Image src="/facebook.png" width={15} height={15} className={styles.icon} alt="Abdo Dev Facebook Account" />
         <Image src="/instagram.png" width={15} height={15} className={styles.icon} alt="Abdo Dev instagram Account" />
         <Image src="/linkdin.png" width={15} height={15} className={styles.icon}  alt="Abdo Dev" />
        </div>
    </div>
  )
}

export default Footer