import OptionsMenu from "../common/Cards/OptionsMenu";
import Header from "../common/Header";
import ApprovalStatus from "./ApprovalStatus";
import Dropdown from "./Dropdown";
import NumberFilter from "./NumberFilter";

import SearchBar from "../common/Search/SearchBar";
import Table from "./Table";
const TransationsPage = () => {
  return (
    <>
      <Header />
      <OptionsMenu />
      <Dropdown />
      <SearchBar />
      <ApprovalStatus />

      <Table />
      <NumberFilter />
    </>
  );
};

export default TransationsPage;
