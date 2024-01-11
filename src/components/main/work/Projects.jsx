import { useTheme, Typography, Box, Card } from "@mui/material";
import beeYou from "../../../assets/beeYouMain.svg";
import healthcareManagement from "../../../assets/healthcareManagementMain.svg";
import monkeyBuddy from "../../../assets/monkeyBuddyMain.svg";

const styles = () => ({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	gap: "20px",
	marginTop: "40px",
	marginBottom: "80px",
	".card--container": {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	".card--image-container": {
		width: "200px",
	},
	".card--description-text": {
		marginTop: "10px",
		width: "80px",
	},
	".card--text-container": {
		marginLeft: "10px",
	},
});

function Projects() {
	const theme = useTheme();

	const dataSource = [
		{
			header: "Bee.You Therapy",
			description: "The only tool you need to track your mental health",
			image: beeYou,
			imageDescription: "Bee.You Screens",
			backgroundColor: theme.palette.green.main,
		},
		{
			header: "Healthcare Management",
			description: "Bridging the gap in Healthcare",
			image: healthcareManagement,
			imageDescription: "Healthcare Management Screens",
			backgroundColor: theme.palette.blue.main,
		},
		{
			header: "Monkey Buddy",
			description: "Track your subscriptions in one place",
			image: monkeyBuddy,
			imageDescription: "Monkey Buddy Screens",
			backgroundColor: theme.palette.orange.main,
		},
	];
	return (
		<Box sx={styles(theme)}>
			{dataSource.map((data, dataIdx) => (
				<Card
					style={{ backgroundColor: data.backgroundColor }}
					className="card--container"
					key={`card#${dataIdx}`}
				>
					<Box className="card--text-container">
						{typeof data.header === "string" ? (
							<Typography variant="h2">{data.header}</Typography>
						) : (
							data.header.map((line, idx) => (
								<Typography variant="h2" key={`card#${dataIdx}-line${idx}`}>
									{line}
								</Typography>
							))
						)}
						<Typography variant="body1" className="card--description-text">
							{data.description}
						</Typography>
					</Box>
					<img
						src={data.image}
						className="card--image-container"
						alt={data.imageDescription}
					/>
				</Card>
			))}
		</Box>
	);
}

export default Projects;
