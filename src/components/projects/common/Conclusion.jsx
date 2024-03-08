import { Box, useTheme, Typography } from "@mui/material";

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

function Conclusion() {
	const theme = useTheme();

	return (
		<Box sx={styles({ theme })}>
			<Box className="lgMarginBtm">
				<Typography variant="h1" className="discover--header xsmMarginBtm" >
					Conclusion
				</Typography>

				<Typography >
					Throughout this project I discovered that many people had different
					perspectives when it comes to mental health. When it came to
					organizing therapy appointments, trying to educate myself on the
					topic, or journaling it felt like I had so many things on my plate.
					However many users agreed that having it all in one place made
					managing easier and more enjoyable. I wanted to figure out a way were
					users to feel safe and have easy access to therapy and other
					resources. Based on my research, users feel like they are able to do
					more for their mental health. They have more than just therapy, they
					can educate themselves and have a writing outlet.
				</Typography>
			</Box>

      <Box className="lgMarginBtm">
        Hello World
      </Box>
		</Box>
	);
}

export default Conclusion;
