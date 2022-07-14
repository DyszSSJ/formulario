import Layout from "../components/Layout"
import styles from '../styles/Prestacisones.module.css'
import Link from "next/link"

const InfoPrestaciones = () => {
  return (
    <Layout paginas="Login">
    <form className={styles.form}>
      <p type="IMSS STATUS:" className={styles.parrafos}>
        <div className={styles.seleccionar}>
            <input type='checkbox' className={styles.checkBox}></input>
            <label>Activo</label>
            <input type='checkbox' className={styles.checkBox}></input>
            <label>Inactivo</label>
        </div>
      </p>
      <p type="NSS :" className={styles.parrafos}>
        <input className={styles.inputs}></input>
      </p>
      <p type="NUMERO DE ALTA IMSS:" className={styles.parrafos}>
        <input className={styles.inputs}></input>
      </p>
      <p type="VACACIONES DISPONIBLES:" className={styles.parrafos}>
        <input className={styles.inputs}></input>
      </p>
      <p type="SALARIO IMSS:" className={styles.parrafos}>
        <input className={styles.inputs}></input>
      </p>
      <p type="SALARIO BRUTO:" className={styles.parrafos}>
        <input className={styles.inputs}></input>
      </p>
      <Link href='/InfoPrestaciones'>
        <button className={styles.continuar}>Siguiente</button>
      </Link>
    </form>
  </Layout>
  )
}

export default InfoPrestaciones