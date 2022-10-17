import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Fade from '../components/animated_component/Fade'

export default function Custom404() {
  return (
    <Fade>
      <div className={styles.webBackground}>
        <Head>
          <title>404 - Khaoxin Not Found</title>
          <meta name="description" content="Trà sữa Khaoxin" />
        </Head>
        <div className={styles.errorContent}>
          <h1>404 - KHAOXIN NOT FOUND</h1>
          <p>Có gì đó sai sai, xin vui lòng thử lại.</p>
          <p>Nếu có vấn đề gì khẩn cấp, xin vui lòng trực tiếp liên hệ thông qua sdt: 0378 433 175</p>
        </div>
      </div>
    </Fade>
  )
}

