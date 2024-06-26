import { CDN_URL } from "../utils/constants";
import { styleCard } from "../utils/constants";


const RestaurantCard = (props) => {
       const { resObj } = props;
       const { cloudinaryImageId, name, cuisines, avgRating, slaString } =
           resObj?.info;

       return (
           <div className="res-card" style={styleCard}>
               <img
                   className="res-logo"
                   alt="res-logo"
                   src={CDN_URL + cloudinaryImageId}
               />
               <h3>{name}</h3>
               <h4>{cuisines.join(", ")}</h4>
               <h4>{avgRating} stars</h4>
               <h4>{resObj.info.sla.slaString} to deliver</h4>
           </div>
       );
};

export default RestaurantCard; 