import React from 'react'
import './Shop.css'
import Hero from '../components/Hero/Hero'
import Poplar from '../components/Popular/Poplar'
import Offers from '../components/Offers/Offers'
import NewCollections from '../components/NewCollections/NewCollections'
import NewsLatter from '../components/NewsLatter/NewsLatter'
const Shop = () => {
  return (
    <div>
        <Hero/>
        <Poplar />
        <Offers />
        <NewCollections />
        <NewsLatter />
    </div>
   
  )
}

export default Shop
