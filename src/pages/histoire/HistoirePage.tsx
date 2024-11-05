import Presentation from "../../components/presentation/Presentation";
import type { dataHistoireProps } from "../../assets/lib/definition";
import dataHistoire from "../../assets/data/histoire.json";

function HistoirePage() {
	const [{ image, text, paragraph, title }]: dataHistoireProps[] = dataHistoire;
	return (
		<>
			<Presentation
				title={title}
				image={image}
				text={text}
				paragraph={paragraph}
			/>
		</>
	);
}

export default HistoirePage;
