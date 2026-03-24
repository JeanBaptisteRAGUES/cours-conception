import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Layout from "./components/Layout";

export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
}