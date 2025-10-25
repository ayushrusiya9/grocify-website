import React from 'react'
import Heading from '../Heading/Heading'
import FruitCat from "../../assets/fruits-and-veggies.png"
import seaFoodCat  from "../../assets/meat-and-seafood.png"
import dairyFoodCat from "../../assets/dairy-and-eggs.png"
import Button from '../Button/Button'

const Category = () => {

    // card
    const renderCards = category.map(card=>{
        return (
            <div className='flex-1 basis-[300px]' key={card.id}>
                {/* card image */}
                <div className='w-full min-h-[30vh] relative -mb-10'>
                    <img src={card.img} alt="" className='absolute bottom-0'/>
                </div>

                {/* card content */}
                <div className='bg-zinc-100 pt-17 p-8 rounded-xl'>
                    <h4 className='text-zinc-800 text-3xl font-bold'>{card.title}</h4>
                    <p className='text-zinc-600 mt-3 mb-9'>{card.description}</p>
                    <Button btnText={'See all'}/>
                </div>
                
            </div>
        )
    })

  return (
    <section>
        <div className='max-w-[1400px] mx-auto px-10 py-20'>
            <Heading highlight='Shop' heading='By Category'/>

        {/* catogery card */}
        <div className='flex flex-wrap gap-10 md:mt-15 mt-10'>
            {renderCards}
        </div>
        </div>
    </section >
  )
}

export default Category


const category = [
    {
        id:1,
        title:"Fruits & Veggies",
        description:"Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables",
        img: FruitCat
    },
    {
        id:2,
        title:"Dairy & Eggs",
        description:"Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses.",
        img: dairyFoodCat
    },
    {
        id:3,
        title:"Meat & SeaFood",
        description:"High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.",
        img: seaFoodCat
    },
]
