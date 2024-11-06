import type { creationDataProps } from "../../assets/lib/definition";
import style from "./cardsCreation.module.css";

function CardsCreation({
	title,
	lieu,
	création,
	auteur,
	image,
}: creationDataProps) {
	const handleClick = () => {};

	return (
		<section className={style.section}>
			<img className={style.img} src={image} alt={création} />
			<h2 className={style.h2}>{title}</h2>
			<div className={style.div}>
				<button className={style.button} onClick={handleClick}>
					+
				</button>
				<p className={style.text}>{lieu}</p>
				<p className={style.text}>{auteur}</p>
			</div>
		</section>
	);
}

export default CardsCreation;
