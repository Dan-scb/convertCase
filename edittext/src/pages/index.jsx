
import Paper from "../components/Paper"
import styles from '../styles/Style.module.css'
import Instructions from "../components/Instructions"
import Head from 'next/head'
export default props => {
   
    return (
        <>
        <Head>
            <title>Convert Case - Online format & edit text</title>
            <meta name="description" content="Transform and manipulate texts"/>
        </Head>
        <nav className={styles.nav}><h1>Case Convert Online</h1></nav>
        <div className={styles.color}>  
            <Paper />  
        </div>
        <section>
        <Instructions />
        </section>
        <footer className={styles.footer}>
            <span>
                Copyright © 2022. All Rights Reserved.
            </span>
            <div className={styles.contact}>
            <img src="https://img.icons8.com/color/48/000000/apple-mail.png"/>  <a href="mailto:daniel-silva70@hotmail.com">Contact</a>
            </div>
        </footer>
       </>
    )
}