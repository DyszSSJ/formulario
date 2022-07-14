import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout paginas="Login">
      <form className={styles.form}>
        <p type="NOMBRE DEL COLABORADOR:" className={styles.parrafos}>
          <input className={styles.inputs}></input>
        </p>
        <p type="CURP:" className={styles.parrafos}>
          <input className={styles.inputs}></input>
        </p>
        <p type="RFC:" className={styles.parrafos}>
          <input className={styles.inputs}></input>
        </p>
        <p type="NACIONALIDAD:" className={styles.parrafos}>
          <input className={styles.inputs}></input>
        </p>
        <p type="TELEFONO MÓVIL:" className={styles.parrafos}>
          <input className={styles.inputs}></input>
        </p>
        <p type="TELEFONO PARTICULAR:" className={styles.parrafos}>
          <input className={styles.inputs}></input>
        </p>
        <p type="ESTADO CIVIL:" className={styles.parrafos}>
          <input className={styles.inputs}></input>
        </p>
        <p type="CONTACTO DE EMERGENCIA:" className={styles.parrafos}>
          <input className={styles.inputs}></input>
        </p>
        <p type="CORREO PERSONAL:" className={styles.parrafos}>
          <input className={styles.inputs}></input>
        </p>
        <p type="BANCO:" className={styles.parrafos}>
          <input className={styles.inputs}></input>
        </p>
        <p type="CUENTA:" className={styles.parrafos}>
          <input className={styles.inputs}></input>
        </p>
        <p type="CLAVE:" className={styles.parrafos}>
          <input className={styles.inputs}></input>
        </p>
        <p type="DOMICILIO:" className={styles.parrafos}>
          <input className={styles.inputs}></input>
        </p>
        <Link href='/inforPuesto'>
          <button className={styles.continuar}>Siguiente</button>
        </Link>
      </form>
    </Layout>
  )
}
