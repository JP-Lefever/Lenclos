import type { equipeProps } from "../../assets/lib/definition";
import style from "./cards.module.css";
import { useState } from "react";

function Cards({ title, image, name, description }: equipeProps) {
	const [moreInfo, setMoreInfo] = useState(false);
	const handleClick = () => {
		moreInfo ? setMoreInfo(false) : setMoreInfo(true);
	};
	console.log(moreInfo);
	return (
		<>
			<section className={style.section}>
				<img className={style.img} src={image} alt={name} />
				<h2 className={style.h2}>{name}</h2>
				<div className={style.div}>
					<button className={style.button} onClick={handleClick}>
						+
					</button>
					<p className={style.text}>{title}</p>
				</div>
				{moreInfo && <div className={style.addInfo}>{description}</div>}
			</section>
		</>
	);
}

export default Cards;
