import './App.css';
import About from './components/About/About';
import HeaderMain from './components/HeaderMain/HeaderMain';

import HomeNavbar from './components/HomeNavbar/HomeNavbar';


function App() {
  return (
    <div >
      <HomeNavbar></HomeNavbar>
      <HeaderMain/>
      <About/>
    </div>
  );
}

export default App;
