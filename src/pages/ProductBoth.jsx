import React, { useState } from 'react'
import { kurtis,mid,row} from './data/Product'

import '../App.css'
import {Link} from 'react-router-dom'



const Products_both = () => {
     const [ishovered, sethovered] = useState(false);

     const handleMouseOver = () => {
      sethovered(true)
     };
      
     const handleMouseOut = () => {
      sethovered(false)
     }

     const imghover = {
      color: ishovered ? 'gray' : '',
      filter: ishovered ? 'brightness(1.1)' : '',
      transform : ishovered ? 'scale(0.8)' : 'scale(1)',
      cursor : ishovered ? 'pointer' :''
     };

  return (
    
      <>  
      
      {/* womens section */}
    <div className='flex justify-center gap-7 my-4 flex-wrap '>

      {kurtis.map((kurti)=>(
          <div className="card" style={{width:'18rem'}}>
          <img src={kurti.image} className="card-img-top h-75 " style={{...imghover, transition: 'all 0.3s ease'}} onMouseOver={handleMouseOver} 
          onMouseOut={handleMouseOut}  alt="..."/>

          <div className="card-body border-solid ">
            <p className="card-text text-center" style={{fontWeight: 'bold', }}>{kurti.title}</p>
            <p className="card-text text-center" style={{fontWeight: 'bold'}}>{kurti.price}</p>

            {/* <ul style={{listStyle:'none',textDecoration:'none',display:"flex",gap:'.5rem',}}>

              <li  >
                <button className='py-1 px-2 ' style={{border:'1px solid black', backgroundColor: '#B2FFFF', cursor:"pointer",fontWeight:"bold"}}>{kurti.size[0]}</button>
              </li>

              <li >
                <button className='py-1 px-2 ' style={{border:'1px solid black', backgroundColor: '#B2FFFF',cursor:"pointer",fontWeight:"bold"}}>{kurti.size[1]}</button>
              </li>

              <li>
                <button   className='py-1 px-2 ' style={{border:'1px solid black', backgroundColor: '#B2FFFF',cursor:"pointer",fontWeight:"bold"}}>{kurti.size[2]}</button>
              </li>
              
              <li >
              <button  className='py-1 px-2 ' style={{border:'1px solid black', backgroundColor: '#B2FFFF',cursor:"pointer",fontWeight:"bold"}}>{kurti.size[3]}</button>
              </li>
            </ul> */}
           
           
          </div>
         
        </div>

      ))}

  </div>





  {/* images */}
  <div className='flex flex-wrap justify-center' style={{marginTop:'3.3rem'}}>
   <h3 className='text-center font-bold  mb-2  text-lg	 ' style={{fontFamily:''}}> SPOTLIGHT ON </h3>
   </div>

   <div className=' cards flex justify-center mt-4'>
    {mid.map((img) => (
      <img src={img.image} style={{height:'40vh',padding:'0 .6rem'}}  alt="" />
    ))}

   </div>


    {/* row image */}
   <div>
    <h3 className='text-center  mt-5 font-bold text-lg flex flex-wrap justify-center	'>EDITORS PICK</h3>
    <div className='cards flex justify-center mt-5'>
    <img src={row} style={{width:'77%', marginBottom:'2rem', border:'2px solid gray', borderRadius:'6px'}}></img>
   </div>
   </div>

<div className=' flex justify-center font-bold   '>
   <Link to='/categories' style={{textDecoration:'none', border:'2px solid black', padding:'5px', background:'skyblue' , color:"black", borderRadius:'4px', fontWeight:'bold', marginBottom:'2rem'}}>
    Shop Now
   </Link>
   </div>

  






 </>
  )
}

export default Products_both