import { useTheme, Typography, Box, Card } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {projectData} from '../../../data/projects' 

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
	const navigate = useNavigate();

	const dataSource = projectData

	const handleNavigate = (link) => {
		navigate(`projects/${link}`);
	};

	return (
		<Box sx={styles(theme)}>
			{dataSource.map((data, dataIdx) => (
				<Card
					style={{ backgroundColor: data.backgroundColor }}
					className="card--container"
					key={`card#${dataIdx}`}
					onClick={() => handleNavigate(data.link)}
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
