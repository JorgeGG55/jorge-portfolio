import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";
import AnalyticsTracker from "./components/AnalyticsTracker";
import App from "./App.jsx";
import "../i18n.js";
import "./index.css";

const Home = lazy(() => import("./components/Home"));
const Resume = lazy(() => import("./components/Resume"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));

ReactGA.initialize("G-2B1Q0STST8");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <AnalyticsTracker />

      <App />

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </Router>
  </React.StrictMode>
);
