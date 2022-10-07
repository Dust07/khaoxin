import Image from "next/image"
import aboutStyles from "./AboutUs.module.scss"
import strength from "../../public/assets/strength.png"

function AboutUsContent() {
  return (
    <section className={`container ${aboutStyles.sectionAbout}`}>
      <div className={`${aboutStyles.history}`}>
        <h2 className={aboutStyles.h2Text}>Our History</h2>
        <p>In 2020, after several trips to Taiwan, 2 friend Nghia and Phat dã thưởng thức các quán trà sữa Take Away. Họ đã rất thích thú với những ly trà sữa thơm ngon và cũng rất ấn tượng với quy trình àm việc tại đây. This is the reason, they decided to create a milktea shop that would bring the Take Away culture, cũng như quy trình vận hành, công thức chế biến đặc biệt kì công theo chuẩn Đài Loan to VietNam. Perfectionism, minimalism and technological nhưng vẫn đảm bảo high quality và speed, Khaoxin has arrived to revolutionize the model of milktea shops in the country.</p>
      </div>

      <div className={aboutStyles.slogan}>
        <div className={aboutStyles.slogan_desc}>
          <h2 className={aboutStyles.h2Text}>Khaoxin – Tử tế với khách hàng</h2>
          <p>
            Chúng tôi rất ấn tượng với sản phẩm và quy trình vận hành cũng như những nét đặc trưng tại đây, nên đã ngỏ lời hợp tác. May mắn thay, chúng tôi đã gặp Mr.Zho và Ms.Yu, họ đã ân cần, tận tâm hướng dẫn, giúp đỡ rất nhiều. Và có 1 điểm ở họ mà chúng tôi rất thích, đó là tiêu chí làm dịch vụ của họ là đối xử với khách hàng như “king”.
          </p>
          <br></br>
          <p>
            Và từ đây chúng tôi tạo ra cái tên “Khaoxin”
            <br></br>
            + Chữ K tượng trưng cho ‘K’hách hàng của chúng tôi: ‘Kustomer is King’
            <br></br>
            + ‘haoxin’ (được chúng tôi khắc họa lại từ “好心“) mang ý nghĩa của sự “tử tế, tận tâm”. Thông điệp của Khaoxin: dù chuyện gì xảy ra, chúng tôi vẫn sẽ luôn đổi xử tử tế với khách hàng.
          </p>
        </div>
      </div>

      <div className={aboutStyles.vision}>
        <div>
          <h3>Vision</h3>
          <p>Become to be a chuỗi bubble tea – technology. Chúng tôi luôn nhắm đến việc tối ưu hóa mọi thứ để nhằm mang đến cho khách hàng sự đơn giản, thuận tiện nhất. Chúng tôi mong muốn được phục vụ khách hàng một cách tốt nhất, đem đến cho họ những trải nghiệm vượt ngoài sự mong đợi trên từng điểm chạm mà chúng tôi thiết kế dù bất kì nơi đâu hay bất cứ giây phút nào.</p>
        </div>
        <div>
          <h3>Mission</h3>
          <p>Từ đầu, khaoxin định hướng ko chỉ cung cấp các loại bubble tea truyền thống hay xu hướng, mà khaoxin còn muốn đem lại cảm giác kết nối. Có một sự thật đơn giản rằng, khi kết nối với những người xung quanh, chúng ta đều sẽ cảm thấy vui vẻ, hạnh phúc, vị tha hơn. Không những thế, các nghiên cứu khoa học còn chứng minh mối liên hệ giữa các kết nối xã hội với cảm giác tích cực, sức khỏe và tuổi thọ của con người.<br></br>
            Our mission is ‘Spread love and happiness’
            Our aspiration is to be people positive – investing in humanity and the well-being of everyone we connect with, from our partners to coffee farmers to the customers in our stores and beyond.
          </p>
        </div>
      </div>

      <div>
        <h2 className={aboutStyles.h2Text}>Connection</h2>
        <p>At Khaoxin, we make sure everything we do honors that connection—from our commitment to the finest quality tea, to the way we engage with our customers and communities to do business responsibly. From Khaoxin beginnings as a single store, in every place we’ve been and every place we touch, we’ve tried to make it a little better than we found it.<br></br>

          Chúng tôi tin rằng làm việc có trách nhiệm và trung thực với khách hàng sẽ gây dựng được lòng tin từ khách hàng.<br></br>

          Chúng tôi sẽ làm cho ngày của bạn trở nên tốt đẹp hơn (we want to make your day) bằng những sự tử tế<br></br>

          As it has been from the beginning, our purpose goes far beyond profit. We believe Khaoxin can, and should, have a positive impact on the communities we serve.
        </p>
      </div>

      <div>
        <h2 className={aboutStyles.h2Text}>Ingredient</h2>
        <p>Our commitment to the highest quality of ingredients, được chọn lọc kĩ càng. Kết hợp cách thức ủ trà lạnh theo chuẩn Đài Loan. After research and development, Chúng tôi đã cho ra mắt những dòng sản phẩm mang một hương vị đặc trưng riêng, độc đáo. Với trà ủ lạnh sẽ chứa rất ít caffeine sẽ giúp ngăn ngừa bệnh béo phì, cholesterol cao, tăng huyết áp, … Trà sữa khaoxin được áp dụng công thức ủ lạnh nhằm hạn chế caffeine nhưng vẫn đảm bảo độ đậm vị.
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