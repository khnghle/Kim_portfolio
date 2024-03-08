import { Box, useTheme, Typography } from "@mui/material";
import Carousel from "../../common/CarouselBlock";

import image1 from "../../../assets/projects/BeeYou/carousel2/colorPalette.svg";
import image2 from "../../../assets/projects/BeeYou/carousel2/fontFamily.svg";
import image3 from "../../../assets/projects/BeeYou/carousel2/icons.svg";
import image4 from "../../../assets/projects/BeeYou/carousel2/buttons.svg";
import image5 from "../../../assets/projects/BeeYou/carousel2/buttons2.svg";


const styles = ({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	// marginLeft: "30px",
	width: "600px",
	lineHeight: 2,
});

function BeeYouBrandingIdentity() {
	const theme = useTheme();
	const images = [image1, image2, image3, image4, image5];

	return (
		<Box sx={styles({ theme }) } className="lgMarginBtm">
			<Typography variant="h1" className="discover--header mdMarginBtm">
				Branding and Identity
			</Typography>

      <Carousel images={images} />
		</Box>
	);
}

export default BeeYouBrandingIdentity;
