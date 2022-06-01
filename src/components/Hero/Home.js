import React from "react"
import "./Home.css"
import hero from "../Pics/hero.png"
import skill1 from "../Pics/skill1.png"
import skill2 from "../Pics/skill2.png"
import skill3 from "../Pics/skill3.png"
// import { Typewriter } from "react-simple-typewriter"

const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3>WELCOME TO MY PORTFOLIO</h3>
            <h1>
              Hi, I'm <span>Bethwel Rono</span>
            </h1>
            <h2>
              a <span>python and javascript Developer</span>
            </h2>

            <p>
              <spam style={{color:"Crimson"}} >Best skills on</spam> :<br></br>Python & Django,javascript(Angular&React js) , RESTFUL API, web API, .NET
              Framework,C#, WordPress& Docker/kubernetes.<br></br>

             <spam style={{color:"Crimson"}}>DBMS:</spam><br></br>

              SQL, SQLite, PostgreSQL, Mongo DB<br></br>

             <spam style={{color:"Crimson"}}> Design:</spam><br></br>
              • HTML & CSS,
              • Bootstrap CSS, materialize CSS<br></br>

              <span style={{color:"Crimson"}}>Version Control:</span><br></br>
              GitHub. https://github.com/bethwelmusin
              
            </p>

            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>FIND ME ON:</h4>
                <div className='button'>
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
              <div className='col_1'>
                <h4>BEST SKILL ON</h4>
                <button className='btn_shadow'>
                  <img src={skill1} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill2} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill3} alt='' />
                </button>
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={hero} alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home