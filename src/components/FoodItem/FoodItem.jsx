import rating from "../../assets/images/rating_starts.png";
import "./FoodItem.scss";

function FoodItem({key, id, name, description, price, image }) {

    const baseURL = "http://localhost:8080";
    return (
        <div className="dishes" key={key}>
              <div className="dishes__container">
                <div className="dishes__img">
                  <img
                    src={`${baseURL}/images/${image}.png`}
                    className="dishes__img__pic"
                    alt={name}
                  ></img>
                  <button className="dishes__img__button">+</button>
                </div>

                <div className="dishes__info">
                  <div className="dishes__info__top">
                    <p className="dishes__info__top__name">{name}</p>
                    <img
                      src={rating}
                      className="dishes__info__top__rating"
                      alt="rating"
                    ></img>
                  </div>

                  <p className="dishes__info__description">
                    {description}
                  </p>
                  <p className="dishes__info__price">${price}</p>
                </div>
              </div>
            </div>
    )
}

export default FoodItem;