import './App.css';
import Hero from './components/Hero/Hero';
import Join from './components/Hero/Join/Join';
import Plans from './components/Hero/Plans/Plans';
import Footer from './components/Hero/Footer/Footer';
import Programs from './components/Hero/Programs/Programs';
import Reasons from './components/Hero/Reasons/Reasons';
import Testimonials from './components/Hero/Testimonials/Testimonials';

function App() {
  return (
    <div className="App">
       <Hero/>
       <Programs/>
       <Reasons/>
       <Plans/>
       <Testimonials />
       <Join />
       <Footer/>
       
    </div>
  );
}

export default App;
