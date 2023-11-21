import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
  
    const {
      cloudinaryImageId,
      name,
      avgRating,
      cuisines,
      costForTwo,
      sla,
    } = resData?.info;
  
    return (
      <div className="m-4 p-4 w-[250] rounded-lg bg-gray-100 hover:bg-gray-200" >
        <img
          className="res-logo rounded-lg"
          alt="res-logo"
          src={
             CDN_URL+
            cloudinaryImageId
          }
        />
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla.slaString} </h4>
      </div>
    );
  };

  //Higher Order Component

  //input - Restaurantcard ==> RestaurantCardPromoted

  export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
      return (
       <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg" >Promoted</label>
        <RestaurantCard {...props}/>
       </div> 
      );
    };
  };

export default RestaurantCard;