import "./LandingPage.scss";
import axios from "axios";
import salad from "../../assets/images/menu_1.png";
import rolls from "../../assets/images/menu_2.png";
import desserts from "../../assets/images/menu_3.png";
import sandwiches from "../../assets/images/menu_4.png";
import cake from "../../assets/images/menu_5.png";
import vegeterian from "../../assets/images/menu_6.png";
import pasta from "../../assets/images/menu_7.png";
import noodles from "../../assets/images/menu_8.png";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FoodItem from "../../components/FoodItem/FoodItem";

function LandingPage() {
  const [menu, setMenu] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/home");
        setMenu(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  function handleMenu(event) {
    event.preventDefault();
    navigate("/Menu", { state: { menu } });
  }

  return (
    <section className="landingPage">
      <div className="hero">
        <div className="hero__container">
          <p className="hero__title">Order your favourite food here</p>
          <button className="hero__button" onClick={handleMenu}>menu</button>
        </div>
      </div>

      <div className="explore">
        <p className="explore__title">Explore our menu</p>
        <p className="explore__description">
          Choose from a diverse menu featuring a delectable array of dishes. Our
          mission is to satisfy your cravings and elevate your dining
          experience, one delicious meal at a time.
        </p>

        <div className="explore__container">
          <div className="explore__category">
            <img src={salad} className="explore__category__img"></img>
            <p className="explore__category__name">Salad</p>
          </div>

          <div className="explore__category">
            <img src={rolls} className="explore__category__img"></img>
            <p className="explore__category__name">Rolls</p>
          </div>

          <div className="explore__category">
            <img src={desserts} className="explore__category__img"></img>
            <p className="explore__category__name">Desserts</p>
          </div>

          <div className="explore__category">
            <img src={sandwiches} className="explore__category__img"></img>
            <p className="explore__category__name">Sandwiches</p>
          </div>

          <div className="explore__category">
            <img src={cake} className="explore__category__img"></img>
            <p className="explore__category__name">Cake</p>
          </div>
          <div className="explore__category">
            <img src={vegeterian} className="explore__category__img"></img>
            <p className="explore__category__name">Vegeterian</p>
          </div>

          <div className="explore__category">
            <img src={pasta} className="explore__category__img"></img>
            <p className="explore__category__name">Pasta</p>
          </div>

          <div className="explore__category">
            <img src={noodles} className="explore__category__img"></img>
            <p className="explore__category__name">Noodles</p>
          </div>
        </div>
      </div>

      <p className="dishes__title">Top dishes near you</p>

      <div className="dishes__big-container">
        {menu?.map((menuItem, index) => {
          if (menuItem._id > 20 && menuItem._id < 29) {
            return (
              <FoodItem key={index} id={menuItem._id} name={menuItem.name} description={menuItem.description} price={menuItem.price} image={menuItem.image} />
            );
          }
        })}
      </div>

      
    </section>
  );
}

export default LandingPage;

