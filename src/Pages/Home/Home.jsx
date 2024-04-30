import React, {useState}from 'react'
import Button from '../../Companents/Buttons/Button'
import axios from 'axios'
import ProductCard from '../../Companents/Cards/ProductCard';

const Home = () => {
const [products,setProducts]=useState([]);

const getProducts = () => {
axios.get('https://dummyjson.com/products/category/smartphones')
.then(res => {
    console.log(res);
    setProducts(res.data.products)
})
};

  return (
   <div>
    {products.map(item => <ProductCard item={item} />)}
    
    <Button text="Click Me" onclick={getProducts}    />
    </div>
  );
};

export default Home