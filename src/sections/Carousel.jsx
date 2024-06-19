import carousel2 from "../assets/images/carousel-1.jpg";
import Button from "../components/Button";
import Nav from "../components/Nav";
import Search from "./Search";

const Carousel = () => {
  return (
    <>
    <Nav />
    <div className="relative top-10 lg:top-0 items-center
     lg:flex lg:flex-row-reverse">
        <div>
            <img src={carousel2} alt="" />
            <div className="absolute top-40 flex flex-col px-10 lg:top-64 lg:px-0">
            <button className="bg-green-500 mb-5 p-4 rounded-full">
                next
            </button>
            <button className="bg-green-500 p-4 rounded-full">
                prev
            </button>
            </div>
        </div>
        <div className="mt-8 w-3/4 mx-auto p-2
        lg:w-2/4 lg:p-2  lg:flex lg:flex-col lg:px-10">
            <h1 className=" animate-fadeIn lg:leading-tight text-4xl text-black
             text-wrap font-bold mb-4 pt-2 lg:text-5xl">
                Find A  
                 <span className="text-green-400"> Perfect Home  </span>
                     To Live With Your Family
            </h1>
            <p className=" animate-fadeIn text-black font-medium leading-snug
             mb-6 pb-3 space-y-2 text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit pariatur libero nostrum debitis rem architecto?
            </p>
            <div className="mt-10 lg:mt-2">
            <Button title={"Get Started"} style={"py-4 px-8 me-3 rounded-lg text-2xl mb-14"}/>
            </div>
        </div>
    </div>
        <Search/>
    </>
  )
}

export default Carousel