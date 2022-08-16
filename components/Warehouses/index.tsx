import Cards from "./Cards";
import SearchBar from "../common/Search/SearchBar";
import OptionsMenu from "../common/Cards/OptionsMenu";
import Header from "../common/Header";
const WarehousesPage = () => {
  return(
    <>
  <Header/>
  <div className="mt-6 mx-20">

  <div className="flex gap-10">

    <OptionsMenu/>
    <div className="flex  flex-col gap-6">

    <SearchBar/>
    <Cards/>
    </div>
  </div>
  </div>
    </>
  
  );
};

export default WarehousesPage;
