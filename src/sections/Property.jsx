import { properties } from "../constants";

const Property = () => {
  return (
    <div className="pt-24">
        <div className=" container">
            <div className="text-center mx-auto animate-fadeIn h-[600px]">
                <h1 className="mb-3 text-[34px] font-semibold">
                Property Types
                </h1>
                <p className="text-[16px] lg:text-xl w-4/5 mx-auto lg:w-1/2 mb-5">Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd
                 vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
            <div className="grid lg:grid-cols-4 gap-4 px-5 pt-10 rounded-sm hover:bg-white">
                    {
                        properties.map((el)=>{
                            return(
                                <div key={el.id} className="flex flex-col items-center bg-indigo-700 py-5 rounded-lg">
                                    <div className="w-4/5">
                                    <div className="bg-red-500 py-5 rounded-lg">
                                    <div className=" rounded-full h-20 w-20 bg-slate-100 
                                    border-dashed border-2 border-green-600 relative mx-auto">
                                    <img src={el.img} alt={el.name} className=" w-11 h-11 mx-auto inset-y-0 absolute inset-x-0 top-3"/>
                                    </div>
                                    <h4 className="mt-2 text-center font-semibold">{el.title}</h4>
                                    <p className="mt-2 text-center font-medium">{el.propertiesquantity}</p>
                                    </div>
                                    </div>
                                </div>
                            )
                        })
                    }
            </div>
            </div>
            
        </div>
    </div>
  )
}

export default Property