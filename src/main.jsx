import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, StyledEngineProvider } from "@mui/material";
import { theme, inputGlobalStyles } from "./theme";

import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<StyledEngineProvider injectFirst>
			<ThemeProvider theme={theme}>
				{inputGlobalStyles}
				<App />
			</ThemeProvider>
		</StyledEngineProvider>
	</React.StrictMode>
);
