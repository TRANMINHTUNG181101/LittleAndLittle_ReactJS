import "./App.css";
import Header from "./components/Header/Header";
import "./styles/index.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage/HomePage";
import EnventPage from "./pages/EventPage/EventPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import EventDetailts from "./pages/EventDetailts/EventDetailts";
import PaymentPage from "./pages/PaymentPage/PaymentPage";
import SuccessPage from "./pages/SuccessPage/SuccessPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/envent" element={<EnventPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/event-detailts" element={<EventDetailts />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </div>
  );
}

export default App;
