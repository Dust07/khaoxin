import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import khaoxinLogo from "../../../public/assets/logo-icon.svg"
import headerStyles from "./Header.module.scss"
import { socialList } from "../../../database/icon"

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
  const [currentPage, setCurrentPage] = useState(0);

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  const handleChangePage = (url) => {
    const pageShowing = navItem.find(item => item.url === url)
    setCurrentPage(pageShowing.id)
  }

  useEffect(() => {
    router.events.on('routeChangeComplete', handleChangePage)
  }, [])

  useEffect(() => {
    router.events.on('routeChangeStart', handleChangePage)
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });


  return (
    <nav className={`navbar navbar-expand-lg navbar-light fixed-top ${headerStyles.navbarBackground}`}>
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {navItem.map(item => {
              return (
                <li key={item.id} className="nav-item">
                  <Link href={item.url}>
                    <a className={`nav-link ${currentPage === item.id ? "active" : ''}  `} aria-current="page" >{item.name}</a>
                  </Link>
                </li>
              )
            })}

          </ul>
        </div>
        <Link href="/">
          <div className={headerStyles.brandLogo}>
            <Image width={50} height={50} src={khaoxinLogo} alt="khaoxin-logo" />
            <span className={headerStyles.brandText}>Khaoxin</span>
          </div>
        </Link>
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