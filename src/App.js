import { BrowserRouter, Routes, Route } from "react-router-dom";
import Basic from "./Basic";
import Airtable from "./Airtable";
import Product from "./Product";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:productID" element={<Product />} />
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //   <Basic />
    //   <Airtable />
    // </div>
  );
}

export default App;
