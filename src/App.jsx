import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Explore from './components/Explore';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-space-black">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Explore />
      <Footer />
    </div>
  );
}

export default App;
