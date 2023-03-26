import { useState, useEffect } from "react";


const ItemCount = ({stock, initial, onAdd}) => {
    const [counter, setCounter] = useState(parseInt(initial)) //este hook devuelve un array con un estado y una funcion para cambiar este estado
    const [confirmed, setConfirmed] = useState(false);

    useEffect(()=>{
        // console.log("Pido detalle del producto")
    }, [confirmed])

    const add = () => {
        if (counter < stock ) {
            setCounter(counter+1);
        }       
    }
    
    const subtract = () => {
        if ( counter > 1) {
            setCounter(counter-1);
        }
    }

    const addToCart = () => {
        setConfirmed(true)
        // if (counter <= stock) {
        //     onAdd(counter);
            
        // }
    }

    if(!confirmed) {
        return (
            <>
            <div className="itemCount">
                <button type="button" className="itemCount__bl" onClick={subtract}>-</button>
                <p id="count" className="itemCount__counter">{counter}</p>
                <button type="button" className="itemCount__br" onClick={add}>+</button>
            </div>
            <div >
                <button type="button" className="addToCartBtn" onClick={addToCart}>Comprar</button>
            </div>
            </>
        )
    } else {
        return (
            <>
            <div class="itemCount">
                <button type="button" className="itemCount__bl" onClick={subtract}>-</button>
                <p id="count" class="itemCount__counter">{counter}</p>
                <button type="button" className="itemCount__br" onClick={add}>+</button>
            </div>
            <div >
                <button type="button" className="addToCartBtn" onClick={addToCart}>Add to cart</button>
            </div>
            <p className="modal">Se agregaron {counter} unidad/es al carrito.</p>
            </>
        )
    }

}
export default ItemCount