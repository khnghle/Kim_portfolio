import { Box, useTheme, Typography } from "@mui/material";
import { useLocation, NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";

const styles = ({ theme, location }) => ({
	backgroundColor: location === "/" ? theme.palette.pink.light : "",
	display: "flex",
	".logo--image": {
		width: "60px",
	},
	".navLink--container": {
		display: "flex",
		// gap: "10px",
		alignItems: "center",
	},
	".navLink--item": {
		padding: "0px 10px",
		"&:hover": {
			backgroundColor: theme.palette.green.light,
			borderRadius: "10px",
		},
	},
});

function NavBar() {
	const location = useLocation();
	const theme = useTheme();
	const linkData = [
		{ text: "Work", route: "/" },
		{ text: "Garden", route: "/Garden" },
		{ text: "About", route: "/About" },
		{ text: "Contact", route: "/Contact" },
	];
	return (
		<Box sx={styles({ theme, location: location.pathname })}>
			<img src={logo} className="logo--image" />
			<Box className="navLink--container">
				{linkData.map((link, idx) => (
					<NavLink
						key={`navLink-${idx}`}
						to={link.route}
						className={"navLink--item"}
						style={({ isActive, }) => {
							return {
								fontWeight: isActive ? "bold" : "",
								color: isActive ? theme.palette.green.dark : "inherit",
							};
						}}
					>
						<Typography variant="link1">{link.text}</Typography>
					</NavLink>
				))}
			</Box>
		</Box>
	);
}

export default NavBar;
