import HeroSection from "../Components/HeroSection/HeroSection";
import Navbar from "../Components/Navbar/Navbar.jsx";
import Collections from "../Components/Collections/Collections.jsx";
import Support from "../Components/Support/Support.jsx";


const Home = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <Collections/>
        <Support/>
    </div>
  )
}

export default Home