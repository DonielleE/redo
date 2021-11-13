
import React from 'react';
import img from '../../image/doni.jpg';

export default function About() {
  return (
    <><h1>About Me</h1><><section id="About-Me" class="container">
      <div class="text-block">


        <img class="image2" src={img} alt="photo" width="200" height="100" />

        <p class="container">
         A health care porffesional who is seeking a career change as Web developer.
         Im currently enrolled in the full stack coding bootcamp at the University of Richmond.
         I have developed a strong interest in web developmenent since taking the courses.
         I beieve that my 13 year run in healthcare has provided me with a strong proffesinial, problem solving, diligint background along with my personl 
         interest in problem solving music and art can become a true assest in the world of tech.
        </p>
      </div>

    </section></></>
  );
}
