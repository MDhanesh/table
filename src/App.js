import { BrowserRouter, Route, Routes } from "react-router-dom";
import Table from "./table";
import TableSecond from "./table2";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Table />} />
          <Route path="/second" element={<TableSecond />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
