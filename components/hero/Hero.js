import heroStyles from "./Hero.module.scss"

function Hero() {
  return (
    <section className={heroStyles.sectionHero}>
      <div className={` ${heroStyles.backgroundDimmer}`}>
        <div className={`container ${heroStyles.sectionContainer}`}>
          <div className={heroStyles.heroTitleWrapper}>
            <h1 className={heroStyles.h1Text}>Khaoxin - Tiệm trà sữa mang âm hưởng Đài Loan</h1>
          </div>
          <div className={heroStyles.heroTextWrapper}>
            <p>Đài Loan là thành phố nổi tiếng với số lượng cửa hàng trà sữa takeaway nhiều nhất trên thế giới. Chất lượng cao, phong cách tối giản, quy trình quản lý, cách làm việc chuyên nghiệp cũng như cách thức chế biến theo tiêu chuẩn Đài Loan là những tố chất tạo nên hương vị đậm đà của ly trà sữa Khaoxin.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero