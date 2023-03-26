import { useEffect, useState } from "react"
import ItemCount from "./ItemCount"

const productosIniciales = [
    {
        id: 1,
        nombre: "p1",
        precio: 450
    },
    {
        id: 2,
        nombre: "p2",
        precio: 500
    },
    {
        id: 3,
        nombre: "p3",
        precio: 380
    }
]

const Container = () => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        // console.log("Pido productos...")
        const promesa = new Promise((res, rej)=> {
            setTimeout(()=>{
                res(productosIniciales)
            },2000)
        })
        .then((contenido)=> {
            setProductos(productosIniciales)
        })
        .catch((error)=> {
            console.log("Algo salió mal")
        })

        // setTimeout(()=>{
        //     console.log("Recibo productos...")
        //     console.log(productosIniciales)
        //     setProductos(productosIniciales)
        // },2000)
    }, [])

    const stock = 10
    const initial = 1
    const onAdd = (quantity) => {
        console.log(`${quantity} item/s added`)
    }
    
    return (
        <>
        <ul>
            {productos.map((e, index)=>{
                return <li key={e.id}>{e.nombre}</li>
            })}
        </ul>
        {/* <ItemCount stock={stock} initial={initial} onAdd={onAdd}></ItemCount> */}
        </>
        
    )
}
export default Container