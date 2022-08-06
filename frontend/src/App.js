
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import WorkoutForm from "./components/WorkoutForm";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<WorkoutForm />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
