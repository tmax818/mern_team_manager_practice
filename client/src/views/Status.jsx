import {PlayerForm} from "../components/PlayerForm";
import {PlayersList} from "../components/PlayersList";
import {Link, Route, Routes} from "react-router-dom";
import {Game} from "../components/Game";
import {useEffect, useState} from "react";
import axios from "axios";

export const Status = () => {
	const [games, setGames] = useState([]);
	useEffect(() => {
		axios.get("http://localhost:8000/api/games")
			.then(res => setGames(res.data))
	}, [])
	console.log(games)
	return (
		<fieldset>
			{games.map((game,i) => {
				return (
				<Link to={`game/${game._id}`}>Game {game.number}</Link>
				)
			})}

			<Routes>
				<Route path={"game/:id"} element={<Game />}/>
			</Routes>
		</fieldset>
	)
}