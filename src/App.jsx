import "./resources/styles/App.css";
import "./resources/components/NavBar/Navbar";
import Router from "./resources/components/Router/Router";
import { AppProvider } from "./resources/context/appContext";

function App() {
  return (
    <AppProvider>
      <Router />
    </AppProvider>
  );
}

export default App;
