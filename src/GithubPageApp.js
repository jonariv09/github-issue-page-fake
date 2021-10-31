import { Provider } from "react-redux";
import { AppRouter } from "routes/AppRouter";
import { store } from "store/store";

function GithubPageApp() {
	return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default GithubPageApp;
