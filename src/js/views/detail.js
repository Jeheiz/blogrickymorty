import React, { useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import CharactersDetail  from "../component/details/character";
import LocationDetail from "../component/details/location";


const Detail = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	console.log(params)
	useEffect(() => {
		actions.loadInfoData(params.category, params.theid);
	}, []);
	const getcomponentByCategory = category => {
		if (category == "character") {
			return <CharactersDetail value={store.result} />;
} else if (category== "location") {
	return <LocationDetail value={store.result}/>;
}
	}
	return (
		<div className="container">
			<h1>{store.result ? store.result.name : ""}</h1>
			<img className="rounded mx-auto d-block" src="" />
			<br />
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus placerat sodales leo, id feugiat metus
				semper sed. Pellentesque dapibus metus quis volutpat mattis. Donec commodo mollis magna, non ornare quam
				tincidunt at. Fusce eu nibh eget ex luctus venenatis. Sed at odio blandit, euismod quam nec, iaculis
				ante.
			</p>
			<br />
			{getcomponentByCategory(params.category)}
			<br />
			<div className="text-center">
				<Link to="/">
					<button className="btn btn-primary btn-lg">Back home</button>
				</Link>
			</div>
		</div>
	);
    };
    
export default Detail;