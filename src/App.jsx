import Carousel from "./sections/Carousel";
import Search from "./sections/Search";


const App = () => {
  return (
    <div className="w-full">      
      <section className="lg:w-[1400px] lg:mx-auto">
      <Carousel />
      <Search />
      </section>
    </div>
  )
}

export default App