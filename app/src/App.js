import Header from './components/header/Header';
import Home from './components/home/Home';
import { Routes, Route } from 'react-router-dom'
import Footer from './components/footer/Footer';
import data from './components/home/homeHeader/homeHeader-content';
import { Context } from './context';

export default function App() {
  const siteData = data;

  const homeStyle = siteData.find(item => item.style === "home")
  const womenStyle = siteData.find(item => item.style === "women")
  const menStyle = siteData.find(item => item.style === "men")
  const kidsStyle = siteData.find(item => item.style === "kids")

  return (
    <Context.Provider value={siteData}>
    <div className="App">
      <Header />
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
      <Footer />
    </div>
    </Context.Provider>
  );
}
