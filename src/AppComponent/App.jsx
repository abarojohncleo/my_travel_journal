import { useState } from 'react'
import './App.css';
import Navbar from '../NavBarComponent/Navbar';
import Card from  '../CardComponent/Card';
import data from '../../public/data'

function App() {
  const cardData = data.map((item) => {
    return <Card 
      key = {item.id}
      {...item}
    />
  })
  return (
    <div className="App">
      <Navbar/>
      {cardData}
    </div>
  )
}

export default App
