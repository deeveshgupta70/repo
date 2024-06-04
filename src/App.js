import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BookShelf from "./pages/BookShelf";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookshelf" element={<BookShelf />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
