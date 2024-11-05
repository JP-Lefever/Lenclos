import "./App.css";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import logo from "/Image/logo.png";

function App() {
	return (
		<>
			<nav className="nav_style">
				<figure>
					<a href="/">
						<img className="logo" src={logo} alt="logo l'enclos" />
					</a>
				</figure>
				<section className="menu_nav">
					<Link className="button" to="/" />

					<Link className="button" to="/compagnie">
						La Compagnie
					</Link>

					<Link className="button" to="/creation">
						Créations
					</Link>
					<Link className="button" to="/mediation">
						Médiation
					</Link>
					<Link className="button" to="/transmission">
						Transmission
					</Link>

					<Link className="button" to="/contact">
						Contact
					</Link>
				</section>
			</nav>
			<main>
				<Outlet />
			</main>
		</>
	);
}

export default App;
