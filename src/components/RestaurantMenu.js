import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants.js";

const RestaurantMenu = () => {
    let [restaurantInfo, setRestaurantInfo] = useState(null);
    let { restaurantId } = useParams();
    console.log(restaurantId);

    useEffect(() => {
        fetchMenu();
    }, []);

    let fetchMenu = async () => {
        let data = await fetch(MENU_API + restaurantId);

        let json = await data.json();
        console.log(json);
        setRestaurantInfo(json.data);
    };

    if (restaurantInfo == null) return <Shimmer />;

    const {
        name,
        avgRatingString,
        costForTwoMessage,
        totalRatingsString,
        cuisines,
    } = restaurantInfo?.cards[2]?.card?.card?.info;

    const { itemCards } =
        restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
            ?.card?.card;
    console.log(itemCards);

    return (
        <div className="menu">
            <h1>{name}</h1>
            <h3>Average Rating: {avgRatingString}</h3>
            <h3>Price of two people: {costForTwoMessage}</h3>
            <h3>Number of ratings: {totalRatingsString}</h3>
            <h3>{cuisines.join(",")}</h3>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((items, key) => (
                    <li key={items.card.info.id}>
                        {items.card.info.name}-{"Rs."}
                        {items.card.info.price / 100 ||
                            items.card.info.defaultPrice / 100}
                    </li>
                ))}
                {/* <li>{itemCards[0].card.info.name}</li>
                <li>{itemCards[1].card.info.name}</li>
                <li>{itemCards[2].card.info.name}</li>
                <li>{itemCards[3].card.info.name}</li> */}
            </ul>
        </div>
    );
};

export default RestaurantMenu;
