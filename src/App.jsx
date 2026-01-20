import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <div className="min-h-screen bg-space-black">
      <Navbar />
      <Hero />
      <Projects />
      <About />
    </div>
  );
}

export default App;
