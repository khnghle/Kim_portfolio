import { useTheme, Box } from "@mui/material";
import { useEffect } from "react";
import Intro from "./Intro";
import Projects from "./Projects";

const styles = () => ({});

function Work() {
	const theme = useTheme();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<Box sx={styles(theme)}>
			<Intro />
			<Projects />
		</Box>
	);
}

export default Work;
