import { Box, useTheme, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import returnArrow from "../../assets/returnArrow.svg";

const styles = ({ project }) => ({
	backgroundColor: "white",
	position: "fixed",
	top: 0,
	width: "100%",
	height: "30px",

	".nav--container": {
		display: "flex",
		padding: "5px 10px",
		justifyContent: "space-between",
		alignItems: "center",
	},

	// width: '100%',
	".logo--image": {
		width: "15px",
		filter:
			project === "Healthcare Management"
				? "invert(60%) sepia(28%) saturate(319%) hue-rotate(186deg) brightness(102%) contrast(86%)"
				: project === "Monkey.Buddy"
				? "invert(56%) sepia(24%) saturate(385%) hue-rotate(328deg) brightness(89%) contrast(81%)"
				: "",

		"&:hover": {
			cursor: "pointer",
		},
	},
});

function ProjectsNavBar({ title }) {
	const theme = useTheme();
	const navigate = useNavigate();

	console.log({ local: title });

	return (
		<Box sx={styles({ theme, project: title })}>
			<Box className="nav--container">
				<img
					src={returnArrow}
					className="logo--image"
					onClick={() => navigate("/")}
				/>
				<Typography>{title}</Typography>
				<Typography>Kimberly De Santiago</Typography>
			</Box>
		</Box>
	);
}

export default ProjectsNavBar;
