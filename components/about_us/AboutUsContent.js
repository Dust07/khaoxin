import Image from "next/image"
import aboutStyles from "./AboutUs.module.scss"
import strength from "../../public/assets/strength.png"

function AboutUsContent() {
  return (
    <section className={`container ${aboutStyles.sectionAbout}`}>
      <div className={`${aboutStyles.history}`}>
        <h2 className={aboutStyles.h2Text}>Về Khaoxin</h2>
        <p>Năm 2018, sau những chuyến đi du lịch đến xứ sở của những loại trà, hai người bạn Nghĩa và Phát đã được trải nghiệm những hương vị trà sữa đầy mùi hương khác nhau của Đài Loan.Họ cực kì ấn tượng với các ly trà sữa thơm ngon cũng như quy trình làm việc, chế biến của những cửa hàng trà sữa tại đây.Chính vì thế, họ đã quyết định đem văn hóa ‘Trà sữa Takeaway’ cũng như quy trình vận hành và các công thức chế biến độc đáo, kì công của Đài Loan về với quê hương Việt Nam. Sự hoàn hảo, phong cách tối giản kết hợp với công nghệ hiện đại, nhưng vẫn đảm bảo chất lượng và tốc độ phục vụ ở mức tốt nhất, Khaoxin đến để nâng tầm hương mô hình trà sữa của Việt Nam.</p>
      </div>

      <div className={aboutStyles.slogan}>
        <div className={aboutStyles.slogan_desc}>
          <h2 className={aboutStyles.h2Text}>Khaoxin – Tử tế với khách hàng</h2>
          <p>
            Trong quá trình thưởng thức và học hỏi kinh nghiệm làm trà sữa tại Đài Loan, chúng tôi rất thích thú với hình ảnh những vị khách vui vẻ khi nhận được ly trà sữa yêu thích của mình. Và thế là, cái tên “Khaoxin” đã xuất hiện để khẳng định sứ mệnh của mô hình trà sữa của chúng tôi.
          </p>
          <p>
            + Chữ K tượng trưng cho ‘K’hách hàng của chúng tôi: ‘Kustomer is King’
            <br></br>
            + ‘haoxin’ (được chúng tôi khắc họa lại từ “好心“) mang ý nghĩa của sự “tử tế, tận tâm”. Thông điệp của Khaoxin: dù chuyện gì xảy ra, chúng tôi vẫn sẽ luôn đổi xử tử tế với khách hàng.
          </p>
        </div>
      </div>

      <div className={aboutStyles.vision}>
        <div>
          <h3>TẦM NHÌN</h3>
          <p>Trở thành một chuỗi cửa hàng trà sữa công nghệ cao. Chúng tôi luôn nhắm đến việc tối ưu hóa mọi thứ nhằm mang đến cho khách hàng những trải nghiệm trọn vẹn nhất. </p>
        </div>
        <div>
          <h3>SỨ MỆNH</h3>
          <p>Trà sữa Khaoxin ko chỉ đơn thuần là nơi phục vụ các loại thức uống, chúng tôi còn là nơi gắn kết tình yêu thương giữa người với người. Có một sự thật đơn giản rằng, khi kết nối với những người xung quanh, chúng ta đều sẽ cảm thấy vui vẻ, hạnh phúc, vị tha hơn. Không những thế, các nghiên cứu khoa học còn chứng minh mối liên hệ giữa các kết nối xã hội với cảm giác tích cực, sức khỏe và tuổi thọ của con người.<br></br>
            Chính vì vậy, thông điệp của chúng tôi chính là: ‘Spread love and happiness’.<br></br>
            Khaoxin mong muốn trở thành nguồn năng lực tích cực để biến một ngày của bạn trở nên ý nghĩa và trọn vẹn hơn.
          </p>
        </div>
      </div>

      <div>
        <h2 className={aboutStyles.h2Text}>SỰ KẾT NỐI</h2>
        <p>Tại Khaoxin, chúng tôi rất chú trọng đến những sự kết nối - từ sự kết nối giữa người nhân viên với những lá trà, cho đến cách chúng tôi đối xử với khách hàng. Mỗi ngày Khaoxin đều cố gắng hết mình để trở thành phiên bản tốt hơn của hôm qua.<br></br>
          Chúng tôi tin rằng làm việc có trách nhiệm và trung thực chính là yếu tố quan trọng nhất để có được lòng tin của khách hàng.<br></br>

          #KhaoxinMakeYourDay
        </p>
      </div>

      <div>
        <h2 className={aboutStyles.h2Text}>NGUYÊN LIỆU</h2>
        <p>Chúng tôi cam kết sử dụng nguồn trà chất lượng cao, được chọn lọc kĩ càng, kết hợp cách thức ủ trà lạnh theo tiêu chuẩn Đài Loan. Sau nhiều lần thử nghiệm, chúng tôi đã cho ra mắt những dòng sản phẩm mang một hương vị đặc trưng riêng, độc đáo. Trà ủ lạnh chứa rất ít caffeine sẽ giúp ngăn ngừa bệnh béo phì, cholesterol cao, tăng huyết áp,...
          <br></br>
          Trà sữa Khaoxin được áp dụng công thức ủ lạnh nhằm hạn chế caffeine nhưng vẫn đảm bảo độ đậm vị.
        </p>
      </div>

      <div className={aboutStyles.strengthContainer}>
        <div className={aboutStyles.strengthWrapper}>
          <Image src={strength} alt="Value and Strength" />
        </div>
      </div>
    </section>
  )
}

export default AboutUsContent