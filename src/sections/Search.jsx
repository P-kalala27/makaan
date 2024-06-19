import Button from "../components/Button";

const option = ["Property Type 1", "Property Type 2", "Property Type 3"];
const location = ["Locaton 1", "Locaton 2", "Locaton 3"];
const Search = () => {
  return (
    <div className="bg-green-300 mt-8 lg:mt-0">
        <div>
          <div className="p-10 flex flex-col justify-between py-4">
             <div>
              <input type="Search Keyword" />
             </div>
             <div>
              <select name="Property Type" id="">
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
             <div>
              <select name="Property Type" id="">
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
             <div>
             <Button title={"Get Started"} style={"py-4 px-10 me-3 rounded-lg text-2xl mb-14"}/>
             </div>
          </div>
        </div>
    </div>
  )
}

export default Search