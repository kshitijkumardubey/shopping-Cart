import React , {useState ,useEffect} from "react"
import  Axios  from "axios"
import CartItem from "./CartItem"
import {random,commerce} from "faker"
import {Container,Col,Row} from "reactstrap"


const apiKey = "563492ad6f91700001000001243ae52a46a3487ebd539a3691842774"

const url = "https://api.pexels.com/v1/search?query=laptop&per_page=6&page=1"

const localurl = "https://jsonware.com/json/7f26bf2c0233a09ad8426b4e6ad9ccbd.json "

const BuyPage = ({addInCart})=>{

    const [product,setProduct] =useState([])

    // const fetchPhotos = async () => {
    //     const { data } = await Axios.get(url,{
    //         headers:{
    //             Authorization: apiKey
    //         }
    //     })

   const fetchPhotos = async () =>{
       const {data} = await Axios.get(localurl,{})
   const {photos} = data;

   const allProduct = photos.map(photo => ({
       smallImage: photo.src.medium,
       tinrImage: photo.src.tiny,
       productName: random.word(),
       productPrice:commerce.price(),
       id:random.uuid()
   }))

   setProduct(allProduct);
   };



   useEffect (() =>{
    fetchPhotos();
},[])


return(
    <Container fluid>
    <h1 className="text-success text-center">
         Buy page
    </h1>
    <Row>
    {product.map(product =>
        (
        <Col md={4} key={product.id}>
        <CartItem product={product} addInCart={addInCart}/>
        </Col>
    ))}
    </Row>
    </Container>
)

   
}

export default BuyPage;
