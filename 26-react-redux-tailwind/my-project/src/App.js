import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Detail from "./pages/Detail"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import PageContainer from "./containers/PageContainer";


function App() {
  return (
    <div className="App">
     <PageContainer>
     <BrowserRouter>
     <Navbar />
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="detail/:id" element={<Detail />}/>
       </Routes>
     <Footer />
     </BrowserRouter>
     </PageContainer> 
    </div>
  );
}

export default App;
