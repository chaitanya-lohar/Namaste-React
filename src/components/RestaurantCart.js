
import { CARD_IMAGE_URL } from "../utils/constant";

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
          <p>Cost - {costForTwo}</p>
          <p>Rating - {avgRating}</p>
          <p>Time - {sla.slaString}</p>
          <p>Cusines - {cuisines.join(" , ")}</p>
        </div>
      </div>
    );
  };


  export default RestaurantCart;