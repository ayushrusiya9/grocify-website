import React, { useState } from 'react'
import Heading from '../Heading/Heading'
import ProductsList from '../ProductList/ProductsList'
import Cards from '../Cards/Cards'
import Button from '../Button/Button'


const Products = () => {

    const categories = ['All', 'Fruits', 'Vegetables', 'Dairy', 'SeaFood']
    const [activeTab, setactiveTab] = useState('All')

    let filteredItems = activeTab === 'All' ? ProductsList : ProductsList.filter(item => item.category === activeTab)


    const renderCards = filteredItems.slice(0, 8).map(product => {
        return (
            <Cards name={product.name} image={product.image} price={product.price} />
        )
    })


    return (
        <section>
            <div className='max-w-[1400px] mx-auto px-10 py-20 mt-0'>
                {/* heading */}
                <Heading highlight='Our' heading='Products' />
                {/* Tabs */}
                <div className='flex flex-wrap gap-3 justify-center mt-10 md:flex-nowrap'>
                    {categories.map((category) => {
                        return (
                            <button
                                key={category}
                                className={`px-5 py-2 text-lg rounded-lg cursor-pointer
                                ${activeTab === category ? 'bg-gradient-to-b from-orange-400 to-orange-500' : 'bg-zinc-100'}`}
                                onClick={() => setactiveTab(category)}
                            >
                                {category}
                            </button>
                        );
                    })}
                </div>


                {/* product listing */}
                <div className='grid grid-cols-1 md:grid-cols-4 mt-20 gap-9'>
                    {renderCards}
                </div>

                {/* view all button */}
                <div className='mt-15 mx-auto w-fit'>
                    <Button btnText='View All' />
                </div>
            </div>

        </section>
    )
}

export default Products


