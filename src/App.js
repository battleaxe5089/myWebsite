import React, { useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; 
import './App.css';
import About from './About';
import Skills from './Skills';
import Education from './Education';
import Projects from './Projects';
import Contact from './Contact';


function App() {
  useEffect(() => {
    const sections = ['about', 'skills', 'education', 'projects', 'contact'];

    sections.forEach(sectionId => {
      const section = document.getElementById(sectionId);

      if (section) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                section.classList.add('visible');
              } else {
                section.classList.remove('visible');
              }
            });
          },
          { threshold: 0.5 } 
        );

        observer.observe(section);

        return () => {
          observer.disconnect();
        };
      }
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Karch Hertelendy</h1>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <div id="home" className="App-section">
        <Home />
      </div>
      <div id="about" className="App-section">
        <About />
      </div>
      <div id="skills" className="App-section">
        <Skills />
      </div>
      <div id="education" className="App-section">
        <Education />
      </div>
      <div id="projects" className="App-section">
        <Projects />
      </div>
      <div id="contact" className="App-section">
        <Contact />
      </div>
    </div>
  )
}


function Home() {
  return (
    <div className="App-main">
      <aside className="App-sidebar">
        <div className="App-picture">
          <img src="/profilePic.jpg" alt="Profile" />
        </div>
        <div className="App-info">
          <p>Karch Hertelendy</p>
          <p>Saint Charles, Missouri</p>
          <p>July 17th 2000</p>
        </div>
      </aside>
      <section className="App-content">
        <p>Dedicated IT professional with a strong foundation in project management and a range of technical skills. Seeking a position where I can contribute my expertise in IT, project management, and continue to develop my skills.
        </p>
      </section>
    </div>
  );
}



export default App;
