import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFirebase } from "../context/Firebase";

const DetailsWomen = () => {
  const firebase = useFirebase();
  const {id} = useParams()
  const [Product, setproduct] = useState(null)
  const [data , setdata] = useState(null)
  const [url,seturl] = useState(null)

  useEffect(() => {
    firebase
    .getProductByIdwomen(id)
    .then((value) => setdata(value.data()))
  },[]);

  useEffect(() => {
    if (data) {
      const imageUrl = data.imageUrl;
      firebase.getImageURL(imageUrl).then((url) => seturl(url))
    }
  },[data])

  useEffect(() => {
    firebase.getProductByIdwomen(id).then((Product) =>{
      setproduct(Product.data())
    })
  }, [firebase,id])

  if(!Product){
    return <div>Loding...</div>
  }
  return(
    <div>
        <h1>Women</h1>
      <h2>{Product.title}</h2>
      <p>Price:{Product.price}</p>
      <img src={url} alt=""/>
    </div>
  )
}
export default DetailsWomen;