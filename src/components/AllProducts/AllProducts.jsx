import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import bgImage from '../../assets/all-banner.jpg'

const AllProducts = () => {
  return (
    <div>
       <CategoryPage bg={bgImage} title="All Products" categories='All'/>
    </div>
  )
}

export default AllProducts;
