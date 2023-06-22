import React, { useRef, useState } from 'react'
import './admin.css'
import {Button, Overlay} from 'react-bootstrap'
import {BsPlusCircle} from 'react-icons/bs'
import {AiOutlineClose} from 'react-icons/ai'

const Admin = () => {
  const [show, setShow] = useState(false);
  const target = useRef(null);
    return (
    <div className='bd'>
        <div className='title'>Trại Ong Vui Vẻ</div>
        {/* <button>
          <div className='btn'>Flower</div>
          <div className='btn'>Map</div>
        </button> */}
        <Button variant="danger" ref={target} onClick={() => setShow(!show)} className='open'>
        <BsPlusCircle 
              size={50}
              color='#b33939'
            />
        </Button>
        <Overlay target={target.current} show={show} placement="right" >
        {({
          placement: _placement,
          arrowProps: _arrowProps,
          show: _show,
          popper: _popper,
          hasDoneInitialMeasure: _hasDoneInitialMeasure,
          ...props
        }) => (
          <div className="form"
            {...props} 
          >
              <div className='wrapper'>
         <button className='close' onClick={()=> setShow(!show)}>
          <AiOutlineClose
          />
         </button>
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
              <div className='bt'>
               <button type='submit' className='btn'> Submit</button>
              </div>
            </form>
          </div>
        </div> 
          </div>
        )}
      </Overlay>
      
         
    </div>

    )
}
export default Admin