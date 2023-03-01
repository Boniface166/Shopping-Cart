import React from "react"; 
import ITcard from "./ITcard";
import Cinfo from "./Cinfo";

const Home = () =>{
    return(
        <>
     <h1 className='text-center mt-3'>Furnitures</h1>
    <section className='py-4 container'>
     <div className='row justify-content-center'>
       {Cinfo.prodinfo.map((item, index)=>{
        return(
            <ITcard img={item.img}
             title={item.title} 
             desc={item.desc} 
             price={item.price} 
             item ={item}
             key={index}/> 
        )
       })}
    

        </div>
    </section>
        </>
        
    );
};
export default Home;