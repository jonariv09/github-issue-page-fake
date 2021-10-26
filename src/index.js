import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import GithubPageApp from "./GithubPageApp";
import reportWebVitals from "./reportWebVitals";
import 'bootstrap/dist/js/bootstrap.bundle';

ReactDOM.render(
	<React.StrictMode>
		<GithubPageApp />
	</React.StrictMode>,
	document.getElementById("root")
);

reportWebVitals();
