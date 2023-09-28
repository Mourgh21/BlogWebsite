import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

export const metadata = {
  title: "Web Blog ",
  description: "This is the about page",
};


const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgcontainer}>
        <Image src='https://images.pexels.com/photos/6177677/pexels-photo-6177677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
        fill={true} alt='' className={styles.img}/>
        <div className={styles.imgtext}>
          <h1 className={styles.imgtitle}>Digital Storytellers</h1>
          <h2 className={styles.imgdesc}>Handcrafting award winning digital experiences</h2>
        </div>
      </div>
            <div className={styles.textcontainer}>
                <div className={styles.item}>
                  <h2 className={styles.title}>Who Are We?</h2>
                  <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                     quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
                     suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
                     eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
                     beatae, a suscipit eos. Animi quibusdam cum omnis officiis
                    <br />
                    <br />
                     voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
                     adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
                     esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
                     officiis voluptatum quo ea eveniet?</p>
                </div>
                <div className={styles.item}>
                   <h2 className={styles.title}>What We Do?</h2>
                  <p className={styles.desc}>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                     quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
                     suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
                     eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
                     Creative Illustrations
                    <br />
                    <br /> - Dynamic Websites
                    <br />
                    <br /> - Fast and Handy
                    <br />
                    <br /> - Mobile Apps
                  </p>
                  <button className={styles.button}>See our works</button>
                </div>


            </div>

    </div>
  )
}

export default About