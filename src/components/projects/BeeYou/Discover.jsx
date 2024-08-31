import { Box, useTheme, Typography } from "@mui/material";
import { generateUnorderedNumLists } from "../../utils";
import competitiveAnalysisChart from "../../../assets/projects/BeeYou/competitiveAnalysisChart.svg";
import empathyMapTable from "../../../assets/projects/BeeYou/empathyMap.svg";
import siteMapTable from "../../../assets/projects/BeeYou/siteMap.svg";
import userFlowTable from "../../../assets/projects/BeeYou/userFlow.svg";

const styles = ({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	marginTop: "30px",
	// marginLeft: "30px",
	width: "600px",
	lineHeight: 2,

	'.empathy-map':{
		width: '600px',
		
		
	}
});

function BeeYouDiscover() {
	const theme = useTheme();

	const userAudienceData = [
		"18-27 year olds ",
		"Better their mental health ",
		"Had a mobile device or laptop ",
	];

	const competitiveAnalysisText = () => (
		<>
			To understand the current market I researched the top 3 companies that
			offered similar things to the app. All companies offered{" "}
			<strong> flexibility </strong> for therapy sessions.{" "}
			<strong>
				Two out of the three companies offered personalized therapy.{" "}
			</strong>{" "}
			They all stated that each site has <strong>education resources </strong>
			for mental health. "
		</>
	);

	const empathyMapText = [
		"She does not have a regular 9-5, therefore scheduling might be difficult. Her commute also ties in to any scheduling difficulties since time is of the essence  ",
		"Main Point: Availability ",
	];

	const siteMap =
		"I wanted to focus on the user main health goals and leave room for future expansion.";

	const userFlows = () => (
		<>
			<strong>User Flow: </strong>Launch the app and see if you are able to book
			an appointment with your therapist.{" "}
		</>
	);
	return (
		<Box sx={styles({ theme })}>
			<Typography
				variant="h1"
				className="discover--header mdMarginBtm"
			>
				Discover
			</Typography>

			<Box className="section--container lgMarginBtm">
				<Typography
					variant="h2"
					color="green.header"
					className="section--header xsmMarginBtm"
					style={{ margin: 0 }}
				>
					User Audience
				</Typography>
				{generateUnorderedNumLists(userAudienceData, "user-audience")}
			</Box>

			<Box className="section--container lgMarginBtm">
				<Typography
					variant="h2"
					color="green.header"
					className="section--header xsmMarginBtm"
				>
					Competitive Analysis
				</Typography>
				<Typography className="mdMarginBtm">
					{competitiveAnalysisText()}
				</Typography>
				<img src={competitiveAnalysisChart} className="map--img centerImage" />
			</Box>

			<Box className="section--container lgMarginBtm">
				<Typography
					variant="h2"
					color="green.header"
					className="section--header xsmMarginBtm"
				>
					Empathy Maps
				</Typography>
				<Typography className="xsmMarginBtm">{empathyMapText[0]}</Typography>
				<Typography className="mdMarginBtm strong">
					{empathyMapText[1]}
				</Typography>

				<img src={empathyMapTable} className="empathy-map centerImage" />
			</Box>

			<Box className="section--container lgMarginBtm">
				<Typography
					variant="h2"
					color="green.header"
					className="section--header xsmMarginBtm"
				>
					Site Map
				</Typography>
				<Typography className="mdMarginBtm">{siteMap}</Typography>

				<img src={siteMapTable} className="map--img centerImage" />
			</Box>

			<Box className="section--container lgMarginBtm">
				<Typography
					variant="h2"
					color="green.header"
					className="section--header xsmMarginBtm"
				>
					User Flows
				</Typography>
				<Typography className="mdMarginBtm">{userFlows()}</Typography>

				<img src={userFlowTable} className="map--img centerImage" />
			</Box>
		</Box>
	);
}

export default BeeYouDiscover;
