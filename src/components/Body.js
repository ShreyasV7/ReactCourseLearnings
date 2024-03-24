import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockdata";
import { useState } from "react";
import resList from "../utils/mockdata";


const Body = () => {

       const [bestRes, setBestRes] = useState(resList)


       return (
              <div className="body">
                     <div className="filter">
                            <button className="filter-btn"
                                   onClick={() => {
                                          let filteredList = bestRes.filter((res) =>
                                                 res.info.avgRating > 4.5
                                          )

                                          setBestRes(filteredList);
                                          //console.log(bestRes)
                                   }}

                            > Top Rated Restaurants</button>
                     </div>
                     <div className="res-container">
                            {bestRes.map((restaurant, index) => (
                                   <RestaurantCard key={index} resObj={restaurant} />
                            ))}
                     </div>
              </div>
       );
};

export default Body;