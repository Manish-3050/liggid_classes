"use client"
import { useState } from 'react';
import styles from './navbar.module.css'
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const navigate =(route: string)=>{
    router.push(route);
  }


  return (
    <nav className={styles.nav}>
      <a href="" className={styles.logo}>Logo</a>
      <div className={styles.hamburgerMenu} onClick={toggleMenu}>
        ☰
      </div>
      <div className={`${styles.cntrNav} ${isMenuOpen ? styles.active : ''}`}>
        <a onClick={()=>navigate("/")}>Home</a>
        <a onClick={()=>navigate("/")}>Products</a>
        <a onClick={()=>navigate("/about")}>About-us</a>
        <a onClick={()=>navigate("/contact-us")}>Contact-us</a>
      </div>
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.active : ''}`}>
        <a onClick={()=>{navigate("/"),toggleMenu()}}>Home</a>
        <a onClick={()=>{navigate("/"),toggleMenu()}}>Products</a>
        <a onClick={()=>{navigate("/about"),toggleMenu()}}>About-us</a>
        <a onClick={()=>{navigate("/contact-us"),toggleMenu()}}>Contact-us</a>
      </div>
    </nav>
  );
};

export default Navbar;
