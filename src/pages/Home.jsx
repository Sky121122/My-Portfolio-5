import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Stats from '../components/Stats/Stats';
import About from '../components/About/About';
import TechStack from '../components/TechStack/TechStack';
import Projects from '../components/Projects/Projects';
import Experience from '../components/Experience/Experience';
import Services from '../components/Services/Services';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Stats />
        <About />
        <TechStack />
        <Projects />
        {/* <Experience /> */}
        <Services />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default Home;