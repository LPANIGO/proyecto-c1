import {Link} from "react-router-dom"


export const Item = ({e}) => {
    let counter = 0; //analizar el hecho de tener un contador dentro del componente, y si su id va a chocar
    /// con el id de cada producto cuando sea necesariao actualizar un componente con igual key

    return (
        <>
        <Link to={`/producto/${e.id}`} className="itemList__item">
            <article>
                <img src="http://via.placeholder.com/300x300" alt="placeholder"/>
                <h3>Nombre: {e.title}</h3>
                <p>Precio: U$D {e.price}</p>
                {/* <p>Categorías: {e.categorias.map(categoria => {
                    counter++;
                    return <span key={counter}> {categoria}, </span>
                })}</p>    */}
            </article>
        </Link>
        </>
        
    )
}