import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import MovieCard from './components/MovieCard'

function App() {
  return (
    <>
      <MovieCard movie={{title: "Tim's Film", release_date:"2024, "}}/> 
      <MovieCard movie={{title: "Joes Film", release_date:"2020, "}}/>      
   </>
    
  ); 
}

export default App
