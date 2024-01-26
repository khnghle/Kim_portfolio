import { Box, useTheme, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ProjectIntro from "../common/Intro";
import BeeYouAppSvg from "../../../assets/projects/BeeYou/app.svg";
import MyRole from "../common/MyRole";
import responsiblitliesTableSVG from "../../../assets/projects/BeeYou/responsibilies.svg";
import designProcessFlowSVG from "../../../assets/projects/BeeYou/designProcess.svg";
import BeeYouDiscover from "./Discover";

const styles = ({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	marginTop: "30px",
	alignItems: "center",
});

function BeeYou() {
	const theme = useTheme();

	const introData = {
		title: "BeeYou",
		textColor: "#657362",
		phoneImage: BeeYouAppSvg,
		backgroundText: () => (
			<>
				"During the global pandemic, mental health was an important topic.
				However, some people find it difficult to manage. Bee.You was created to
				make <strong>managing your mental health</strong> easier and be there
				every step of the way."
			</>
		),
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

	const myRoleData = {
		myRole: "I was the solo UX/UI designer and responsible for the following:",
		roleTable: responsiblitliesTableSVG,
		roleTableType: "typeA",
		productType: "Mobile design",
		tools: "Figma",
		designProcessFlow: designProcessFlowSVG,
	};

	return (
		<Box sx={styles({ theme })}>
			<ProjectIntro data={introData} />
			<MyRole data={myRoleData} />
			<BeeYouDiscover />
		</Box>
	);
}

export default BeeYou;
