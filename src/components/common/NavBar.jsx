import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import MainPageNavBar from "./MainPageNavBar";
import ProjectsNavBar from "./ProjectNavBar";
import { projectData } from "../../data/projects";

function NavBar() {
	const location = useLocation();

	const splitURL = location.pathname.split("/");
	const isProject = splitURL.includes("projects");

	let navTitle = "";

	if (isProject) {
		const project = projectData.find((project) => project.link === splitURL[2]);
		console.log({project, splitURL})
		navTitle = project.navTitle;
	}

	return (
		<Box>
			{isProject ? <ProjectsNavBar title={navTitle} /> : <MainPageNavBar />}
		</Box>
	);
}

export default NavBar;
