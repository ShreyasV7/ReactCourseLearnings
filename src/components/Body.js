import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockdata";


const Body = () => {
       return (
              <div className="body">
                     <div className="search">Search</div>
                     <div className="res-container">
                            {resList.map((restaurant, index) => (
                                   <RestaurantCard key={index} resObj={restaurant} />
                            ))}
                     </div>
              </div>
       );
};

export default Body;