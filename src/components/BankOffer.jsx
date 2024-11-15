
import './BankOffer.css';
import axis_bank from '../assets/axis_bank.png';

const BankOffer = () => {
    return (
        <div className="bank-offer">
            <img src={axis_bank}alt="Axis Bank" />
            <p>Extra 10% off on Axis Bank Credit Cards on orders above ₹1000.</p>
        </div>
    );
};

export default BankOffer;
