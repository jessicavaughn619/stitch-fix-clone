import Header from './components/header/Header';
import HomeHeader from './components/body/HomeHeader';
import { Routes, Route } from 'react-router-dom'
import data from './components/body/homeheader-content';

export default function App() {

  const womenStyle = data.find(item => item.style === "women")
  const menStyle = data.find(item => item.style === "men")
  const kidsStyle = data.find(item => item.style === "kids")

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' element={
          <HomeHeader data={womenStyle}/>}
          />
        <Route path='/women' element={
          <HomeHeader data={womenStyle}/>}
          />
        <Route path='/men' element={
          <HomeHeader data={menStyle}/>}
          />
        <Route path='/kids' element={
          <HomeHeader data={kidsStyle}/>}
          />
      </Routes>
    </div>
  );
}
