import React, { useState } from "react"
import contact1 from "./contact1.png"
import "./Contact.css"

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    subject: "",
    message: "",})

  const InputEvent = (event) => {
    const { name, value } = event.target

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      }
    })
  }

  const formSubmit = (event) => {
    event.preventDefault()
    alert(
      "submitted successfully"
	
    )
  }
  return (
    <>
      <section className='Contact' id='contact'>
        <div className='container top'>
          <div className='heading text-center'>
            
            <h1>Contact Me</h1>
          </div>

          <div className='content d_flex'>
            <div className='left'>
              <div className='box box_shodow'>
                <div className='img'>
                  <img src={contact1} alt='' />
                </div>
                <div className='details'>
                  <h1>Bethwel Rono</h1>
                  <p>Full Stack Software Developer</p>
                  <p>I am available for freelance work. Connect with me via:</p> 
                  <p><span style={{color: "crimson"}} className="crimson-text" >Phone: +254705302628</span></p>
                  <p><span style={{color: "crimson"}} className="crimson-text" >Email: betwelmusin@gmail.com</span></p> <br />
                  <span>FIND ME ON:</span>
                  <div className='button f_flex'>
                    <button className='btn_shadow'>
                      <a href="https://github.com/bethwelmusin" target="_blank" ><i class='fab fa-facebook-f'></i></a>
                    </button>
                    <button className='btn_shadow'>
                     <a href="https://www.instagram.com/bethwelmusin/?hl=en" target="_blank"><i class='fab fa-instagram'></i></a> 
                    </button>
                    <button className='btn_shadow'>
                      <a href="https://www.linkedin.com/in/bethwel-rono-37449720a/" target="_blank" ><i class='fab fa-linkedin-in'></i></a>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className='right box_shodow'>
              <form onSubmit={formSubmit}>
                <div className='f_flex'>
                  <div className='input row'>
                    <span>YOUR NAME</span>
                    <input type='text' name='fullname' value={data.fullname} onChange={InputEvent} />
                  </div>
                  <div className='input row'>
                    <span>PHONE NUMBER </span>
                    <input type='number' name='phone' value={data.phone} onChange={InputEvent} />
                  </div>
                </div>
                <div className='input'>
                  <span>EMAIL </span>
                  <input type='email' name='email' value={data.email} onChange={InputEvent} />
                </div>
                <div className='input'>
                  <span>SUBJECT </span>
                  <input type='text' name='subject' value={data.subject} onChange={InputEvent} />
                </div>
                <div className='input'>
                  <span>YOUR MESSAGE </span>
                  <textarea cols='30' rows='10' name='message' value={data.message} onChange={InputEvent}></textarea>
                </div>
                <button className='btn_shadow'>
                  SEND MESSAGE <i className='fa fa-long-arrow-right'></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact