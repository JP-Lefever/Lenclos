import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import style from "./compagniePage.module.css";

function Compagnie() {
	return (
		<>
			<h2 className={style.h2}>LA COMPAGNIE</h2>
			<section className={style.section}>
				<aside className={style.link}>
					<Link className={style.button} to="/compagnie/histoire">
						L'histoire
					</Link>
					<Link className={style.button} to="/compagnie/Equipe">
						L'équipe
					</Link>
				</aside>
				<article className={style.affichage}>
					<Outlet />
				</article>
			</section>
		</>
	);
}

export default Compagnie;
