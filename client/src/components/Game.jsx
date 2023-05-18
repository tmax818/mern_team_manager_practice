import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

export const Game = () => {

	const [game, setGame] = useState({})
	const [loaded, setLoaded] = useState(false)
	const [status, setStatus] = useState('undecided')
	const {id} = useParams();
	useEffect(()=>{
		axios.get("http://localhost:8000/api/games/" + id )
			.then(res => {
				setGame(res.data)
				setLoaded(true)
			})
			.catch(err => console.log(err))
	}, [game])

	const updatePlayer = (player, e) => {
		console.log(e.target.value)
		axios.patch("http://localhost:8000/api/players/" + player._id, {
			name: player.name,
			position: player.position,
			status: e.target.value,
			game: player.game
		})
			.then(res => console.log(res))
			.catch(err => console.log(err))
	}
	return (
		<fieldset>
			<table border="solid">
				<thead>
				<tr>
					<th>Player Name</th>
					<th>Actions</th>
				</tr>
				</thead>
			{loaded && game.players.map((player, i) => {
				return (
					<tr>
						<td>{player.name}</td>
						<td>
							<button value={'playing'} onClick={(e) => updatePlayer(player, e)} style={{ backgroundColor: (player.status === 'playing')? 'green':null}}>playing</button>
							<button value={'not playing'} onClick={(e) => updatePlayer(player, e)} style={{ backgroundColor: (player.status === 'not playing')? 'red':null}}>not playing</button>
							<button value={'undecided'} onClick={(e) => updatePlayer(player, e)} style={{ backgroundColor: (player.status === 'undecided')? 'yellow':null}}>undecided</button>
						</td>
					</tr>
				)
			})}
			</table>
		</fieldset>
	)
}