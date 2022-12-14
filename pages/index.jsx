import { useState, useEffect } from 'react'
import Axios from "axios";
import Card from "../components/card"
export default function Home() {

  const [values, setValues] = useState();
  const [listGames, setListGames] = useState();
  console.log(listGames)
  const handleChangeValues = (value) =>{
    setValues(prevValue=>({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  }
  
  const handleSubmit = () =>{
    Axios.post("http://localhost:4001/register",{
    name: values.name,
    valor: values.valor,
    codigo: values.codigo
  }).then((response)=>{
    console.log(response)
  })
  
  }

  useEffect(()=>{
    Axios.get("http://localhost:4001/getCards")
    .then((response)=>{
      setListGames(response.data)});
  },[])
  return (
    <div>
        <h1>Biblioteca</h1>

        <input type="text"
          name="name"
          placeholder="name"
          className="register--input"
          onChange={handleChangeValues}
        />
        <input type="text"
          name="valor"
          placeholder="valor"
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
          {typeof listGames !== "undefined" && listGames.map((value)=>{
          return <Card key={value.ID} listCard={listGames} setListCard={setListGames} id={value.ID} name={value.Nome} codigo={value.Codigo} preco={value.Preço}></Card>      
          })}
    </div>
  )
}
