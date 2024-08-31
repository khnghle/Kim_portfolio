import { Box, useTheme, Typography } from "@mui/material";
import { useEffect } from "react";

import { Link } from "react-router-dom";
import ProjectIntro from "../common/Intro";
import HCMSvg from "../../../assets/projects/HCM/app.svg";
import MyRole from "../common/MyRole";

import responsiblitliesTableSVG from "../../../assets/projects/HCM/responsibilies.svg";
import designProcessFlowSVG from "../../../assets/projects/HCM/designProcess.svg";
import Conclusion from "../common/Conclusion";
import HCMUserFlows from "./UserFlows";
import HCMDesigns from "./Design";
import HCMPrototype from "./Prototype";

const styles = ({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	marginTop: "30px",
	alignItems: "center",
});

function HealthManagement() {
	const theme = useTheme();

	const introData = {
		title: "HealthManagement",
		textColor: "#0F3FAB",
		phoneImage: HCMSvg,
		backgroundText:
			"Managing doctors appointments and health problems can be difficult for anyone. However, having someone to help along the way can create better healthcare quality.  This Healthcare Management app will allow the patient to  track doctor’s appointments and resources for obstacles that can intervene. ",
		problemText: {
			type: "ol",
			text: [
				"Create UI that is easy to follow and make/track appointment",
				"Let friends and health worker know about any challenges that the patient comes across",
				"Create simple ways for patient to manage their health problems",
			],
		},
		solutionText: {
			type: "ol",
			text: [
				"Use bright colors and big font to make it easier for older users",
				"Users be able to allow other friends to view any upcoming appointments ",
				"Have tools for users to view assessment results and learn about their health conditions",
			],
		},
	};

	const myRoleData = {
		myRole:
			"I was part of a UX/UI team for five weeks and was responsible for the following:",
		roleTable: responsiblitliesTableSVG,
		roleTableType: "typeB",
		productType: "Mobile design",
		tools: "Figma",
		designProcessFlow: designProcessFlowSVG,
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const conclusionText =
		"Our goal was to create an app that will allow users to track their health journey and bridge the gap between healthcare disparities. Even though I was only part of the process for a short time I was able to be crucial part of the development process. Users are able to manage their appointments and ask for help when challenges come up. Therefore, creating a support system was needed. ";

	return (
		<Box sx={styles({ theme })}>
			<ProjectIntro data={introData} />
			<MyRole data={myRoleData} />
			<HCMUserFlows />
			<HCMDesigns />
			<HCMPrototype/>
			<Conclusion
				text={conclusionText}
				textColor="blue.header"
				prevCTA={"/"}
				nextCTA={"/projects/monkeyBuddy"}
			/>
		</Box>
	);
}

export default HealthManagement;
