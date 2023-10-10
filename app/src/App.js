import Header from './components/header/Header';
import Home from './components/home/Home';
import { Routes, Route } from 'react-router-dom'
import Footer from './components/footer/Footer';
import data from './components/home/homeHeader/homeHeader-content';
import { Context } from './context';
import './app.css'
import { useEffect, useState } from 'react';

export default function App() {
  const [isMobile, setIsMobile] = useState(window.matchMedia('(max-width: 768px)').matches)
  const siteData = data;

  const homeStyle = siteData.find(item => item.style === "home")
  const womenStyle = siteData.find(item => item.style === "women")
  const menStyle = siteData.find(item => item.style === "men")
  const kidsStyle = siteData.find(item => item.style === "kids")

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 860px)');
    const handleMediaChange = (e) => {
      setIsMobile(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleMediaChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
    };
  }, []);

  return (
    <Context.Provider value={siteData}>
    <div className="App">
    <div className="wrapper__main_container">
      <Header 
        isMobile={isMobile}
      />
      <Routes>
        <Route exact path='/' element={
          <Home data={homeStyle}/>}
          />
        <Route path='/women' element={
          <Home data={womenStyle}/>}
          />
        <Route path='/men' element={
          <Home data={menStyle}/>}
          />
        <Route path='/kids' element={
          <Home data={kidsStyle}/>}
          />
      </Routes>
      </div>
      <Footer />
    </div>
    </Context.Provider>
  );
}
