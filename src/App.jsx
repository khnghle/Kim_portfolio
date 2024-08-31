import Router from "./AppRouter";
import Header from "./components/common/NavBar";
import Footer from "./components/common/Footer";
import { BrowserRouter } from "react-router-dom";


function App() {

	return (
		<BrowserRouter>
			<Header />
			<Router />
			<Footer />
		</BrowserRouter>
	);
}

export default App;
