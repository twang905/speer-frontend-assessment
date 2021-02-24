import './App.css';
import PricingSection from './components/PricingSection';
import PerksSection from './components/PerksSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import TopNavbar from './components/TopNavbar';
import PerksNavbar from './components/PerksNavbar';

function App() {
  return (
    <div className="App">
      <TopNavbar />
      <PricingSection />
      <PerksNavbar />
      <PerksSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
