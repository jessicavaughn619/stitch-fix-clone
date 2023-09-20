import Header from './components/header/Header';
import HomeHeader from './components/body/HomeHeader';
import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={
          <HomeHeader />}
          />
      </Routes>
    </div>
  );
}
