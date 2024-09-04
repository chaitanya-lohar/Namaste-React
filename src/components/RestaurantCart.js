import { CARD_IMAGE_URL } from "../utils/constant";
import rating from "../../Images/rating.png";

const RestaurantCart = (props) => {
  const { name, avgRating, cuisines, sla, costForTwo, cloudinaryImageId } =
    props?.restData; /*? optional chaining*/
  return (
    <div className="cart">
      <img
        className="cartImage"
        alt="cart Image"
        src={CARD_IMAGE_URL + cloudinaryImageId}
      />
      <div className="cartDetail">
        <h3>{name}</h3>
        <p>
          <img className="rating" src={rating} /> {avgRating}
        </p>
        <p>
          <strong>Cost</strong> - {costForTwo}
        </p>
        <p>
          <strong>Time</strong> - {sla.slaString}
        </p>
        <p>
          <strong>Cusines</strong> - {cuisines.join(" , ")}
        </p>
      </div>
    </div>
  );
};

export default RestaurantCart;
