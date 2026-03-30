import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import SearchGeographicApi from "./routes/SearchGeographicApi";
import Layout from "./components/Layout";
import CounterContextProvider from "./contexts/CounterContext";

export default function App() {
    return (
      <BrowserRouter>
        <CounterContextProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/search-geographic-api" element={<SearchGeographicApi />} />
            </Route>
          </Routes>
        </CounterContextProvider>
      </BrowserRouter>
    );
}