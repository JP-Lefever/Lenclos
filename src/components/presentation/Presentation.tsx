import type { dataHistoireProps } from "../../assets/lib/definition";
import style from "./Presentation.module.css";

function Presentation({ title, image, paragraph, text }: dataHistoireProps) {
	return (
		<section className={style.section}>
			<h2 className={style.h2}>{title}</h2>
			<figure>
				<img src={image} alt="" />
			</figure>
			<section>
				<p className={style.text}>{text}</p>
				<p className={style.text}>{paragraph}</p>
			</section>
			<figure>
				<img src="" alt="" />
			</figure>
		</section>
	);
}

export default Presentation;
