import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockdata";
import { useEffect, useState } from "react";
import resList from "../utils/mockdata";
import Shimmer from "./Shimmer";

const Body = () => {
	const [bestRes, setBestRes] = useState([]);
	const [searchText, setSearchText] = useState("");

	useEffect(() => {
		fetchData();
	}, []);

	let fetchData = async () => {
		console.log("inside useeffect");

		let data = await fetch(
			"https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
		);

		let jsonData = await data.json();
		console.log(jsonData);
		setBestRes(
			jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
				?.restaurants
		);
	};

	// Conditional Rendering

	console.log("Body Rendered");

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
						onChange={(event) => {
							setSearchText(event.target.value);
						}}
					/>
					<button
						onClick={() => {
							console.log(searchText);
						}}
					>
						Search
					</button>
				</div>

				<button
					className="filter-btn"
					onClick={() => {
						let filteredList = bestRes.filter(
							(res) => res.info.avgRating > 4.5
						);
						setBestRes(filteredList);
						//console.log(bestRes)
					}}
				>
					{" "}
					Top Rated Restaurants
				</button>
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
