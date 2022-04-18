import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import BoardPage from "./components/BoardPage";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import WebPage from "./components/WebPage";
import CssPage from "./components/CssPage";
import JavascriptPage from "./components/JavascriptPage";
import ReactPage from "./components/ReactPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<MainPage />}></Route>
          <Route path='/web0' element={<WebPage />}></Route>
          <Route path='/css0' element={<CssPage />}></Route>
          <Route path='/javascript0' element={<JavascriptPage />}></Route>
          <Route path='/react0' element={<ReactPage />}></Route>
          <Route path='/board' element={<BoardPage />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
