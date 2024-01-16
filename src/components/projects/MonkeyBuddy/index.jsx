import { Box, useTheme, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ProjectIntro from "../common/Intro";
import BeeYouAppSvg from "../../../assets/projects/MonkeyBuddy/app.svg";

const styles = ({ theme }) => ({
	display: "flex",
	marginTop: "30px",
	justifyContent: "center",
});

function MonkeyBuddy() {
	const theme = useTheme();

	const data = {
		title: "BeeYou",
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

	return (
		<Box sx={styles({ theme })}>
			<ProjectIntro data={data} />
		</Box>
	);
}

export default MonkeyBuddy;
