import { createTheme, GlobalStyles } from "@mui/material";

const colors = {
	black: "#242424",
	pink: {
		light: "#FFF6FA",
	},
	green: {
		main: "#C7CFC6",
		light: "#C2DBAD94",
		dark: "#477523",
	},
	blue: {
		main: "#D9F0FF",
	},
	orange: {
		main: "#FBCEC2",
	},
	purple: {
		main: "#DDD0F1",
	},
};

export const inputGlobalStyles = (
	<GlobalStyles
		styles={{
			"*": {
				margin: 0,
				fontFamily: "Poppins",
			},
			a: {
				textDecoration: "none",
				color: "inherit",
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
					"&:hover": {
						boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.20)",
						cursor: "pointer",
					},
				},
			},
		},
	},
});

theme.typography.h1 = {
	fontSize: "20px",
	fontStyle: "normal",
	fontWeight: "600",
};

theme.typography.h2 = {
	fontSize: "14px",
	fontStyle: "normal",
	fontWeight: "600",
};

theme.typography.body1 = {
	fontSize: "9px",
	fontStyle: "normal",
	fontWeight: "normal",
};

theme.typography.link1 = {
	fontSize: "12px",
	fontStyle: "normal",
	fontWeight: "normal",
};

theme.typography.link2 = {
	fontSize: "8px",
	textDecoration: "underline",
};
