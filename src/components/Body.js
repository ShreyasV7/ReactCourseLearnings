import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockdata";
import { useEffect, useState } from "react";
import resList from "../utils/mockdata";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
    const [bestRes, setBestRes] = useState([]);
    const [filterRes, setFilterRes] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    let fetchData = async () => {
        console.log("inside useeffect");

        let data = await fetch(
            "https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
            {
                headers: {
                    "x-cors-api-key": "temp_1c367bd33eaeac1a419504051f7f38c3",
                },
            }
        );

        let jsonData = await data.json();
        console.log(jsonData);
        setBestRes(
            jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants
        );

        setFilterRes(
            jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants
        );
    };

    // Conditional Rendering

    console.log("Body Rendered");
    //console.log(bestRes);
    console.log(filterRes);

    return bestRes.length == 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input
                        type="text"
                        className="search-box"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />
                    <button
                        onClick={() => {
                            console.log(searchText);
                            let filteredRes = bestRes.filter((r) =>
                                r.info.name
                                    .toLowerCase()
                                    .includes(searchText.toLowerCase())
                            );

                            setFilterRes(filteredRes);
                        }}
                    >
                        Search
                    </button>
                </div>

                <button
                    className="filter-btn"
                    onClick={() => {
                        let filteredList = bestRes.filter(
                            (res) => res.info.avgRating > 4
                        );
                        setFilterRes(filteredList);
                        //console.log(bestRes)
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {filterRes.map((restaurant, index) => (
                    <Link
                        style={{ textDecoration: "none", color: "inherit" }}
                        key={restaurant.info.id}
                        to={"/restaurants/" + restaurant.info.id}
                    >
                        <RestaurantCard resObj={restaurant} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;
