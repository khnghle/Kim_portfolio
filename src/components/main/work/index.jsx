import { useTheme, Box } from "@mui/material";
import Intro from "./Intro";
import Projects from "./Projects";

const styles = () => ({});

function Work() {
	const theme = useTheme();
	return (
		<Box sx={styles(theme)}>
			<Intro />
			<Projects />
		</Box>
	);
}

export default Work;
