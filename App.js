import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./Images/logo1.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img className="logo" src={logo} />
      </div>
      <div className="navItems">
        <ul>
          <li>Home</li>
          <li>Contact</li>
          <li>About Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCart = (props) => {
  const { name, avgRating, cuisines, sla, costForTwo, cloudinaryImageId } =
    props?.restData; /*? optional chaining*/
  return (
    <div className="cart">
      <img
        className="cartImage"
        alt="cart Image"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/" +
          cloudinaryImageId
        }
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

const restObj = [
  {
    id: "360507",
    name: "Burger Farm",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/10/213a964e-8671-4d10-aed6-4d5f0b4e2441_360507.JPG",
    locality: "Sardarpura",
    areaName: "Sardarpura",
    costForTwo: "₹200 for two",
    cuisines: ["Burgers", "Ice Cream"],
    avgRating: 4.5,
    parentId: "4660",
    avgRatingString: "4.5",
    totalRatingsString: "5K+",
    sla: {
      deliveryTime: 18,
      lastMileTravel: 1.3,
      serviceability: "SERVICEABLE",
      slaString: "15-20 mins",
      lastMileTravelString: "1.3 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-08-25 23:30:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "Rxawards/_CATEGORY-Burger.png",
          description: "Delivery!",
        },
      ],
    },
    isOpen: true,
    type: "F",
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restContainer">
        {restObj.map((restaurant,index) => (
          <RestaurantCart key={restaurant.id} restData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const Footer = () => {
  return <div className="footer"></div>;
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
