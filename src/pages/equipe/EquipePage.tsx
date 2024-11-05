import equipeList from "../../assets/data/equipe.json";
import Cards from "../../components/cards/Cards";
import type { equipeProps } from "../../assets/lib/definition";
import style from "./equipePage.module.css";

function EquipePage() {
	const equipe: equipeProps[] = equipeList;

	return (
		<>
			<section className={style.cards}>
				{equipe.map((e) => (
					<Cards
						key={e.id}
						id={e.id}
						title={e.title}
						image={e.image}
						description={e.description}
						name={e.name}
					/>
				))}
			</section>
		</>
	);
}

export default EquipePage;
