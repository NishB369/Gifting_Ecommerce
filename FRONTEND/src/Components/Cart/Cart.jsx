import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import CartData from "./CartData/CartData";


const Cart = () => {
  return (
    <div className="bg-[#d4d4d454] h-lvh w-lvw">
    <Header/>
    <div>
        <CartData/>
        <Sidebar/>
    </div>
    </div>
  )
}

export default Cart