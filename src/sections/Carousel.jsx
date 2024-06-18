import carousel2 from "../assets/images/carousel-1.jpg";
import Button from "../components/Button";
import Nav from "../components/Nav";

const Carousel = () => {
  return (
    <>
    <Nav />
    <div className="relative top-10 bg-black lg:top-0 items-center">
        <div>
            <img src={carousel2} alt="" />
            <div className="absolute top-40 flex flex-col px-10">
            <button className="bg-green-500 mb-5 p-4 rounded-full">
                next
            </button>
            <button className="bg-green-500 p-4 rounded-full">
                prev
            </button>
            </div>
        </div>
        <div className="mt-8 w-2/3 mx-auto p-5">
            <h1 className=" animate-fadeIn text-3xl text-white
             text-wrap font-bold mb-4 pt-2">
                Find A  
                 <span className="text-green-400"> Perfect Home </span>
                To Live With Your Family
            </h1>
            <p className=" animate-fadeIn text-white mb-6 pb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit pariatur libero nostrum debitis rem architecto?
            </p>
            <div className="mt-10">
            <Button title={"Get Started"} style={"py-3 px-5 me-3 rounded-sm"}/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Carousel