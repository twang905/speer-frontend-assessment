import './App.css';
import LandingPage from './components/LandingPage';
import PricingPage from './components/PricingPage';
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PaymentPage from './components/PaymentPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* routes */}
          <Route path="/" exact component={LandingPage} />
          <Route path="/pricing" component={PricingPage} />
          <Route path="/payment" component={PaymentPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
