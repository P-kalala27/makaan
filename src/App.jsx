import Carousel from "./sections/Carousel";
import Property from "./sections/Property";


const App = () => {
  return (
    <div className="w-full animate-fadeIn">      
      <section className="lg:w-[1400px] lg:mx-auto">
      <Carousel />
      <Property />
      </section>
    </div>
  )
}

export default App