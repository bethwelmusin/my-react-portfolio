import React, { useState } from "react"
import portfolio1 from "./image/portfolio1.png"
import portfolio3 from "./image/portfolio3.png"


const Card = (props) => {
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }

  if (modal) {
    document.body.classList.add("active-modal")
  } else {
    document.body.classList.remove("active-modal")
  }
  return (
    <>
      <div className='box btn_shadow '>
        <div className='img'>
          <img src={portfolio1} alt='' onClick={toggleModal} />
        </div>
        <div className='category d_flex'>
          <span onClick={toggleModal}>{props.category}</span>
          <label>
            <i className='far fa-heart'></i> {props.totalLike}
          </label>
        </div>
        <div className='title'>
          <h2 onClick={toggleModal}>{props.title}</h2>
          <a href='#popup' className='arrow' onClick={toggleModal}>
            <i class='fas fa-arrow-right'></i>
          </a>
        </div>
      </div>

      {/* Popup box */}
      {modal && (
        <div className='modal'>
          <div onClick={toggleModal} className='overlay'></div>
          <div className='modal-content d_flex'>
            <div className='modal-img left'>
              <img src={portfolio3} alt='' />
            </div>
            <div className='modal-text right'>
              <span>Web Development</span>
              
              <p> I was part of the team that recreated pongshop site. Pong Shop is an online tech store  based in Kenya and owned by Pong Agencies Limited.It supplies customers with most IT equipment  from smartphones, tablets, laptops , Cameras, printers, networking devices, 
                software and other ICT products at affordable prices accompanied by stellar customer service.
                <br></br>
                  <a href="https://pongafrica.shop" target="_blank"><span style={{color: "crimson"}} className="crimson-text" >VIEW PROJECT</span></a>
                </p>
              <p> </p>
              <div className='button f_flex mtop'>
                <button className='btn_shadow'>
                  LIKE THIS <i class='far fa-thumbs-up'></i>
                </button>
              </div>

              
              <button className='close-modal btn_shadow' onClick={toggleModal}>
                <i class='fas fa-times'></i>
              </button>
            </div>
            
          </div>
        </div>

        





        
      )}
    </>
  )
}

export default Card