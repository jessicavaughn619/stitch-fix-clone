import Header from './components/header/Header';
import Home from './components/home/Home';
import { Routes, Route } from 'react-router-dom'
import data from './components/home/homeheader-content';
import Footer from './components/footer/Footer';

export default function App() {

  const womenStyle = data.find(item => item.style === "women")
  const menStyle = data.find(item => item.style === "men")
  const kidsStyle = data.find(item => item.style === "kids")

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' element={
          <Home data={womenStyle}/>}
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
  );
}
