import { Route, Routes } from "react-router-dom";
import Work from "./components/main/work";

const AppRouter = () => {
	return (
		<Routes>
				<Route path="/" element={<Work />} />
				<Route path="/Garden" element={<div>Hello There</div>} />
				<Route path="/About" element={<div>How's it going?</div>}  />
				<Route path="/Contact" element={<div>Have a great day!</div>}  />

		</Routes>
	);
};
export default AppRouter;
