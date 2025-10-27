import React from 'react'
import Banner from '../Banner/Banner'
import ProductList from '../ProductList/ProductsList'
import Cards from '../Cards/Cards'

const CategoryPage = ({title,bg, categories=[]}) => {

    const filteredProducts = categories.includes('All') 
    ? ProductList 
    : ProductList.filter(item => categories.includes(item.category));

    const renderProduct = filteredProducts.map(product=>{
        return(
            <Cards image={product.image} name={product.name} price={product.price}/>
        )
    })
    return (
        <div>
            <Banner title={title} bg={bg}/>
            
            <div className='grid md:grid-cols-4 grid-cols-1 gap-9 px-10 py-20 '>
                {renderProduct}
            </div>
        </div>
    )
}

export default CategoryPage
