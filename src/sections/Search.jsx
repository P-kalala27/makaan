import Button from "../components/Button";

const option = ["Property Type 1", "Property Type 2", "Property Type 3"];
const location = ["Locaton 1", "Locaton 2", "Locaton 3"];
const Search = () => {
  return (
    <div className="bg-green-300 mt-8 lg:mt-0">
        <div className="">
          <div className="pt-10 pb-5 px-10 flex flex-col lg:flex-row ">
             <div className="pb-3 w-full px-3">
             <input className="placeholder:italic placeholder:text-slate-400
              block bg-white 
             w-full border border-slate-300 rounded-md
              py-4 pl-9  shadow-sm focus:outline-none
                focus:ring-1 sm:text-sm" placeholder="Search Keyword"
                 type="text" name="search"
                 />
             </div>
             <div className="pb-3 lg:w-full lg:px-3">
              <select name="Property Type" id=""
               className="bg-white w-full border-slate-300 rounded-md
               py-4 pl-9 shadow-sm focus:outline-none focus:ring-1">
                <option value={""}>Property Type</option>
              {
                option.map((item, index) => {
                  return (
                    <option key={index} value={item}>{item}</option>
                  )
                })
              }
              </select>
             </div>
             <div className="pb-3 lg:w-full lg:px-3">
              <select name="Property Type" id=""
              className="bg-white w-full border-slate-300 rounded-md
              py-4 pl-9 shadow-sm focus:outline-none focus:ring-1">
                <option value={""}>Location</option>
              {
                location.map((item, index) => {
                  return (
                    <option key={index} value={item}>{item}</option>
                  )
                })
              }
              </select>
             </div>
             <div className="lg:w-[700px] ">
             <Button title={"Search"} style={"py-4 w-full me-3 rounded-lg text-2xl mb-14 lg:py-3 lg:mb-0"}/>
             </div>
          </div>
        </div>
    </div>
  )
}

export default Search