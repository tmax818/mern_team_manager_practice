# mern_team_manager_practice

- [ ] Create a page to show the list of all players

- [ ] Create a page to add a new player, which redirects back to the list page

- [ ] When you delete a player, they should automatically disappear without a page refresh

- [ ] By default, all validations should come from the backend

- [ ] NINJA BONUS: Create front end validations as well

- [ ] NINJA BONUS: Create a popup to confirm deleting a player

- [ ] SENSEI BONUS: Create the Player Status page

# solution branch

# create `server`:

```bash
mkdir -p server/config server/controllers server/models server/routes
touch server/config/mongoose.config.js server/controllers/player.controller.js server/models/player.model.js server/routes/player.routes.js server.js .env
npm init -y
npm i cors dotenv express mongoose nodemon
```

# create `client`:


```bash
npx create-react-app client
cd client
```

## install dependencies

```bash
npm i react-router-dom axios 
```
modify [index.js](./client/src/index.js)

```html
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";  <!--TODO -->

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
    <BrowserRouter> <!--TODO -->
        <App />
    </BrowserRouter> <!--TODO -->
</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

```

update [App.js](./client/src/App.js)
