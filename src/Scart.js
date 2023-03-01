import React from "react";
import { useCart } from "react-use-cart";

const SCart = () =>{
    const{ 
        items,
        isEmpty,
        totalUniqueItems,
        totalItems,
        updateItemQuantity,
        removeItem,
        emptyCart,
        cartTotal

     } = useCart();
     if(isEmpty) return <h1 className="text-center">Card is empty</h1>
     return(
        <section>
        <div className="py-4 container">
            <div className="row justify-content-center">
               <div className="col-12">
                <h5 className="text-center justify-content: space-between;">Cart ( {totalUniqueItems} ) Total Items: ( {totalItems} )</h5>
      <table className="table">
         
         {items.map((item, index)=>{
            return (
            <tr key={index}>
                <td>
                  <img src={item.img} style={{height: '6rem'}}></img>
                </td>
               <td>{item.title}</td>
                <td>{item.price}</td>
                <td>Quantity ({item.quantity})</td>
            <td className="justify-content: space-between;">
               <button
               className="btn bg-primary ms-3" onClick={() => updateItemQuantity(item.id, item.quantity -1)}>
                 -
               </button>
               <button className="btn bg-primary ms-3" onClick={()=>updateItemQuantity(item.id, item.quantity+1)}>+</button>
               <button className="btn bg-danger ms-3" onClick={()=>removeItem(item.id)}>Remove Item</button>
            </td>

            </tr>
            )
         })}

      </table>
               </div>
      <div className="col-auto ms-auto">
         <h3>Total Price: $ {cartTotal}</h3>
         </div>  
      <div className="col-auto">
         <button className="btn btn-danger" onClick={()=>emptyCart()}>
            Clear cart 
         </button>
         </div>   
            </div>
        </div>
        </section>
     )
    
}
export default SCart;