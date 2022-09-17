import heroStyles from "./Hero.module.scss"

function Hero() {
  return (
    <section className={heroStyles.sectionHero}>
      <div className={` ${heroStyles.backgroundDimmer}`}>
        <div className={`container ${heroStyles.sectionContainer}`}>
          <div className={heroStyles.heroTitleWrapper}>
            <h1 className={heroStyles.h1Text}>An urban milktea inspired by Taiwan</h1>
          </div>
          <div className={heroStyles.heroTextWrapper}>
            <p>Taipei is the city with the largest number of Take Away milktea shops in the world and Taiwan has been emerging on the world stage of specialty milkteas. High quality, perfectionism, minimalism, quy trình quản lý, làm việc cũng như cách thức chế biến theo chuẩn Đài Loan are some of the characteristics that inspired the creation of Khaoxin.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero