
import './CategoryIcons.css';
import dog from '../assets/dog.jpg';
import cat from '../assets/cat.webp';
import rabbit from '../assets/rabbit.jpg';
import bird from '../assets/bird.jpg';



const categories = [
    { name: 'Dog', icon: dog },
    { name: 'Cat', icon: cat },
    { name: 'Rabbit', icon: rabbit },
    { name: 'Bird', icon: bird },
    
];

const CategoryIcons = () => {
    return (
        <div className="category-icons">
            {categories.map((category) => (
                <div key={category.name} className="category">
                    <img src={category.icon} alt={category.name} />
                    <p>{category.name}</p>
                </div>
            ))}
        </div>
    );
};

export default CategoryIcons;
