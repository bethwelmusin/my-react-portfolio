import React from "react"

const Card1 = (props) => {
  return (
    <>
    
      <div className='box btn_shadow'>
        <img src={props.image} alt='' />
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        <h3><a href={props.link}>{props.link}</a></h3>
        <a href={props.link}>
          <i className='fas fa-arrow-right'></i>
        </a>
        <div className='button f_flex mtop'>
              </div>
      </div>
    </>
  )
}

export default Card1

