import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import AmentiesScroll from './components/AmenitiesScroll';
import Amenities from './components/Amenities';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import RoomsShowcase from './components/RoomSection';
import LocationSection from './components/LocationSection';


const Home = () => {
  return (
    <>
    <Hero />
    <About />
    <Stats />
    <AmentiesScroll />
    <Gallery />
    <RoomsShowcase />
    <Amenities />
    <LocationSection />
    <Footer />
    </>
  )
}

export default Home