import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import bgImage from '../../assets/fruits-banner.jpg'

const Fruits = () => {
  return (
    <div>
      <CategoryPage bg={bgImage} title='Fruits & Vagies' categories={['Vegetables','Fruits']}/>
    </div>
  )
}

export default Fruits
