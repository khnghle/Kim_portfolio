import { Box, useTheme, Typography } from "@mui/material";
import Carousel from "../../common/CarouselBlock";

import image1 from "../../../assets/projects/HCM/carousel1/image1.svg";
import designProcessFlowSVG from "../../../assets/projects/HCM/designProcess.svg";

const styles = ({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	marginTop: "30px",
	alignItems: "center",
});

function HCMPrototype() {
	const theme = useTheme();

	const prototypeText =
		"Because of our NDA prototypes are not available. However, below i have screens that show the flow of blood pressure assessment. ";

	return (
		<Box sx={styles({ theme })}>
			<Box className="section--container lgMarginBtm">
				<Typography
					variant="h2"
					color="blue.header"
					className="section--header xsmMarginBtm"
				>
					Prototype
				</Typography>
				<Typography className="mdMarginBtm">{prototypeText}</Typography>

				<img
					src={image1}
					style={{ width: "600px" }}
				/>
			</Box>
		</Box>
	);
}

export default HCMPrototype;
