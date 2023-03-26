import { Item } from "./Item"

const ItemList = ({productos}) => {

    return (
        <div className="itemList">
            {productos.map( (e) => {
                return <Item key={e.id} e={e} />
                
            })}
        </div>
    )
}
export default ItemList