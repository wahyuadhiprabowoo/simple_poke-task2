import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import NotFound from "../pages/NotFound";
import Footer from "../components/Footer";
import Header from "../components/Header";

const index = () => {
       return (
              <BrowserRouter>
                     <Header />
                     <Routes>
                            <Route path="/" element={<Home />}></Route>
                            <Route path="/detail-pokemon/:id" element={<Detail />}></Route>
                            <Route path="*" element={<NotFound />} />
                     </Routes>
                     <Footer />
              </BrowserRouter>
       );
};

export default index;
