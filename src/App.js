import React from "react";
import {
	BrowserRouter as Router,
  	Switch,
  	Route,
  	Link
} from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector } from 'react-redux';

import Main from './components/Main';
import Profile from './components/Profile';
import Trading from './components/Trading';
import Signin from './components/Signin';
import Signup from "./components/Signup";


function App() {
	const { t, i18n } = useTranslation();

	const changeLanguage = (language) => {
		i18n.changeLanguage(language);
	};

	const user = useSelector(state => state.user);

  	return (
		<Router>
			<div>
				<nav>
					<ul>
						<li>
							<Link to="/">WallTrade</Link>
						</li>
						<li>
							<button onClick={() => changeLanguage("en")}>EN</button>
							<button onClick={() => changeLanguage("ru")}>RU</button> 
						</li>
						{ user.id &&
						<li>
							<Link to="/profile">{t("routes.profile")}</Link>
						</li> }
						{ user.id && 
						<li>
							<Link to="/users">{t("routes.trading")}</Link>
						</li> }
						{ !user.id &&
						<li>
							<Link to="/signin">{t("routes.signin")}</Link>
						</li> }
						{ !user.id &&
						<li>
							<Link to="/signup">{t("routes.signup")}</Link>
						</li> }
					</ul>
				</nav>
				<Switch>
					<Route path="/signin">
						<Signin />
					</Route>
					<Route path="/signup">
						<Signup />
					</Route>
					<Route path="/trading">
						<Trading />
					</Route>
					<Route path="/profile">
						<Profile />
					</Route>
					<Route path="/">
						<Main />
					</Route>
				</Switch>
			</div>
		</Router>
  	);
}

export default App;
