import React from 'react'
import './admin.css'
import { useNavigate } from 'react-router-dom'
import {BsPlusCircle} from 'react-icons/bs'
import {AiOutlineClose} from 'react-icons/ai'

const Admin = () => {
    return (
    <div className='bd'>
        <div className='ct'>
        <div className='title'>Trại Ong Vui Vẻ</div>
        <button>
          <div className='btn'>Flower</div>
          <div className='btn'>Map</div>
        </button>
        <h2 className='plus'>
            <button>
             <BsPlusCircle 
              size={50}
              color='#ffffff'
            />
            </button>
        </h2>   
        <div className='wrapper'>
         <div className='close'>
          <AiOutlineClose
          />
         </div>
          <div className='conseil'>
            <h2>Phấn hoa</h2>
            <form action='#'>
              <div className='item'>
                <input type='name'/>
                <label>Name</label>
              </div>
              <div className='item'>
                <input type='scientificname'/>
                <label>Scientificname</label>
              </div>
              <div className='item'>
                <input type='commonname'/>
                <label>Commonname</label>
              </div>
              <div className='item'>
                <input type='order'/>
                <label>Oder</label>
              </div>
              <div className='item'>
                <input type='family'/>
                <label>Family</label>
              </div>
              <div className='item'>
                <input type='genus'/>
                <label>Genus</label>
              </div>
              <div className='item'>
                <input type='shape'/>
                <label>Shape</label>
              </div>
              <div className='item'>
                <input type='size'/>
                <label>Size</label>
              </div>
              <div className='item'>
                <input type='surface'/>
                <label>Surface</label>
              </div>
              <div className='item'>
                <input type='aperture type'/>
                <label>Aperture type</label>
              </div>
              <div className='item'>
                <input type='exine,section'/>
                <label>Exine,section</label>
              </div>
              <div className='item'>
                <input type='other structure features'/>
                <label>Other structure features</label>
              </div>
               <button type='submit' className='btn'> Submit</button>
            </form>
          </div>
        </div> 
         
      </div>
    </div>

    )
}
export default Admin