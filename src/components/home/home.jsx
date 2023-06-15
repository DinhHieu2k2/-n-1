import React from 'react'
import b from '../img/b.jpg'
import './home.css'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  return (
  <div className='header'>
    <div  className='main'>
      <h2 className='logo'>Farmhouse</h2>
    </div>
    <div className='center'>
        <div className='title'>Trại Ong Vui Vẻ</div>
        <button>
          <div className='btn'>Flower</div>
          <div className='btn'>Map</div>
        </button>
      </div>
  </div>  
  )
}

export default Home