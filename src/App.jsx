
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import BankOffer from './components/BankOffer';
import CategoryIcons from './components/CategoryIcons';
import Footer from './components/Footer';
import './App.css';

const App = () => {
    return (
        <div className="app">
            <Navbar />
             <Banner />
             <BankOffer />
           <CategoryIcons />  
           <Footer />
        </div>
    );
};

export default App;
