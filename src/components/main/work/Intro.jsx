import { useTheme, Typography, Box } from "@mui/material";
import profile from "../../../assets/profile.svg";

const styles = (theme) => ({
	display: "flex",
	justifyContent: "space-around",
	alignItems: "center",
	backgroundColor: theme.palette.pink.light,
	padding: "40px",

	".title-container": {
		width: "140px",
	},

	".profile-picture": {
		width: "140px",
	},
});

const data = {
	intro: ["Hi, I'm Kim.", "I’m a UX/UI designer based in Indiana."],
	profilePic: profile,
};

function Intro() {
	const theme = useTheme();
	return (
		<Box sx={styles(theme)}>
			<Box className="title-container">
				{data.intro.map((line, idx) => (
					<Typography variant="h1" key={`intro-${idx}`}>
						{line}
					</Typography>
				))}
			</Box>

			<Box>
				<img
					src={data.profilePic}
					className="profile-picture"
					alt="profile image"
				/>
			</Box>
		</Box>
	);
}

export default Intro;
