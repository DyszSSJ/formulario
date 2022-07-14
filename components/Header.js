import Image from "next/image";
import styles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div className={styles.nav}>
    <div className={styles.flex}>
      <div className={styles.image}>
          <Image
          src="/img/cropped-cropped-Logo_IM_RGB-01-1-1-258x81.png"
          width="220"
          height="100"
          alt="Logo mercado Clon"
          />
      </div>
    </div>
      <div>
        <h2 className={styles.title}>Especialistas en diseño y construcción de espacios para la salud</h2>
      </div>
  </div>
  )
}

export default Header