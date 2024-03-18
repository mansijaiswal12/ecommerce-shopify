import React from 'react'
import { useState, useEffect } from 'react'
import { useFirebase } from '../context/Firebase'
import video from '../assets/video/gif.mp4' 
import Card from '../components/Card'
import { NavLink } from 'react-router-dom'

const Home = () => {
    const firebase = useFirebase();

    const [productMens, setproductMens] = useState([])
    const [productWomens, setproductWomens] = useState([])
    

useEffect(() => {
 firebase.listProductMen().then((products) => setproductMens(products.docs))
 firebase.listProductwomen().then((products) => setproductWomens(products.docs))
}, []);

  return (
    <>
    <div>
      <video width='100%' height='80%' autoPlay loop>
      <source src={video} type='video/mp4'/>
      </video>
    </div>

    <div className = 'flex flex-wrap my-[2%] mx-1'
    style={{background:"#1C1C1C", color:'wheat'}}>

        {productMens.map((product) => (
         <NavLink to='/details'>
          <div className='flex justify-center ml-[20px] mr-[10px] border-r-8 pr-5
           border-slate-50'>
            <Card
            key={product.id}
            size={product.size}
            id={product.id}
            {...product.data()}
            />
          </div> 
          </NavLink> 
        ))}
    </div>


    <div className = 'flex flex-wrap my-[2%] mx-1'
    style={{background:"#1C1C1C", color:'wheat'}}>

        {productWomens.map((product) => (
          <div className='flex justify-center ml-[20px] mr-[10px] border-r-8 pr-5
           border-slate-50'>
            <Card
            key={product.id}
            size={product.size}
            id={product.id}
            {...product.data()}
            
            />

          </div>  
        ))}
    </div>
    </>
  )
}

export default Home
