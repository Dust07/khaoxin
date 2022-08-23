import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import { socialList } from "../../../database/icon"
import headerStyles from "./Header.module.scss"
import khaoxinLogo from "../../../public/assets/logo-icon.svg"
import barIcon from "../../../public/assets/bar.svg"

const navItem = [
  {
    id: 1,
    name: "Home",
    url: "/"
  },
  {
    id: 2,
    name: "About us",
    url: "/about-us"
  },
  {
    id: 3,
    name: "Menu",
    url: "/menu"
  },
  {
    id: 4,
    name: "Location",
    url: "/location"
  },
]

function Header() {
  const router = useRouter()

  const [clientWindowHeight, setClientWindowHeight] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showNavbar, setShowNavbar] = useState(false);
  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  const toggleShowNav = () => {
    setShowNavbar(prevValue => !prevValue)
    console.log(showNavbar)
  }

  useEffect(() => {
    const pageShowing = navItem.find(item => item.url === router.asPath)
    setCurrentPage(pageShowing.id)
  }, [router.asPath])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <nav className={headerStyles.navbarBackground}>
      <Link href="/">
        <div className={headerStyles.brandLogo}>
          <Image width={50} height={50} src={khaoxinLogo} alt="khaoxin-logo" />
          <span className={headerStyles.brandText}>Khaoxin</span>
        </div>
      </Link>
      <div className={`${headerStyles.navWrapper}`}>
        <button className={`${headerStyles.toggleBtn}`} onClick={toggleShowNav}>
          <Image width={20} height={20} src={barIcon} className={showNavbar ? headerStyles.rotate : headerStyles.rotateRevert} alt="navbar" />
        </button>
        <ul className={`${headerStyles.navList} ${showNavbar ? headerStyles.showNav : ''}`}>
          {navItem.map(item => {
            return (
              <li key={item.id} className={` ${currentPage === item.id ? headerStyles.selected : ''}`}>
                <Link href={item.url}>
                  <a className={`${currentPage === item.id ? "active" : ''}  `} aria-current="page" >{item.name}</a>
                </Link>
              </li>
            )
          })}
        </ul>
        <div className={headerStyles.socialWrapper}>
          {socialList.map((socialLogo, index) => {
            return <Image key={index} width={20} height={20} src={socialLogo.image} alt={`${socialLogo.name}-logo`} />
          })}
        </div>
      </div>
    </nav>
  )
}

export default Header