import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import "./index.css";

// page components

import HomePage from "./pages/home/HomePage";
import NotFound from "./pages/notFound/NotFoundPage";
import Compagnie from "./pages/compagnie/CompagniePage";
import CreationPage from "./pages/creation/CreationPage";
import TransmissionPage from "./pages/transmission/TransmissionPage";
import MediationPage from "./pages/mediation/MediationPage";
import ContactPage from "./pages/contact/ContactPage";
import HistoirePage from "./pages/histoire/HistoirePage";
import EquipePage from "./pages/equipe/EquipePage";

const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: "/",
				element: <HomePage />,
			},
			{
				path: "/compagnie",
				element: <Compagnie />,

				children: [
					{
						path: "/compagnie/histoire",
						element: <HistoirePage />,
					},
					{
						path: "/compagnie/equipe",
						element: <EquipePage />,
					},
				],
			},
			{
				path: "/creation",
				element: <CreationPage />,
			},
			{
				path: "/transmission",
				element: <TransmissionPage />,
			},
			{
				path: "/mediation",
				element: <MediationPage />,
			},
			{
				path: "/contact",
				element: <ContactPage />,
			},
			{
				path: "*",
				element: <NotFound />,
			},
		],
	},
]);

// rendering

const rootElement = document.getElementById("root");

if (rootElement != null) {
	ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
