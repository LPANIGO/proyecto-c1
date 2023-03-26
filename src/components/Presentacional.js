import { useState, useEffect } from "react";

const Presentacional = () => {

    //Estado de un componente (es una variable de un componente)
    //Al cambiar el estado react va a reaccionar y volver a pintar el elemento que usa este estado.

    const result = useState(0)
    const counter = result[0]
    const setCounter = result[1]
    const [dark, setDark] = useState(false)

    useEffect(()=>{
        console.log("Nuevo render") //useEffect se ejecuta siempre al final del componente. Para evitar que 
        // se ejecute otra vez usamos el segundo parámetro.
    }, [])

    const increaseCounter = () => {
        setCounter(counter + 1)
    }

    const toggleDark = () => {
        setDark(!dark)
    }

    console.log(dark)

    return (
        <div>
            <p>Current counter : {counter}</p>
            <p>Dark mode: {"Dark"}</p>
            <button onClick={increaseCounter}>Icrease</button>
            <button onClick={toggleDark}>Toggle dark mode</button>
            {/* Al escribir el evento con camel case evitamos que lo detecte como codigo js en linea*/}
        </div>
        
    )
}
export default Presentacional