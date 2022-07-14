import Link from 'next/link'
import React from 'react'
import Layout from '../components/Layout'
import styles from '../styles/Puesto.module.css'

const inforPuesto = () => {
  return (
    <Layout paginas="Login">
    <form className={styles.form}>
      <p type="SELECCIONA TIPO DE EMPLEADO:" className={styles.parrafos}>
        <div className={styles.seleccionar}>
            <input type='checkbox' className={styles.checkBox}></input>
            <label>Administracion</label>
            <input type='checkbox' className={styles.checkBox}></input>
            <label>Obra</label>
        </div>
      </p>
      <p type="SELECCIONA EL ESTATUS DEL EMPLEADO:" className={styles.parrafos}>
        <div className={styles.seleccionar}>
            <input type='checkbox' className={styles.checkBox}></input>
            <label>Activo</label>
            <input type='checkbox' className={styles.checkBox}></input>
            <label>Inactivo</label>
        </div>
      </p>
      <p type="SELECCIONA EMPRESA:" className={styles.parrafos}>
        <input className={styles.inputs}></input>
      </p>
      <p type="PUESTO:" className={styles.parrafos}>
        <input className={styles.inputs}></input>
      </p>
      <p type="SELECCIONA EL(LOS) DEPARTAMENTO(S):" className={styles.parrafos}>
        <input className={styles.inputs}></input>
      </p>
      <Link href='/InfoPrestaciones'>
        <button className={styles.continuar}>Siguiente</button>
      </Link>
    </form>
  </Layout>
  )
}

export default inforPuesto