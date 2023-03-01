import React from "react"; 
import {useCart} from 'react-use-cart'

const ITcard = (props) => {
const {addItem} = useCart()
 return(
    <div class="col-11 col-md-6 col-lg-3  mx-0 mb-4">
        <div class="card p-0 overflow-hidden h-100 shadow">
            <img width={20} height={20}  src={props.img} class="card-img-top img-fluid" />
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">{props.price}</p>
                <p class="card-text">{props.desc}</p>
                <button class="btn btn-success" onClick = {() =>addItem(props.item)}>Add to Cart</button>
             </div>
        </div> 
    </div>
 )
} 
export default ITcard;