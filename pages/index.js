import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {

  const [values, setValues] = useState()
  console.log(values)
  const handleChangeValues = (value) =>{

    setValues(prevValue=>({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  }
  const handleSubmit = () =>{
    console.log(values)
  }
  return (
    <div>
        <h1>Biblioteca</h1>

        <input type="text"
          name="name"
          placeholder="name"
          className="register--input"
          onChange={handleChangeValues}
        />
        <input type="preço"
          name="number"
          placeholder="number"
          className="register--input"
          onChange={handleChangeValues}
        />
        <input type="text"
          name="codigo"
          placeholder="codigo"
          className="register--input"
          onChange={handleChangeValues}
        />
        <button className="register--button" onClick={()=> 
          handleSubmit()}>Cadastrar</button>
    </div>
  )
}
