
import './Banner.css'; // Style accordingly
import dog from '../assets/dog_cat.jpg';

const Banner = () => {
    return (
        <div className="banner" style={{backgroundImage:`url(${dog}) `}}>
            <h2>GOOD FOOD, HAPPY BELLY!</h2>
            <p>Up to 20% OFF Pet Food Brands</p>
            <button>Shop Now</button>
        </div>
    );
};

export default Banner;
