import { Routes, Route } from "react-router-dom";
import EmailList from "./components/EmailList";
import Header from "./components/Header";
import Mail from "./components/Mail";
import Sidebar from "./components/Sidebar";
import SendMail from "./components/SendMail";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "./feature/mailSlice";
import { login, selectUser } from "./feature/userSlice";
import Login from "./components/Login";
import { useEffect } from "react";
import { auth } from "./firebase";

function App() {
	const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
	const user = useSelector(selectUser);
	const dispatch = useDispatch();
	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			if (user) {
				//the user is logged in
				dispatch(
					login({
						displayName: user.displayName,
						email: user.email,
						photoUrl: user.photoURL,
					})
				);
			}
		});
	}, []);
	return !user ? (
		<Login />
	) : (
		<div className="app">
			<Header />
			<div className="app_body">
				<Sidebar />
				<Routes>
					<Route path="mail" element={<Mail />} />
					<Route path="/" element={<EmailList />} />
				</Routes>
			</div>
			{sendMessageIsOpen && <SendMail />}
		</div>
	);
}

export default App;
