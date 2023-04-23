 import headerStyles from '../styles/Header.module.css';

 const Header = () => {
    return (
        <div>
           <h1 className={headerStyles.title}>
            <span>WebDev</span> News </h1> 

            <p className={headerStyles.description}>keep updating your team and be updated yourself</p>
        </div>
    )
 }

export default Header