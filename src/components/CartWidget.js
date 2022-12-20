import './CartWidget.css';
import { BsCart2 } from "react-icons/bs";


const CartWidget = () => {
    return (
    <>
        <div className="cart-icono">
        <BsCart2 size="3rem" />
      </div>
      {/* <div className="numero-cart">5</div> */}
    </>)

};

export default CartWidget;