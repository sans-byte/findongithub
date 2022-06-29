import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import User from "./pages/User";
import Alert from "./components/layouts/Alert";
import { GitHubProvider } from "./context/github/GitHubContext";
import { AlertProvider } from "./context/alert/AlertContext";

function App() {
  return (
    <GitHubProvider>
      <AlertProvider>
        <Router>
          <div className="left-12 top-14 p-5 absolute">
            <Alert />
          </div>
          <div className="flex flex-col h-screen justify-between">
            <Navbar />
            <main className="xl:max-w-7xl container mx-auto px-3 pb-12">
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/user/:login" element={<User />}></Route>

                <Route path="*" element={<NotFound />}></Route>
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GitHubProvider>
  );
}

export default App;
