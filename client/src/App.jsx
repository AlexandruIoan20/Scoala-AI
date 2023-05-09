import React from 'react';
import NavBar from './components/NavBar'; 
import HomePage from './pages/HomePage';
import GPTs from './pages/GPTs';
import GptDetail from './pages/GptDetail';
import FAQ from './pages/FAQ';
import ErrorPage from './pages/ErrorPage';
import GeneralInformations from './pages/GeneralInformations';
import { Routes, Route } from 'react-router-dom';

const App = () => { 
  return ( 
    <section className='app'>
      <NavBar/> 

      <Routes>
        <Route path='/' element = { <HomePage /> } />
        <Route path = "/gpts" element = { <GPTs /> } />
        <Route path = "/gpts/:id" element = { <GptDetail /> } />  
        <Route path = "/general" element = { <GeneralInformations /> } /> 
        <Route path = "/faq" element = { <FAQ /> } /> 
        <Route path = "/*" element = { <ErrorPage /> } /> 
      </Routes>
    </section>
  )
}

export default App
