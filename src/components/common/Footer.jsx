import { Box, useTheme, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

const styles = ({ theme }) => ({
	backgroundColor: theme.palette.pink.light,
	display: "flex",
	justifyContent: "space-between",
	".logo--image": {
		width: "30px",
	},
	".footerLink--container": {
		display: "flex",
		gap: "10px",
		paddingRight: "5px",
	},
});

function Footer() {
	const theme = useTheme();
	const linkData = [
		{ text: "LinkedIn", route: "https://www.linkedin.com/in/kimberly-de-santiago-8353aa225/", isOutsideApp: true },
	];
	return (
		<Box sx={styles({ theme })}>
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
						<Link key={`footerLink-${idx}`} to={link.route}>
							<Typography variant="link2">{link.text}</Typography>
						</Link>
					);
				})}
			</Box>
		</Box>
	);
}

export default Footer;
