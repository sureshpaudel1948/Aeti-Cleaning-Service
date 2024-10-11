import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Services from './pages/Services';
import CommercialQuoteForm from './components/CommercialQuoteForm';
import ResidentialQuoteForm from './components/ResidentialQuoteForm'; 
import DeepCleaningQuoteForm from './components/DeepCleaningQuoteForm'; 
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />

           {/* Add the new routes for the Quote Forms */}
           <Route path="/commercial-quote" element={<CommercialQuoteForm />} />
        <Route path="/residential-quote" element={<ResidentialQuoteForm />} />
        <Route path="/deep-quote" element={<DeepCleaningQuoteForm />} />
        
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
