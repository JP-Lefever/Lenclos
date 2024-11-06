import CreationData from "../../assets/data/cardCreationData.json";
import type { creationDataProps } from "../../assets/lib/definition";
import CardsCreation from "../../components/cardsCreation/CardsCreation";
import style from "./creationPage.module.css";

function CreationPage() {
	const [{ title, lieu, création, auteur, id, image }]: creationDataProps[] =
		CreationData;
	return (
		<>
			<h2 className={style.h2}>CREATIONS</h2>
			<section className={style.section}>
				{CreationData.map((c) => (
					<CardsCreation
						key={c.id}
						title={title}
						lieu={lieu}
						création={création}
						auteur={auteur}
						image={image}
					/>
				))}
			</section>
		</>
	);
}

export default CreationPage;
