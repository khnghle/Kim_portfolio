import { Box, useTheme, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";


const styles = ({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	// marginLeft: "30px",
	width: "600px",
	lineHeight: 2,

	".button--container": {
		display: "flex",
		width: "100%",
		justifyContent: "center",
		gap: "10px",
	},
});

function Conclusion({ text, prevCTA, nextCTA, textColor }) {
	const theme = useTheme();
	const navigate = useNavigate();

	const handleNavigate = (link) => {
		navigate(link);
	};

	return (
		<Box sx={styles({ theme })}>
			<Box className="lgMarginBtm">
				<Typography variant="h1" className="discover--header xsmMarginBtm" color={textColor || ''}>
					Conclusion
				</Typography>

				<Typography>{text}</Typography>
			</Box>

			<Box className="lgMarginBtm button--container">
				<button onClick={() => handleNavigate(prevCTA)}>Home</button>
				<button onClick={() => handleNavigate(nextCTA)}>Next Project</button>
			</Box>
		</Box>
	);
}

export default Conclusion;
