import { useState } from "react";
import {Fragment} from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Articulo from "./components/Articulo";
import Changuito from "./components/Changuito";


function App() {

  const frase_footer = "Derechos reservados por JIM SA & CO";

// esta declaracion es un hoks
  const [productos, modificaArticulos] = useState([ 
    {id:1, articulo: "Gaseosas 200cc frías", precio :200},
    {id:2, articulo: "Vinos 1L frío", precio :500},
    {id:3, articulo: "250gr Salame", precio :250},
    {id:4, articulo: "250gr Queso", precio :300},
    {id:5, articulo: "Fosforos", precio :100}
  ]);

  const [changuito, setChanguito] = useState([]);


  return (
    <Fragment>
      < Header />
      <div className="container">
        {productos.map( producto => 
          (
            <Articulo 
              key = {producto.id}
              producto = {producto}
              productos = {productos}
              changuito = {changuito}
              setChanguito = {setChanguito}
            />
          )
        )}
      </div>

      <Changuito 
        changuito = {changuito}
        setChanguito = {setChanguito}
      />


      <Footer frase = {frase_footer} />
    </Fragment>
  );
}

export default App;
