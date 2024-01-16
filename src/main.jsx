import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material";
import { theme, inputGlobalStyles } from "./theme";


import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			{inputGlobalStyles}
			<App/>
		</ThemeProvider>
	</React.StrictMode>
);
