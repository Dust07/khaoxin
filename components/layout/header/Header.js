import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import khaoxinLogo from "../../../public/assets/logo-icon.svg"
import headerStyles from "./Header.module.scss"
import { socialList } from "../../../database/icon"

function Header() {
  const [clientWindowHeight, setClientWindowHeight] = useState("");

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
    console.log(clientWindowHeight)
  };

  useEffect(() => {
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
            <li className="nav-item">
              <Link href="about-us">
                <a className="nav-link active" aria-current="page" >About us</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/menu">
                <a className="nav-link">Menu</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#">
                <a className="nav-link">Locations</a>
              </Link>
            </li>
          </ul>
        </div>
        {/* <div className={headerStyles.brandLogo}>
          <Image width={70} height={70} src={khaoxinLogoText} alt="khaoxin-logo" />
        </div> */}
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