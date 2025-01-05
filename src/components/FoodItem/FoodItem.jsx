import React, { useState } from "react";
import "./FoodItem.scss";
import rating from "../../assets/images/rating_starts.png";

function FoodItem({ id, name, description, price, image }) {
  const [quantity, setQuantity] = useState(0); // State to track quantity
  const baseURL = "http://localhost:8080";

  function handleAddItem(event) {
    event.preventDefault();
    setQuantity(1); // Set the initial quantity to 1 when clicking the `+` button
  }

  function incrementQuantity() {
    setQuantity(quantity + 1); // Increment quantity
  }

  function decrementQuantity() {
    if (quantity > 1) {
      setQuantity(quantity - 1); // Decrement quantity
    } else {
      setQuantity(0); // If quantity is 1, reset to 0 and hide the counter
    }
  }

  return (
    <div className="dishes">
      <div className="dishes__container">
        <div className="dishes__img">
          <img
            src={`${baseURL}/images/${image}.png`}
            className="dishes__img__pic"
            alt={name}
          />
          {quantity === 0 ? (
            <button className="dishes__img__button" onClick={handleAddItem}>
              +
            </button>
          ) : (
            <div className="dishes__counter">
              <button className="counter__btn" onClick={decrementQuantity}>
                -
              </button>
              <span className="counter__number">{quantity}</span>
              <button className="counter__btn" onClick={incrementQuantity}>
                +
              </button>
            </div>
          )}
        </div>

        <div className="dishes__info">
          <div className="dishes__info__top">
            <p className="dishes__info__top__name">{name}</p>
            <img
              src={rating}
              className="dishes__info__top__rating"
              alt="rating"
            />
          </div>

          <p className="dishes__info__description">{description}</p>
          <p className="dishes__info__price">${price}</p>
        </div>
      </div>
    </div>
  );
}

export default FoodItem;
