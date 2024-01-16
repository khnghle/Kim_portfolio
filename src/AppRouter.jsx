import { Route, Routes } from "react-router-dom";
import Work from "./components/main/work";
import BeeYou from "./components/projects/BeeYou/index.jsx";
import HealthManagement from "./components/projects/HeathManagement/index.jsx";
import MonkeyBuddy from "./components/projects/MonkeyBuddy/index.jsx";

const AppRouter = () => {
	return (
		<Routes>
				<Route path="/" element={<Work />} />
				<Route path="/Garden" element={<div>Hello There</div>} />
				<Route path="/About" element={<div>How's it going?</div>}  />
				<Route path="/Contact" element={<div>Have a great day!</div>}  />

				<Route path="/projects/beeYou" element={<BeeYou/>}  />
				<Route path="/projects/healthManagement" element={<HealthManagement/>}  />
				<Route path="/projects/monkeyBuddy" element={<MonkeyBuddy/>}  />

		</Routes>
	);
};
export default AppRouter;
