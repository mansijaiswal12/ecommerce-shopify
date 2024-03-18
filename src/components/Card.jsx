import React from 'react'
import { useFirebase } from '../context/Firebase'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


const Card = (props) => {
 const firebase = useFirebase()

  const [url, seturl] = useState(null)

  useEffect(()=> {
    firebase.getImageURL(props.imageUrl).then((url) => seturl(url))
  },[props.imageUrl]);

  console.log(props);
  return (
    <>
     <div className='max-w-sm rounded overflow-hidden shadow-lg mx-3 my-6'>
      <Link to={`/details/${props.id}`}>
        {url && <img className='w-72 ' src={url} alt={props.title}/>}
      </Link>
      <div className='px-6 py-4'>
        <div className='font-bold text-xl text-center mb-2'>{props.title} 
        </div>
        <p className='font-bold text-xl mb-2 text-center'>{props.price}</p>
  
      </div>

     </div>
      
    </>
  )
}

export default Card
