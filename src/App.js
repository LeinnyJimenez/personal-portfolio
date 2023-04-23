import React from 'react';
import './App.css';
import { Courses, Hero, PersonalSkills, Projects } from './pages';

function App() {


  return (
    <div>
      <Hero />
      <PersonalSkills />
      <Courses />
      <Projects />
    </div>
  );
}

export default App;
