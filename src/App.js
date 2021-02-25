import './App.css';
import LandingPage from './components/LandingPage';
import PricingPage from './components/PricingPage';
import Navbar from './components/shared/Navbar';
import ContactSection from './components/shared/ContactSection';
import Footer from './components/shared/Footer';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/pricing" component={PricingPage} />
        </Switch>
        <ContactSection />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
