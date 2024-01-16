import { Box, useTheme, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ProjectIntro from "../common/Intro";
import BeeYouAppSvg from "../../../assets/projects/BeeYou/app.svg";


const styles = ({ theme }) => ({
	display: "flex",
	marginTop: '30px',
	justifyContent: 'center'
});

function BeeYou() {
	const theme = useTheme();

	const data = {
		title: "BeeYou",
		textColor: "#657362",
		phoneImage: BeeYouAppSvg,
		backgroundText:
			"During the global pandemic, mental health was an important topic. However, some people find it difficult to manage. Bee.You was created to make managing your mental health easier and be there every step of the way.",
		problemText: {
			type: "ol",
			text: [
				"How can we make therapy feel safe and appealing?",
				"What self care resources are the most beneficial?",
				"Find the right therapist",
				"Make the app simple and efficient",
			],
		},
		solutionText: {
			type: "custom",
			text: [
				{
					type: "string",
					text: "[Bee. you] aims to be there every step of the way in this mental health journey.",
				},
				{
					type: "ol",
					text: [
						"How can we make therapy feel safe and appealing?",
						"What self care resources are the most beneficial?",
						"Find the right therapist",
						"Make the app simple and efficient",
					],
				},
			],
		},
	};

	return (
		<Box sx={styles({ theme })}>
			<ProjectIntro data={data}/>
		</Box>
	);
}

export default BeeYou;
