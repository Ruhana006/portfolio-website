import './App.css';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import Contact from './components/Contact/Contact';
import HeaderMain from './components/HeaderMain/HeaderMain';

import HomeNavbar from './components/HomeNavbar/HomeNavbar';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';


function App() {
  return (
    <div >
      <HomeNavbar></HomeNavbar>
      <HeaderMain/>
      <About/>
      <Skills/>
      <Projects/>
      <Blogs/>
      <Contact/>
    </div>
  );
}

export default App;
