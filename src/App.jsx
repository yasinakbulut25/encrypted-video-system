import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import EducationDetail from "./components/EducationDetail";
import Home from "./components/Home";
import Error from "./components/Error";
import VideoSystem from "./components/VideoSystem";
import Footer from "./components/Footer";
  
function App() {
  return (
    <>
      <Header />
      <div className="max-w-[1200px] my-4 mx-auto px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/egitim/:educationUrl" element={<EducationDetail />} />
          <Route
            path="/video/:educationUrl/:videoUrl"
            element={<VideoSystem />}
          />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
