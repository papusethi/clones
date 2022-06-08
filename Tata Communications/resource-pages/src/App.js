import "./App.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeicons/primeicons.css";
import Header from "./compponents/Header/Header";
import Resources from "./Pages/Resources";
import Footer from "./compponents/Footer/Footer";
import MobileHeader from "./compponents/MobileHeader/MobileHeader";

function App() {
  return (
    <div className="App">
      <MobileHeader className="mobile-menu" />
      <Header className="desktop-menu" />
      <Resources />
      <Footer />
    </div>
  );
}

export default App;
