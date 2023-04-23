import React from 'react'
import styles from '../styles/Layout.module.css'
import Nav from '../components/Nav'
import Header from '../components/Header';
import Meta from './Meta';


type Props = {
    children: string | JSX.Element | JSX.Element[] 
  }
const Layout =  ({ children } : Props) =>  {
    return (
        <>
        <Meta/>
        <Nav/>
        <div className={styles.container}>
            <main className={styles.main}>
                <Header/>
                 { children }
                 
            </main>
        </div>
        </>
    )
}
export default Layout;