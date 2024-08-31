import { Box, useTheme, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { useLocation } from "react-router-dom";


const styles = ({ theme, location }) => ({
	backgroundColor: theme.palette.pink.light,
	display: "flex",
	justifyContent: "space-between",
	position: location?.pathname === '/'? 'absolute' : '',
	bottom: "0",
	width: "100%",
	".logo--image": {
		width: "50px",
	},
	".footerLink--container": {
		display: "flex",
		gap: "10px",
		paddingRight: "15px",
		alignItems: 'center'
	},
});

function Footer() {
	const theme = useTheme();
	const location = useLocation()

	const linkData = [
		{
			text: "LinkedIn",
			route: "https://www.linkedin.com/in/kimberly-de-santiago-8353aa225/",
			isOutsideApp: true,
		},
	];
	return (
		<Box sx={styles({ theme, location })}>
			<img src={logo} className="logo--image" />
			<Box className="footerLink--container">
				{linkData.map((link, idx) => {
					if (link.isOutsideApp)
						return (
							<a
								key={`footerLink-${idx}`}
								href={link.route}
								target="_blank"
								rel="noreferrer"
							>
								<Typography variant="link2">{link.text}</Typography>
							</a>
						);

					return (
						<Link
							key={`footerLink-${idx}`}
							to={link.route}
						>
							<Typography variant="link2">{link.text}</Typography>
						</Link>
					);
				})}
			</Box>
		</Box>
	);
}

export default Footer;
