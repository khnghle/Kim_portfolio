import { Box, useTheme, Typography } from "@mui/material";
// import BeeYouApp from "../../../assets/projects/BeeYou/app.svg";
import BeeYouAppSvg from "../../../assets/projects/BeeYou/app.svg";

const styles = ({ theme, textColor }) => ({
	display: "flex",
	marginTop: "20px",
	lineHeight: "2",
	".text--container": {
		width: "70%",
		display: "flex",
		flexDirection: "column",
		gap: "20px",
		marginLeft: "30px",
	},
	".background--container": {
		width: "340px",
	},
  ".problem--container": {
		width: "340px",
	},
  ".solution--container": {
		width: "340px",
	},
	".header": {
		marginBottom: "5px",
		color: textColor,
	},
	".BeeYou--img": {
		width: "160px",
		marginLeft: "10px",
	},

	ol: {
		padding: "0px",
		"list-style-position": "inside",
	},
  ul: {
		padding: "0px",
		"list-style-position": "inside",
	},
	li: {
		fontSize: "9px",
		fontStyle: "normal",
		fontWeight: "normal",
	},
});

function ProjectIntro({ data }) {
	const theme = useTheme();

	const generateOrderedNumLists = (list, identifier) => (
		<ol>
			{list.map((listItem, idx) => (
				<li key={`${identifier}-li${idx}`}>{listItem}</li>
			))}
		</ol>
	);

  const generateUnorderedNumLists = (list, identifier) => (
		<ul>
			{list.map((listItem, idx) => (
				<li key={`${identifier}-li${idx}`}>{listItem}</li>
			))}
		</ul>
	);

	const generateCustomText = (list, identifier) => {
		return (
			<div>
				{list.map((listItem, idx) => {
					if (listItem.type === "string")
						return (
							<Typography key={`${identifier}-string${idx}`}>
								{listItem.text}{" "}
							</Typography>
						);
					if (listItem.type === "ol")
						return (
							<div key={`${identifier}-ol${idx}`}>
								{generateOrderedNumLists(listItem.text, identifier)}
							</div>
						);
				})}
			</div>
		);
	};

	return (
		<Box sx={styles({ theme, textColor: data.textColor })}>
			<Box className="text--container">
				<Box className="background--container">
					<Typography variant="h2" className="header">
						Background
					</Typography>
					<Typography>{data.backgroundText}</Typography>
				</Box>
				<Box className="problem--container">
					<Typography variant="h2" className="header">
						Problem
					</Typography>
					{data.problemText.type === "string" && (
						<Typography>{data.problemText.text}</Typography>
					)}
					{data.problemText.type === "ol" &&
						generateOrderedNumLists(data.problemText.text, "problem-list")}
				</Box>
				<Box className="solution--container">
					<Typography variant="h2" className="header">
						Potential Solutions{" "}
					</Typography>
					{data.solutionText.type === "custom" &&
						generateCustomText(data.solutionText.text, "solution-list")}
					{data.solutionText.type === "ol" &&
						generateOrderedNumLists(data.solutionText.text, "solution-list")}
					{data.solutionText.type === "ul" &&
						generateUnorderedNumLists(data.solutionText.text, "solution-list")}
				</Box>
			</Box>
			<img src={data.phoneImage} className="BeeYou--img" />
		</Box>
	);
}

export default ProjectIntro;
