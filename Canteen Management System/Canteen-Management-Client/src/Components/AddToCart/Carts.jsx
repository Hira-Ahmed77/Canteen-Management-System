import axios from "axios";
import { useState } from "react";
import Cart from "./Cart";
import UseCart from "../../AxiosHook/UseCart";




const Carts = () => {


const [carts]=UseCart()
console.log(carts)

    return (
        <div className="grid grid-cols-3 mt-20 gap-5"> 
            

{
    carts.map(des=><Cart  key={des._id} data={des}></Cart>)
  }
        </div>
    );
};

export default Carts;