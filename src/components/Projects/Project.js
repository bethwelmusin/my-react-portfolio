import React from 'react';
import data from "../Projects/data";
import Card from './Card1';
import "./project.css"



const Project = () => {
  return (

    <>
    <section className='project top' id='features'>
      <div className='container'>
        <div className='heading'>
          <h1>PROJECTS</h1>
        </div>

        <div className='content grid'>
          {data.map((val, index) => {
            return <Card key={index} image={val.image} title={val.title} desc={val.desc} link={val.link}/>
          })}

        </div>
      </div>
    </section>
  </>
);
  
}

export default Project

