import logo from './logo.svg';
import './App.css';
import lady from './Lady.png'
import email from './Email.png'
import LinkedIn from './LinkedIn.png'

import twitter from './Twitter.png'
import facebook from './Facebook.png'
import insta from './Instagram.png'
import git from './Github.png'

function App() {
  return (
    <div className="App">
      <div className="main--image">
        <img src = {lady} >
        </img>
      </div>
      <div className="main--text">
        <div className= "main--text_details">
          <h1>Laura Smith</h1>
          <h3>Frontend Developer</h3>
          <p>laurasmith.website</p>
        </div>
      
        <div className= "main--text_button">
          <button id= "btn1"><img src= {email} width = "25px" /> Email</button>
          <button id= "btn2"><img src= {LinkedIn} width = "25px"/> LinkedIn</button>
        </div>

        <div className= "main--text_hobby">
          <h2>About</h2>
          <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>

          <h2>interest</h2>
          <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
        </div>


      </div>
      <footer className="main--footer">
      <img className = "footerImg" src= {twitter} />
      <img className = "footerImg" src= {facebook} />
      <img className = "footerImg" src= {insta} />
      <img className = "footerImg" src= {git} />
      </footer> 
    </div>
  );
}

export default App;
