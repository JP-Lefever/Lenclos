import Presentation from "../../components/presentation/Presentation";
import type { dataHistoireProps } from "../../assets/lib/definition";
import dataHistoire from "../../assets/data/histoire.json";
import style from "./histoirePage.module.css";

function HistoirePage() {
	const [{ image, text, paragraph, title }]: dataHistoireProps[] = dataHistoire;
	return (
		<>
			<section className={style.section}>
				<Presentation
					title={title}
					image={image}
					text={text}
					paragraph={paragraph}
				/>
			</section>
		</>
	);
}

export default HistoirePage;
