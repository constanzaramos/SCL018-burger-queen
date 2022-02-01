import React, {useState,useContext} from "react"
import "../css/meseros.css"
import datamenu from '../datamenu.json';
import {menuContext} from "../App";
import Order from "./Order.jsx";

const Waiters = () => {
    const orderContext = useContext(menuContext);
    console.log(orderContext)
    const [foodItems, setFoodItem] = useState([]);

  
    const filterData = (category) => {
      setFoodItem(datamenu[category]);
    };
    const addData = (food) => {
      orderContext.addFood(food);
    };
    return (

  
        <main className="waiters">
            <div>
            <h1>PEDIDOS</h1>
            <button className="comanda">Comandas listas</button>
            </div>
            <div className="container-input">
            <input className="input" id="nombre" type="text" placeholder="Nombre del cliente" />
            <input className="input" id="mesa" type="text" placeholder="Número de mesa" />
            <button className="menu-ok">OK</button>
            </div>
            <section className="containerMenu">
                <button className="menu" type="button" onClick={() => filterData('breakfast')}>Desayunos</button>
                <button className="menu" type="button" onClick={() => filterData('burger')}>Hamburguesas</button>
                <button className="menu" type="button" onClick={() => filterData('sides')}>Acompañamientos</button>
                <button className="menu" type="button" onClick={() => filterData('drinks')}>Para tomar</button>
            </section>
            <section className="conteinerPedidos">
                <div className="menu-data">
                {foodItems.map((food) => (
              
        <div className="containerData">
          <img className="imageData" src={food.image} alt="" />
          <div className="textData">{food.name} <br></br> ${food.price}<br></br>
        <button className="buttonP" type="button" key={food.id} onClick={() => addData(food)}> Agregar</button>
        </div>
        </div>
      ))}
      
                </div>
                <div className="resumen">
                    <div>
                    <Order />
                    </div>
                    <button className="menu">Enviar pedidos</button>
                </div>
            </section>
        </main>
    )
}
export default Waiters;
