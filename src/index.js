import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import 'bootstrap/dist/js/bootstrap.bundle';
import GithubPageApp from "./GithubPageApp";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
	<React.StrictMode>
		<GithubPageApp />
	</React.StrictMode>,
	document.getElementById("root")
);

reportWebVitals();
