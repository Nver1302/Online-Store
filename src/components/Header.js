import React, { useState } from "react"
import { AiOutlineShopping } from "react-icons/ai";
import Order from "./Order";

const showOrder = (props) => {
    let sum = 0;
    props.order.forEach(el => sum += Number.parseFloat(el.price))
    return (<div>
        {props.order.map(el => (
            <Order key={el.id} item={el} onDelette = {props.onDelete}/>
        ))}
        <p className="sum">Сумма: {new Intl.NumberFormat().format(sum)}$</p> 
    </div>)
}

const showNothing = () => {
    return(
        <div className="empty">
            <h2>Товаров нет!</h2>
        </div>)
}

export default function Header(props){
    let [cartOpen, setCartOpen] = useState(false)
    return(
        <header>
            <div>
                <span className = "logo">House Staff</span>
                <ul className="nav">
                    <li>Про нас</li>
                    <li>Контакты</li>
                    <li>Кабинет</li>
                </ul>
                <AiOutlineShopping onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shopping-button ${cartOpen && 'activ'}`} />
                
                {cartOpen && (
                    <div className="shop-cart">
                        {props.order.length > 0 ?
                            showOrder(props) : showNothing()}
                    </div>
                )}
            </div>
            <div className= "presentation"></div>
        </header>
    )
}