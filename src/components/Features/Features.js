import React from "react"
import "./Features.css"
import data from "../Features/FeaturesApi"
import Card from "./Card"

const Features = () => {
  return (
    <>
      <section className='features top' id='features'>
        <div className='container'>
          <div className='heading'>
            <h1>SKILLS</h1>
          </div>

          <div className='content grid'>
            {data.map((val, index) => {
              return <Card key={index} image={val.image} title={val.title} desc={val.desc} />
            })}

            
          </div>
        </div>
      </section>
    </>
  )
}

export default Features