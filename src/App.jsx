import styles from "./style";
import { Route, Routes } from "react-router-dom";

import { Footer, Navbar } from "./components";
import MainPage from "./pages/MainPage";
import Explore from "./pages/Explore";
import About from "./pages/About";

const App = () => (
  <>
    <div className="bg-primary w-full  overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route exact path="/explore" element={<Explore />} />
        <Route exact path="/about" element={<About />} />
      </Routes>

      <div className={`bg-black ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  </>
);

export default App;
