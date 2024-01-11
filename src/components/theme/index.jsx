import { createTheme, GlobalStyles } from "@mui/material";

const colors = {
	black: "#242424",
	pink: {
		light: "#FFF6FA",
	},
	blue: {
		main: "#C7CFC6",
	},
	orange: {
		main: "#FBCEC2",
	},
};

export const inputGlobalStyles = (
	<GlobalStyles
		styles={{
			"*": {
				margin: 0,
			},
		}}
	/>
);

export const theme = createTheme({
	palette: colors,
	typography: {
		fontFamily: "Poppins",
	},
});

theme.typography.h1 = {
	"font-size": "20px",
	"font-style": "normal",
	"font-weight": "600",
};
