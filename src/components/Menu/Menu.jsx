import { useLocation } from "react-router-dom";
import FoodItem from "../../components/FoodItem/FoodItem";
import "./Menu.scss";

function Menu() {
  const location = useLocation(); // Access location object
  const { menu } = location.state || { menu: [] }; // Retrieve menu from location.state

  return (
    <div className="menu-page">
        <p className="menu__title">Menu</p>
        <div className="dishes__big-container">
            {menu.length ? (
                menu.map((item) => (
                <FoodItem key={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
                ))
            ) : (
                <p>No menu items available.</p>
            )}
        </div>
       
    </div>
  );
}

export default Menu;
