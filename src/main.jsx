import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home.jsx";
import Login from "./pages/auth/login.jsx";
import Register from "./pages/auth/register.jsx";
import Dashboard from "./pages/dashboard.jsx";
import Students from "./pages/students.jsx";
import Result from "./pages/results.jsx";
import Student from "./pages/student.jsx";
const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/login",
		element: <Login/>,
	},
	{
		path:"/register",
		element:<Register/>
	},
	{
		path:"/dashboard",
		element:<Dashboard/>
	},
	{
		path:"/students",
		element:<Students/>
	},
	{
		path:"/student/:studentId/edit",
		element:<Student/>
	},
	{
		path:"/results",
		element:<Result/>
	}
]);
{
	/* <App /> */
}
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
