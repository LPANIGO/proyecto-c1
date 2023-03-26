import { useState, useEffect } from "react"
import ItemDetail from "../pages/ItemDetail"
import ScaleLoader from "react-spinners/ScaleLoader";
import { useParams } from "react-router-dom";

const productosIniciles = [
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

const ItemDetailContainer = () => {

    const [cargando, setCargando] = useState(true);
    const [producto, setProducto] = useState({});
    const {id} = useParams()

    useEffect( () => {
        

        const p = new Promise ((res, rej) => {
            setTimeout( () => {
                res(productosIniciles)
            }, 2000)
        })
        .then( (content) => {
            const resultado = productosIniciles.filter((producto) => {
                // console.log(parseInt(id))
                return producto.id === parseInt(id)
            })[0]
            setProducto(resultado)
            setCargando(false)
        })
        .catch( (error) => {
            console.log("Smth went wrong.")
        })
    }, [])

    if (cargando){
        return (
            <div  className="itemDetailContainerLoader">
                <ScaleLoader color="#bf071f"/>
                <p className="loadingP">Cargando detalle del producto... </p>
            </div>
        ) 
    } else {
        return (
            <div className="itemDetailContainer">
                <ItemDetail producto={producto}/>
            </div>   
        )
    }
    
}
export default ItemDetailContainer