import { Link, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Details from "./components/Details";
import Create from "./components/Create";

function App() {
  const {search,pathname} = useLocation();
  return (
    <div className="h-screen w-screen flex">
      {(pathname !="/" || search.length > 0) && (
        <Link to="/" className="text-red-300 absolute left-[17%] top-[5%]">Home</Link>
      )}
      
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/details/:id" element={<Details/>} />
      <Route path="/create" element={<Create/>} />

    </Routes>

    
    </div>
  );
}

export default App;
