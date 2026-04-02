import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import SearchGeographicApi from "./routes/SearchGeographicApi";
import TestTranslation from "./routes/TestTranslation";
import Layout from "./components/Layout";
import CounterContextProvider from "./contexts/CounterContext";

import './i18n';

export default function App() {
    return (
      <BrowserRouter>
        <CounterContextProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/search-geographic-api" element={<SearchGeographicApi />} />
              <Route path="/test-translation" element={<TestTranslation />} />
            </Route>
          </Routes>
        </CounterContextProvider>
      </BrowserRouter>
    );
}