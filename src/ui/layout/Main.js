import ItemListCointainer from "../containers/ItemListContainer"
import ItemDetailContainer from "../containers/ItemDetailContainer"
import { Routes, Route } from "react-router-dom"
import Cart from "../pages/Cart"
/*
/category/:categoryName
/product/:id
/carrito
*/
const Main = () => {
    return (
        <main>
            <Routes>
                <Route path="/proyecto-c1/" element={<ItemListCointainer/>}/>
                <Route path="/productos/:nombreCategoria" element={<ItemListCointainer/>}/>
                <Route path="/producto/:id" element={<ItemDetailContainer/>}/>
                <Route path="/cart" element={<Cart/>}/>
            </Routes>
            
            {/*
            <ItemListCointainer/>
            <ItemDetailContainer/> */}
        </main>
        
    )
}
export default Main