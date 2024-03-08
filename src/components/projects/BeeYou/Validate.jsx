import { Box, useTheme, Typography } from "@mui/material";
import { generateCustomText } from "../../utils";
import prototype from "../../../assets/projects/BeeYou/prototype.svg";

const styles = ({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	// marginLeft: "30px",
	width: "600px",
	lineHeight: 2,
	".section--screens-container": {
		backgroundColor: theme.palette.green.background,
		width: "100vw",
		marginLeft: "-30px",
		padding: "20px 0",
	},
	".prototype--img": {
		width: "300px",
	},
	".prototype--img-and-link-container": {
		width: "360px",
	},
	".prototype--img-container": {
		backgroundColor: theme.palette.green.background,
		padding: "20px 0px",
	},
});

function BeeYouValidate() {
	const theme = useTheme();

	const validateData = {
		type: "custom",
		text: [
			{
				type: "string",
				text: "Two testing groups were done with revision each time.",
			},
			{
				type: "ul",
				text: [
					"Users would like more information on the therapist they are choosing, therefore I added an about me section.",
					"One main concern was the length of the quiz. I added a save button for the quiz.",
					"I added different methods of creating an account like using a Gmail account ",
				],
			},
		],
	};

	const linkData = 
		{
			text: "View Hi-Fi Prototype",
			route:
				"https://www.figma.com/proto/7YRb4q7jETIkaGaaSkbEWB/Bee.You?type=design&node-id=66-501&viewport=27%2C-718%2C0.1&t=jt5NExg7R741piix-0&scaling=scale-down&starting-point-node-id=127%3A1503",
			isOutsideApp: true,
		}
	

	return (
		<Box sx={styles({ theme })}>
			<Box className="mdMarginBtm">
				<Typography variant="h1" className="discover--header">
					Validate
				</Typography>

				{generateCustomText(validateData.text, "branding-and-identity-list")}
			</Box>

			<Box className="section--container lgMarginBtm">
				<Typography
					variant="h2"
					color="green.header"
					className="section--header smMarginBtm"
				>
					Prototype
				</Typography>
				<Box className="prototype--img-and-link-container centerImage">
					<Box className="prototype--img-container">
						<img src={prototype} className="prototype--img centerImage" />
					</Box>
					<a href={linkData.route} target="_blank" rel="noreferrer">
						<Typography variant="link2" className="strong" color="green.link">{linkData.text}</Typography>
					</a>
				</Box>
			</Box>
		</Box>
	);
}

export default BeeYouValidate;