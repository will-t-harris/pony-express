import React, { useState } from "react";
import axios from "axios";

import { Header } from "./Header";

export const Login = (props) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const onSubmit = (event) => {
		event.preventDefault();

		axios
			.post("http://localhost:5000/users/login", {
				email,
				password,
			})
			.then(() => (window.location = "/"))
			.catch((err) => console.error(`Error in axios request: ${err}`));
	};
	return (
		<>
			<Header headerText="Pony Express" />
			<form
				className="pt-16 flex flex-col"
				action="/login"
				method="POST"
				onSubmit={onSubmit}
			>
				<h2>Login</h2>
				<label htmlFor="email">Email Address</label>
				<input
					type="email"
					name="email"
					className="bg-purple-100"
					onChange={(event) => setEmail(event.target.value)}
				/>
				<label htmlFor="password">Password</label>
				<input
					type="password"
					name="password"
					className="bg-purple-100"
					onChange={(event) => setPassword(event.target.value)}
				/>
				<input type="submit" value="Log In &#10148;" />
			</form>
		</>
	);
};
