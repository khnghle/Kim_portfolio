import { Box, useTheme, Typography } from "@mui/material";
import userFlowLegend from "../../../assets/projects/HCM/userFlowLegend.svg";
import userFlowDiagram from "../../../assets/projects/HCM/userFlowDiagram.svg";


const styles = ({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	marginTop: "30px",
	// marginLeft: "30px",
	width: "600px",
	lineHeight: 2,

});

function HCMUserFlows() {
	const theme = useTheme();

	const siteMap =
		"I was in charge of editing user flows to match the updated wireframes ";

	return (
		<Box sx={styles({ theme })}>
			<Box className="section--container lgMarginBtm">
				<Typography
					variant="h2"
					color="blue.header"
					className="section--header xsmMarginBtm"
				>
					User Flows
				</Typography>
				<Typography className="mdMarginBtm">{siteMap}</Typography>

				<img src={userFlowLegend} className="user-flow--legend" style={{width: '200px'}}/>

				<img src={userFlowDiagram} className="user-flow--diagram centerImage" style={{width: '600px'}}/>
			</Box>
		</Box>
	);
}

export default HCMUserFlows;
