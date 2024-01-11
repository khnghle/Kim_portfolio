import { createTheme, GlobalStyles } from "@mui/material";

const colors = {
	black: "#242424",
	pink: {
		light: "#FFF6FA",
	},
	green: {
		main: "#C7CFC6",
	},
	blue: {
		main: "#D9F0FF",
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
	components: {
		MuiCard: {
			styleOverrides: {
				root: {
					width: "300px",
					borderRadius: "20px",
					boxShadow: 'none'
				},
			},
		},
	},
});

theme.typography.h1 = {
	"font-size": "20px",
	"font-style": "normal",
	"font-weight": "600",
};

theme.typography.h2 = {
	"font-size": "16px",
	"font-style": "normal",
	"font-weight": "600",
};

theme.typography.body1 = {
	"font-size": "10px",
	"font-style": "normal",
	"font-weight": "normal",
};
