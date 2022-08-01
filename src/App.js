import { Aesthetic } from './Components/Aesthetic/Aesthetic';
import Frame from './Components/Frame/Frame';
import Hero from './Components/Hero/Hero'
import Store from './Components/Store/Store'
import Manufacturer from './Components/Manufacturer/Manufacturer'
import Products from './Components/Products/Products';
import Testimonials from './Components/Testimonial/Testimonials';
import Discount from './Components/Discount/Discount';
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <>
      <Hero />
      <Frame/>
      <Aesthetic />
      <Store />
      <Manufacturer />
      <Products />
      <Testimonials />
      <Discount />
      <Footer />
    </>
  );
}

export default App;
