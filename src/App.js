import "./App.css";
// import BasicTable from "./Components/BasicTable/BasicTable";
import Table from "./Components/Table/Table";
import FilterComp from "./Components/FilterComp/FilterComp";

function App() {
  return (
    <div className="App">
      {/* <BasicTable /> */}
      <FilterComp />
      <Table />
    </div>
  );
}

export default App;
