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
				fontFamily: "Poppins",
			},
		}}
	/>
);

export const theme = createTheme({
	breakpoints: {
		values: {
			xs: 0,
			sm: 656,
			md: 1023,
			lg: 1440,
			xl: 1920,
		},
	},
	palette: colors,

	components: {
		MuiCard: {
			styleOverrides: {
				root: {
					width: "300px",
					borderRadius: "20px",
					boxShadow: "none",
					'&:hover': {
						'box-shadow': '0px 4px 10px 0px rgba(0, 0, 0, 0.20)',
						cursor: 'pointer'
					}
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
	"font-size": "14px",
	"font-style": "normal",
	"font-weight": "600",
};

theme.typography.body1 = {
	"font-size": "9px",
	"font-style": "normal",
	"font-weight": "normal",
};
