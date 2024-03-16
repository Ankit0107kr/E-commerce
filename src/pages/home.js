import React from 'react'
import Navbar from '../features/navbar/navbar'
import ProductList from '../features/product/components/productList'

const Home = () => {
  return (
    <div>
        <Navbar>
            <ProductList/>
        </Navbar>
    </div>
    
  )
}

export default Home