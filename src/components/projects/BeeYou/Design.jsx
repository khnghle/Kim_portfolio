import { Box, useTheme, Typography } from "@mui/material";
import { generateUnorderedNumLists } from "../../utils";
import lofiDesigns1 from "../../../assets/projects/BeeYou/lofiDesigns1.svg";
import lofiDesigns2 from "../../../assets/projects/BeeYou/lofiDesigns2.svg";
import image1 from "../../../assets/projects/BeeYou/carousel1/accountTab.svg";
import image2 from "../../../assets/projects/BeeYou/carousel1/quizTab.svg";
import image3 from "../../../assets/projects/BeeYou/carousel1/personalTherapistTab.svg";
import image4 from "../../../assets/projects/BeeYou/carousel1/calendarTab.svg";
import image5 from "../../../assets/projects/BeeYou/carousel1/homePageTab.svg";
import image6 from "../../../assets/projects/BeeYou/carousel1/loginTab.svg";
import Carousel from "../../common/carousel";

const styles = ({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	marginTop: "60px",
	width: "600px",
	lineHeight: 2,
	".section--screens-container": {
		backgroundColor: theme.palette.green.background,
		// width: "100vw",
		// marginLeft: "-30px",
		padding: "20px 0",
	},
});

function BeeYouDesign() {
	const theme = useTheme();

	const sketchesToLoFiDesignText =
		"I quickly created sketches that i would turn to lo-fi frames in order to understand the flow of the app. Throughout this time I realized that a more rounded look would make it simple and effective. ";

	const whatWorksData = [
		"A navigation bar was added with a dark tile in the back to signify the user is in that tab.",
		"The title of the page was changed to a rectangle, because users would confuse it with a button.",
		"Icons on the main screen were made larger.",
	];

	const images = [image1, image2, image3, image4, image5, image6];
	return (
		<Box sx={styles({ theme })}>
			<Typography variant="h1" className="discover--header mdMarginBtm">
				Design
			</Typography>

			<Box className="section--container lgMarginBtm">
				<Typography
					variant="h2"
					color="green.header"
					className="section--header"
				>
					Sketches to Lo-fi designs
				</Typography>
				<Typography className="">{sketchesToLoFiDesignText}</Typography>
			</Box>

			<Box className="section--screens-container lgMarginBtm">
				<img src={lofiDesigns1} className="map--img centerImage lgMarginBtm" />

				<img src={lofiDesigns2} className="map--img centerImage" />
			</Box>

			<Box className="section--container lgMarginBtm">
				<Typography
					variant="h2"
					color="green.header"
					className="section--header mdMarginBtm"
				>
					High Fidelity Screens
				</Typography>
				<Carousel images={images} />
			</Box>

			<Box className="section--container lgMarginBtm">
				<Typography
					variant="h2"
					color="green.header"
					className="section--header xsmMarginBtm"
				>
					What Works and What Doesn’t
				</Typography>
				{generateUnorderedNumLists(whatWorksData, "what-Works-What-Dont-Work")}
			</Box>
		</Box>
	);
}

export default BeeYouDesign;
