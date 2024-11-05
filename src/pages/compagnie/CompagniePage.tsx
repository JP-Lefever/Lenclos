import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import style from "./compagniePage.module.css";

function Compagnie() {
	return (
		<>
			<section className={style.section}>
				<h2 className={style.h2}>LA COMPAGNIE</h2>
				<section className={style.link}>
					<Link className={style.button} to="/compagnie/histoire">
						L'histoire
					</Link>
					<Link className={style.button} to="/compagnie/Equipe">
						L'équipe
					</Link>
				</section>
				<div>
					<Outlet />
				</div>
			</section>
		</>
	);
}

export default Compagnie;
