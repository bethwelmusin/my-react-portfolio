import React from "react"

const Card = (props) => {
  return (
    <>
    
      <div className='box btn_shadow'>
        <img src={props.image} alt='' />
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        <h3><a href={props.link}>{props.link}</a></h3>
       
      </div>
    </>
  )
}

export default Card