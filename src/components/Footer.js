import React from "react"
// import logo1 from "./pic/f_logo.png"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='conatiner text-center top'>
          <div className='img'>
            {/* <img src={logo1} alt='' /> */}
          </div>
          <p>
            © 2022 All rights reserved, made with <i  style={{color: "red"}} className='far fa-heart  '/> by Bethwel Rono
            </p>
        </div>
      </footer>
    </>
  )
}

export default Footer