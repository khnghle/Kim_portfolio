import { Box, useTheme, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ProjectIntro from "../common/Intro";
import BeeYouAppSvg from "../../../assets/projects/MonkeyBuddy/app.svg";
import MyRole from "../common/MyRole";

import responsiblitliesTableSVG from "../../../assets/projects/MonkeyBuddy/responsibilies.svg";
import designProcessFlowSVG from "../../../assets/projects/MonkeyBuddy/designProcess.svg";

const styles = ({ theme }) => ({
	display: "flex",
	flexDirection: 'column',
	marginTop: '30px',
	alignItems: 'center'
});

function MonkeyBuddy() {
	const theme = useTheme();

	const introData = {
		title: "MonkeyBuddy",
		textColor: "#B17260",
		phoneImage: BeeYouAppSvg,
		backgroundText:
			"As technology advances it can be difficult keeping up. Therefore knowing what subscriptions is the best for you will make managing it easier.",
		problemText: {
			type: "string",
			text: "Managing all your bills and subscriptions can get out of hand  This can cause going over budget.  However keeping track can be difficult if you can’t rember exactly what you are subscribed to.",
		},
		solutionText: {
			type: "ul",
			text: [
				"Have all subscriptions listed in one place",
				"A calendar to view when subscriptions are due",
				"Being able to cancel your subscriptions easily through the app",
			],
		},
	};

	const myRoleData = {
    myRole: 'I was the solo UX/UI designer and was responsible for the following: ',
    roleTable: responsiblitliesTableSVG,
		roleTableType: 'typeB',
    productType: 'Mobile design',
    tools: 'Figma',
    designProcessFlow: designProcessFlowSVG
  };

	return (
		<Box sx={styles({ theme })}>
			<ProjectIntro data={introData} />
			<MyRole data={myRoleData} />

		</Box>
	);
}

export default MonkeyBuddy;
