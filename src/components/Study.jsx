import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.scss";
import basic_image from "../assets/principles.png";
import candle_image from "../assets/candlesticks.png";
import pattern_image from "../assets/patterns.png";
import smc_image from "../assets/smart.png";

function Study() {
	const navigate = useNavigate();
	const studyType = [
		{
			title: "Principle",
			type: "P",
			image: basic_image,
		},
		{
			title: "Candlesticks ",
			type: "C",
			image: candle_image,
		},
		{
			title: "Trading Patterns ",
			type: "T",
			image: pattern_image,
		},
		{
			title: "Smart Money Concepts",
			type: "S",
			image: smc_image,
		},
	];

	const handleButton = (studyItem) => {
		navigate("/studyEach", {
			state: { title: studyItem.title, type: studyItem.type },
		});
	};

	return (
		<div className="main-container">
			{studyType.map((studyItem, index) => (
				<button
					key={index}
					className="level-container"
					onClick={() => handleButton(studyItem)}
				>
					<div className="imageholder">
						<img
							src={studyItem.image}
							className="level-picture"
							alt="tradinggif"
						/>
					</div>
					<div className="textholder">
						<div className="title">{studyItem.title}</div>
						<div className="description">{studyItem.desc}</div>
					</div>
				</button>
			))}
		</div>
	);
}

export default Study;
