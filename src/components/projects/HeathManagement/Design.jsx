import { Box, useTheme, Typography } from "@mui/material";
import before1 from "../../../assets/projects/HCM/before1.svg";
import before2 from "../../../assets/projects/HCM/before2.svg";
import after1 from "../../../assets/projects/HCM/after1.svg";
import after2 from "../../../assets/projects/HCM/after2.svg";
import iterate1 from "../../../assets/projects/HCM/iterate1.svg";
import iterate2 from "../../../assets/projects/HCM/iterate2.svg";
import { generateUnorderedNumLists } from "../../utils";

const styles = ({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	marginTop: "30px",
	width: "600px",
	lineHeight: 2,
	// overflowX: 'hidden',
	".full-width": {
		width: "99.5vw",
		position: "relative",
		marginLeft: "-50vw",
		left: "50%",
		zIndex: "-1",
	},

	".matrixContainer": {
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",

		"&>*": {
			width: "50%",
			display: "flex",
			flexDirection: "column",
			paddingTop: "10px",
			paddingBottom: "20px",

			justifyContent: "center",
			alignItems: "center",
		},
		".blue": {
			backgroundColor: "#DDF0FD",
		},
		".violet": {
			backgroundColor: "#D4DFFC",
		},
	},
	".banner": {
		textAlign: "center",
		padding: "10px",
		backgroundColor: "",
	},
	".iterate-version--container": {
		display: "flex",
		justifyContent: "space-around",
	},
	".iterate--container": {
		backgroundColor: "#FFC2A3",
	},
});

function HCMDesigns() {
	const theme = useTheme();

	const siteMap =
		"Each designer created a concept design to present for the company. I decided on simple and rounded design. My designs were chosen as the base for the screens. ";

	const bannerText =
		"I provided key ideas which made it into final designs, like adding a white tile to let users know which tab they are in. ";

	const iterateData = [
		"User need to contact healthcare workers easily and view any notification about their health.",
		"Not all users have the same health conditions, therefore the user should be able to hide features from the main page.",
		"Our user are older therefore might have trouble viewing font size, the font was changed from 14px to 16px.",
	];
	return (
		<Box sx={styles({ theme })}>
			<Box className="section--container ">
				<Typography
					variant="h2"
					color="blue.header"
					className="section--header xsmMarginBtm"
				>
					Design
				</Typography>
				<Typography className="mdMarginBtm">{siteMap}</Typography>

				<Box className="full-width matrixContainer ">
					<Box className="blue">
						<Typography variant="h2" className="section--header xsmMarginBtm">
							Before
						</Typography>
						<img
							src={before1}
							className="user-flow--legend"
							style={{ width: "300px" }}
						/>
					</Box>
					<Box className="violet">
						<Typography variant="h2" className="section--header xsmMarginBtm">
							After
						</Typography>
						<img
							src={after1}
							className="user-flow--legend"
							style={{ width: "300px" }}
						/>
					</Box>
					<Box className="violet">
						<img
							src={before2}
							className="user-flow--legend"
							style={{ width: "200px" }}
						/>
					</Box>
					<Box className="blue">
						<img
							src={after2}
							className="user-flow--legend"
							style={{ width: "200px" }}
						/>
					</Box>
				</Box>

				<Box className="full-width banner">
					<Typography color="#AB6C4C">{bannerText}</Typography>
				</Box>

				<Box className="full-width banner iterate--container mdMarginBtm">
					<Typography variant="h2" className="xsmMarginBtm iterate-header">
						Iterate
					</Typography>

					<Box className="iterate-version--container">
						<Box>
							<Typography className="xsmMarginBtm">Version 1</Typography>
							<img
								src={iterate1}
								className="user-flow--legend"
								style={{ width: "200px" }}
							/>
						</Box>

						<Box>
							<Typography className="xsmMarginBtm">Version 2</Typography>
							<img
								src={iterate2}
								className="user-flow--legend"
								style={{ width: "200px" }}
							/>
						</Box>
					</Box>
				</Box>

				<Box >
					{generateUnorderedNumLists(iterateData)}
				</Box>
			</Box>
		</Box>
	);
}

export default HCMDesigns;
