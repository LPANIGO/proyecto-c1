import { useState, useEffect } from "react"
import ItemList from "../pages/ItemList"
import ScaleLoader from "react-spinners/ScaleLoader";
import { useParams } from "react-router-dom"

// let initialproductos= [];

// const request = fetch('https://fakestoreapi.com/productos')

/* PEDIDO A BASE DE DATOS
Lo mejor es hacer un pedido a la bbdd cada vez que se pide una categoria diferente, y al hacer el pedido
solo buscar los productos de esa categoria y no filtrar todos.
*/


const initialproductos =
[
    {
        id: 1,
        title: "Cerámico",
        price: 230,
        categorias: ["Light-blue", "White", "Grey"]
    },
    {
        id: 2,
        title: "Calefón",
        price: 250,
        categorias: ["Light-blue", "Blue", "Black"]
    },
    {
        id: 3,
        title: "Grifo",
        price: 120,
        categorias: ["Light-blue", "Blue", "Red"]
    }
]
// .then( (response) => {
//     //inspecciono headers para anilizar el contenido antes de recibirlo
//     //transformo el formato del body
//     const productos = response.json() //esta opración tambien es una promesa, para el en caso que la respuesta se muy pesada
//     return productos
// })
// .then( (formatedproductos) => {
//     initialproductos = formatedproductos;
// })
// .catch( (err) => {
//     console.log(err)
// })



const ItemListCointainer = (props) => {

    const [productos, setproductos] = useState([])
    const [cargando, setCargando] = useState(true)
    const {nombreCategoria} = useParams()

    //productos.filter()
    /*
    Hay dos opciones:
    Traer los datos de la bbdd una vez y filtrarlos cada vez que se pida.
    Por cada pedido de filtro traer los datos de la bbdd.
    */

    useEffect( () => {
        setCargando(true)
        if (nombreCategoria === undefined) {
            const p = new Promise ((res, rej) => {
                setTimeout( () => {
                    res(initialproductos)
                }, 2000)
            })
            .then( (content) => {
                setproductos(initialproductos)
                setCargando(false)
            })
            .catch( (error) => {
                console.log("Smth went wrong.")
            })
        } else {
            const p = new Promise ((res, rej) => {
                setTimeout( () => {
                    res(initialproductos)
                }, 2000)
            })
            .then( (content) => {
                setproductos(initialproductos)
                setCargando(false)
            })
            .catch( (error) => {
                console.log("Smth went wrong.")
            })
        }
    }, [nombreCategoria])

    if(cargando) {
        return (
            <div  className="itemListContainerLoader">
                <ScaleLoader color="#bf071f"/>
                <p className="cargandoP">Cargando productos...</p>
            </div>
        )
    } else {
        return (
            <div className="itemListContainer">
                <ItemList productos={productos}/>
            </div>   
        )
    }
    
}
export default ItemListCointainer