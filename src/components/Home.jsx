import React from "react";
import "../styles/Home.scss";
import image from "../assets/tradeimg.GIF";
import LevelLayout from "./LevelLayout";

function Home() {
	const levels = [
		{
			image: "imagelink",
			title: "Beginner",
			desc: "For those who are just starting out",
			click: "easy",
		},
		{
			image: "imagelink",
			title: "Expert",
			desc: "Read the charts like the back of their hand",
			click: "hard",
		},
	];
	return (
		<div className="home-container">
			<div className="title">Trading Quiz</div>
			<div className="bb">
				<div>
					<img
						src={image}
						height="100px"
						width="100px"
						className="level-picture"
						alt="tradinggif"
					></img>
				</div>
				{levels.map((item, index) => (
					<LevelLayout data={item} onClick></LevelLayout>
				))}
			</div>
		</div>
	);
}

export default Home;
