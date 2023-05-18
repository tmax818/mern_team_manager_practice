import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export const PlayerForm = () => {
	const [name, setName] = useState("");
	const [position, setPosition] = useState("");
	const [status, setStatus] = useState("undecided");
	const [game, setGame] = useState('');
	const navigate = useNavigate()

	useEffect(() => {
		axios.get("http://localhost:8000/api/games")
			.then(res => setGame(res.data[1]))
			.catch(err => console.log(err))

	}, [])


	const addPlayer = e => {
		e.preventDefault()
		axios.post("http://localhost:8000/api/players", {
			name,
			position,
			status,
			game
		})
			.then(res => console.log(res))
			.catch(err => console.log(err))
		setPosition("")
		setName("")
		navigate("/players/list")
	}
	return (
		<fieldset>
			<form onSubmit={addPlayer}>
				<p>
					<label>Name</label><br/>
					<input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
				</p>
				<p>
					<label>Position</label><br/>
					<input type="text" onChange={(e)=>setPosition(e.target.value)} value={position}/>
				</p>
				<input type="submit"/>
			</form>
		</fieldset>
	)
}