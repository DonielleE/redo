import React from 'react';
// import Password from '../../image/password.jpeg';
// import Quiz from '../../images/quiz.jpg';
// import Pro from '../../images/pro.png';
// import Schedule from '../../image/schedule.jpeg';
export default function Portfolio() {
    return (
      <div>
        <h1>Portfolio</h1>
        
  
              <h3>Projects:</h3>
              
  
                  <div class="container-md">
                      <h5>- Quiz </h5>
                      <a href="https://doniellee.github.io/Quiz/">Link to Live Deployment</a>
                      <br />
                      <a href="https://github.com/DonielleE/Quiz.git"> Link to Github Repository</a>
                      <br />
                      {/* <img class="container-sm" src={Quiz} width="300" height="300"/> */}
                  </div>
  
                  <div class="container-md">
                      <h5>- Cocktail Search-Engine</h5>
                      <a href="https://nickleon92.github.io/Project-1/"> Link to Live Deployment</a>
                      <br />
                      <a href="https://github.com/NickLeon92/Project-1.git">Link to Github Repository</a>
                      <br />
                      {/* <img class="container-sm" src={Pro} width="250" height="250" /> */}
                  </div>
                  
                  <div class="container-md">
                      <h5>- Scheduler</h5>
                      <a href="https://doniellee.github.io/schedule/">Link to Live Deployment</a>
                      <br />
                      <a href="https://github.com/DonielleE/schedule">Link to Github Repository</a>
                      <br />
                      {/* <img class="container-sm" src={Schedule} width="300" height="300"/> */}
                  </div>
  
                  <div class="container-md">
                      <h5>- Password Generator</h5>
                      <a href="https://doniellee.github.io/passwordgen/">Link to Live Deployment</a>
                      <br />
                      <a href="https://github.com/DonielleE/passwordgen.git">Link to Github Repository</a>
                      <br />
                      {/* <img class="container-sm" src={Password} width="300" height="300"/> */}
                  </div>
  
              </div>
          
      
    );
  }
  