import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import bgImage from '../../assets/seafood-banner.jpg'

const Seafood = () => {
  return (
    <div>
       <CategoryPage bg={bgImage} title="Meat's & Seafood" categories={['SeaFood','Meat']}/>
    </div>
  )
}

export default Seafood
