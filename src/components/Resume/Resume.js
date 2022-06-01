import React from "react"
import "./Resume.css"
import ResumeApi from "./ResumeApi"
import Card from "./Card"
import myCV from "./myCV.pdf"


const Resume = () => {
  return (
    <>
      <section className='Resume' id='resume'>
        <div className='container top'>
          <div className='heading text-center'>
            <h4>1+ YEARS OF EXPERIENCE</h4>
            <h2>My Resume</h2>
            <br></br>
            <div className="cv">
              <a href={myCV} download ="Bethwel-cv" ><bold><i className="fas fa-download"/>   Download Resume</bold></a> 
            </div>
          </div>

          <div className='content-section mtop d_flex'>
            <div className='left'>
              <div className='heading'>
                <h4>2004-2021</h4>
                <h1> EDUCATION</h1>
              </div>

              <div className='content'>
                {ResumeApi.map((val, id) => {
                  if (val.category === "education") {
                    return <Card key={id} title={val.title} year={val.year} desc={val.desc} />
                  }
                })}

              </div>
            </div>
            <div className='left'>
              <div className='heading'>
                <h4>2021-2022</h4>
                <h1>Job Experience</h1>
              </div>

              <div className='content'>
                {ResumeApi.map((val, index) => {
                  if (val.category === "experience") {
                    return <Card key={index} title={val.title} year={val.year} rate={val.rate} desc={val.desc} />
                  }
                })}
              </div>
            </div>
          </div>
        </div>
        
        
      </section>
    </>
  )
}

export default Resume