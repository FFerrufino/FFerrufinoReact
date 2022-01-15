import React, { useState, useEffect, useContext } from "react";
import { context } from "../CartContext";

const Form = () => {
    const resultado = useContext(context);
    const [usuario, setUsuario] = useState();
    const [nombre, setNombre] = useState([]);
    const [mail, setMail] = useState([]);
    const [numero, setNumero] = useState([]);

    const nombreForm = (e) => {
        const value = e.target.value
        setNombre(value)
    }
    const mailForm = (e) => {
        const value = e.target.value
        setMail(value)
    }
    const numeroForm = (e) => {
        const value = e.target.value
        setNumero(value)
    }
    const hacerPedido = () => {
        // setUsuario([nombre, mail, numero])
        resultado.mandarCarrito(usuario)
        resultado.borrarCarrito()
    }
    const hacerFormulario = () => {
        setUsuario([nombre, mail, numero])
    }

    if (usuario) {
    return <>
    <div class="formulario">
        <fieldset>
            <label>Nombre:</label>
            <input type="text" onChange={nombreForm} placeholder="Nombre" autocomplete="off"></input>
            <label>Mail:</label>
            <input type="text" onChange={mailForm} placeholder="Mail" autocomplete="off"></input>
            <label>Número:</label>
            <input type="text" onChange={numeroForm} placeholder="Número" autocomplete="off"></input>
        </fieldset>
        </div>
        {/* <button onClick={hacerPedido}>Hacer el pedido</button> */}
        <button onClick={hacerPedido}>Terminar pedido</button>
    
    </>
    }else{
        return <>
        <div class="formulario">
        <fieldset>
            <label>Nombre:</label>
            <input type="text" onChange={nombreForm} placeholder="Nombre" autocomplete="off"></input>
            <label>Mail:</label>
            <input type="text" onChange={mailForm} placeholder="Mail" autocomplete="off"></input>
            <label>Número:</label>
            <input type="text" onChange={numeroForm} placeholder="Número" autocomplete="off"></input>
        </fieldset>
        </div>
        <button onClick={hacerFormulario}>Mandar datos de formulario</button>
    
    </>
    }
    
}

export default Form