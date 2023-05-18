import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

export const PlayersList = () => {

	const [players, setPlayers] = useState([]);

	const navigate = useNavigate();

	useEffect(() => {
		axios.get("http://localhost:8000/api/players")
			.then(res => {
				setPlayers(res.data)
			})
			.catch(err => console.log(err))

	}, [players])

	const deletePlayer = (playerId) => {
		axios.delete("http://localhost:8000/api/players/" + playerId)
			.then(res => console.log(res))
			.catch(err => console.log(err))

	}


	return (
		<fieldset>
			<table border="solid">
				<thead>
					<tr>
						<th>Player Name</th>
						<th>Position</th>
						<th>Actions</th>
					</tr>
				</thead>
			{players.map((player, i) => {
				return (
					<tr>
					<td>{player.name}</td>
						<td>{player.position}</td>
						<td>
							<button onClick={() => {
								if (window.confirm(`Are you sure you want to delete ${player.name}`)){
								deletePlayer(player._id);
							}}}>del</button>
						</td>
					</tr>
				)
			})}
			</table>
		</fieldset>
	)
}