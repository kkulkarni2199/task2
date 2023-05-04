
import './App.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Form from "./Form";
import Result from "./Result";
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <>
    <body>
    <Header />
    <Router>
      <Routes>
        <Route path="/" exact element={<Form />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
    <Footer/>
    </body>
    </>
  );

}

export default App;
