import ItemCount from "../utils/ItemCount"

const ItemDetail = ({producto}) => {
    

    return (
        <>
            <div className="tituloYFoto">
                <img src="http://via.placeholder.com/300x300" alt="placeholder"></img>
                <h3 className="titulo">{producto.title}</h3>
            </div>
            <div className="contador">
                <p>$ {producto.price}</p>
                <ItemCount stock= "10" initial="1"/>
            </div>
            <div className="descripcion">Descripción</div>
        
        </>
        
    )
}
export default ItemDetail