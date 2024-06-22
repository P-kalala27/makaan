import Carousel from "./sections/Carousel";
import HeroPart from "./sections/HeroPart";
import Property from "./sections/Property";


const App = () => {
  return (
    <div className="w-full animate-fadeIn scroll-smooth">      
      <section className="lg:w-[1400px] lg:mx-auto">
      <Carousel />
      <Property />
      </section>
      <section className="lg:w-[1400px] lg:mx-auto">
        < HeroPart/>
      </section>
    </div>
  )
}

export default App