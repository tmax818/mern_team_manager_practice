import {Link, Route, Routes, useNavigate} from "react-router-dom";
import {PlayersList} from "../components/PlayersList";
import {PlayerForm} from "../components/PlayerForm";
import {useEffect, useState} from "react";
import axios from "axios";

export const Players = () => {





	return (
		<fieldset>
			<Link to={'list'}>List</Link> | <Link to={'addplayer'}>Add Player</Link>
		<Routes>
			<Route path={'list'} element={<PlayersList />}/>
			<Route path={'addplayer'} element={<PlayerForm />}/>
		</Routes>
		</fieldset>
	)
}